/* POST /api/checkout — opens a real Stripe Checkout session for the deposit.

   The page sends only which package or item is being booked. The amount is
   worked out here from src/lib/pricing.ts, so the price shown is the price
   Stripe takes and nothing in the browser can alter it.

   Stripe-hosted checkout brings card, Apple Pay, Google Pay and Link with it —
   no card details ever touch this site.

   Needs STRIPE_SECRET_KEY. Without it this returns a clean 503 and the page
   falls back to "call us" rather than a dead button. No SDK: Stripe's REST API
   over fetch. */

import { DEPOSIT_RATE, depositFor, findPriced } from "@/lib/pricing";

const PHONE = "(303) 295-3886";

/* Best-effort per-instance rate limit. Fluid Compute reuses an instance across
   requests, so this catches one person or script hammering the endpoint. It is
   not a defence against a distributed flood — use the Vercel WAF for that. */
const buckets = new Map<string, { first: number; n: number }>();

function throttled(ip: string, max: number, windowMs: number): boolean {
  const now = Date.now();
  for (const [k, v] of buckets) if (now - v.first > windowMs) buckets.delete(k);
  const hit = buckets.get(ip);
  if (!hit) {
    buckets.set(ip, { first: now, n: 1 });
    return false;
  }
  hit.n += 1;
  return hit.n > max;
}

/* The Vercel Stripe integration may prefix the variable it provisions, so take
   STRIPE_SECRET_KEY if it is there and otherwise any *_STRIPE_SECRET_KEY. */
function stripeKey(): string {
  if (process.env.STRIPE_SECRET_KEY) return process.env.STRIPE_SECRET_KEY;
  const name = Object.keys(process.env)
    .filter((n) => /STRIPE.*SECRET_KEY$/.test(n) && process.env[n])
    .sort()[0];
  return name ? (process.env[name] as string) : "";
}

/* Stripe's API is form-encoded, including its nested keys. */
function encode(pairs: [string, string][]): string {
  return pairs
    .filter(([, v]) => v !== undefined && v !== null && v !== "")
    .map(([k, v]) => encodeURIComponent(k) + "=" + encodeURIComponent(v))
    .join("&");
}

function noStore(body: unknown, status: number): Response {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request): Promise<Response> {
  const ip = (request.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  if (throttled(ip, 8, 60000)) {
    return noStore(
      { error: "too_many", message: `Too many attempts just now. Give it a minute, or call us at ${PHONE}.` },
      429,
    );
  }

  const key = stripeKey();
  if (!key) {
    return noStore(
      {
        error: "not_configured",
        message: `Card payment is not switched on yet. Call or text us at ${PHONE} and we will take it from there.`,
      },
      503,
    );
  }

  let body: Record<string, unknown> = {};
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return noStore({ error: "bad_request", message: "Could not read that request." }, 400);
  }

  const kind = body.kind === "item" ? "item" : "package";
  const priced = findPriced(kind, body.id);
  if (!priced) {
    return noStore({ error: "unknown_item", message: "Choose which package or rental you are booking." }, 400);
  }

  const amount = depositFor(priced.price);
  const cents = Math.round(amount * 100);
  if (!(cents > 0)) {
    return noStore({ error: "zero_amount", message: "Nothing to pay for that selection." }, 400);
  }

  const proto = (request.headers.get("x-forwarded-proto") || "https").split(",")[0].trim();
  const host = (request.headers.get("x-forwarded-host") || request.headers.get("host") || "").split(",")[0].trim();
  const site = host ? `${proto}://${host}` : "";

  const rawEmail = typeof body.email === "string" ? body.email.trim() : "";
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(rawEmail) ? rawEmail : "";

  const percent = Math.round(DEPOSIT_RATE * 100);
  const label = `${priced.name} — ${percent}% booking deposit`;
  const detail =
    `${percent}% of the $${priced.price} total, due now to hold your date. ` +
    `The remaining $${priced.price - amount} is due on the day of your event. ` +
    `A separate refundable security deposit may apply.`;

  const params = encode([
    ["mode", "payment"],
    ["submit_type", "pay"],
    ["success_url", `${site}/paid?session_id={CHECKOUT_SESSION_ID}`],
    ["cancel_url", `${site}/book`],
    ["customer_email", email],
    ["phone_number_collection[enabled]", "true"],
    ["billing_address_collection", "auto"],
    ["line_items[0][quantity]", "1"],
    ["line_items[0][price_data][currency]", "usd"],
    ["line_items[0][price_data][unit_amount]", String(cents)],
    ["line_items[0][price_data][product_data][name]", label],
    ["line_items[0][price_data][product_data][description]", detail.slice(0, 500)],
    ["metadata[selection]", priced.name],
    ["metadata[kind]", kind],
    ["metadata[full_price]", String(priced.price)],
    ["metadata[deposit]", String(amount)],
    ["metadata[balance_due]", String(priced.price - amount)],
    ["metadata[event_date]", String(body.eventDate || "").slice(0, 40)],
    ["metadata[customer_name]", String(body.name || "").slice(0, 120)],
  ]);

  try {
    const r = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${key}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "Stripe-Version": "2024-06-20",
      },
      body: params,
    });
    const data = await r.json();

    if (!r.ok || !data.url) {
      /* Stripe's own message can name the API key, so it stays in the function
         log and never reaches the customer's screen. */
      console.error("Stripe checkout session failed", r.status, data?.error);
      return noStore(
        {
          error: "stripe_error",
          message: `Card payment did not open just now. Call or text us at ${PHONE} and we will sort it out.`,
        },
        502,
      );
    }

    return noStore({ url: data.url, amount, balance: priced.price - amount, selection: priced.name }, 200);
  } catch (err) {
    console.error("Stripe request threw", err);
    return noStore({ error: "network", message: `Could not reach Stripe. Call or text us at ${PHONE}.` }, 502);
  }
}
