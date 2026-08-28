/* POST /api/stripe-webhook — Stripe tells us a deposit actually settled.

   Why this exists: a customer landing on /paid proves nothing. They can type
   that URL, or close the tab before it loads. Stripe calling us here is the
   only trustworthy signal that money moved, and it is signed, so nobody else
   can fake it.

   Stripe signs the exact bytes of the body, so this reads the raw text and
   parses it only after the signature checks out.

   Needs STRIPE_WEBHOOK_SECRET (whsec_...). Without it this refuses every
   request rather than trusting an unverified one. */

import crypto from "node:crypto";

const TOLERANCE_SECONDS = 300; /* reject replays older than five minutes */

function noStore(body: unknown, status: number): Response {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

/* Stripe sends: stripe-signature: t=<unix>,v1=<hex>,v1=<hex>
   The signed payload is `${t}.${rawBody}`, HMAC-SHA256 with the endpoint
   secret. Several v1 values can appear while a secret is being rotated. */
function verify(raw: string, header: string | null, secret: string): { ok: boolean; why?: string } {
  if (!header) return { ok: false, why: "missing signature header" };

  let timestamp = "";
  const signatures: string[] = [];
  for (const part of header.split(",")) {
    const [k, v] = part.split("=");
    if (k === "t") timestamp = v;
    else if (k === "v1" && v) signatures.push(v);
  }
  if (!timestamp || !signatures.length) return { ok: false, why: "malformed signature header" };

  const age = Math.abs(Math.floor(Date.now() / 1000) - Number(timestamp));
  if (!Number.isFinite(age) || age > TOLERANCE_SECONDS) return { ok: false, why: "timestamp outside tolerance" };

  const expected = crypto.createHmac("sha256", secret).update(`${timestamp}.${raw}`, "utf8").digest("hex");
  const want = Buffer.from(expected, "utf8");

  /* Constant-time compare, so response timing never leaks the signature. */
  const match = signatures.some((sig) => {
    const got = Buffer.from(sig, "utf8");
    return got.length === want.length && crypto.timingSafeEqual(got, want);
  });

  return match ? { ok: true } : { ok: false, why: "signature mismatch" };
}

const escapeHtml = (s: unknown) =>
  String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string);

const usd = (cents: unknown) =>
  "$" + (Number(cents || 0) / 100).toLocaleString("en-US", { minimumFractionDigits: 2 });

type StripeSession = {
  id?: string;
  amount_total?: number;
  payment_status?: string;
  metadata?: Record<string, string>;
  customer_details?: { name?: string; email?: string; phone?: string };
};

/* Emails the booking through Resend when it is configured. Until then the
   confirmed payment is recorded in the function log and in Stripe itself, and
   this says so plainly rather than failing quietly. */
async function notify(session: StripeSession) {
  const m = session.metadata || {};
  const c = session.customer_details || {};

  const rows: [string, unknown][] = [
    ["Paid", usd(session.amount_total)],
    ["Package", m.selection],
    ["Full price", m.full_price ? `$${m.full_price}` : ""],
    ["Balance due on the day", m.balance_due ? `$${m.balance_due}` : ""],
    ["Event date", m.event_date],
    ["Customer", m.customer_name || c.name],
    ["Email", c.email],
    ["Phone", c.phone],
    ["Stripe session", session.id],
  ];
  const filled = rows.filter(([, v]) => v);

  const key = process.env.RESEND_API_KEY;
  const to = process.env.INQUIRY_TO;
  if (!key || !to) {
    console.log(
      "Deposit confirmed (no email configured — see Stripe dashboard):",
      JSON.stringify(Object.fromEntries(filled)),
    );
    return;
  }

  const html =
    `<h2 style="font:600 18px system-ui;margin:0 0 4px">Deposit received — ${escapeHtml(usd(session.amount_total))}</h2>` +
    '<p style="font:14px system-ui;color:#666;margin:0 0 16px">Stripe confirmed this one. The money is real.</p>' +
    '<table style="font:14px system-ui;border-collapse:collapse">' +
    filled
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 16px 6px 0;color:#666;vertical-align:top">${escapeHtml(k)}</td>` +
          `<td style="padding:6px 0"><b>${escapeHtml(v)}</b></td></tr>`,
      )
      .join("") +
    "</table>";

  const r = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.INQUIRY_FROM || "Fiesta Fun Familia <onboarding@resend.dev>",
      to: [to],
      subject: `Deposit received — ${usd(session.amount_total)} — ${m.selection || "Fiesta Fun Familia"}`,
      html,
    }),
  });
  if (!r.ok) console.error("Could not email the payment notice", r.status, await r.text());
}

export async function POST(request: Request): Promise<Response> {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    console.error("STRIPE_WEBHOOK_SECRET is not set — refusing to trust this request");
    return noStore({ error: "not_configured" }, 503);
  }

  let raw: string;
  try {
    raw = await request.text();
  } catch {
    return noStore({ error: "bad_body" }, 400);
  }

  const check = verify(raw, request.headers.get("stripe-signature"), secret);
  if (!check.ok) {
    console.warn("Rejected a webhook:", check.why);
    return noStore({ error: "bad_signature" }, 400);
  }

  let event: { type?: string; data?: { object?: StripeSession } };
  try {
    event = JSON.parse(raw);
  } catch {
    return noStore({ error: "bad_json" }, 400);
  }

  /* Answer Stripe quickly and never let a downstream failure cause a retry
     storm — the signature already told us this is genuine. */
  try {
    if (event.type === "checkout.session.completed") {
      const s = event.data?.object;
      if (s && s.payment_status === "paid") await notify(s);
      else console.log("Session completed but not paid yet —", s?.id);
    } else {
      console.log("Ignoring event type", event.type);
    }
  } catch (err) {
    console.error("Webhook handling failed after verification", err);
  }

  return noStore({ received: true }, 200);
}
