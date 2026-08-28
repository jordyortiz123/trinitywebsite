import Link from "next/link";

export const metadata = {
  title: "Deposit Received / Depósito Recibido",
};

/* Stripe sends the customer here after a successful payment. This page is a
   receipt for the customer, not proof of payment for us — anyone can type the
   URL. The Stripe dashboard (and the webhook, once its signing secret is set)
   is the record that money actually moved. */
export default async function PaidPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  return (
    <div className="min-h-[70vh] bg-fiesta-cream flex items-center justify-center py-20 px-4">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg border-2 border-fiesta-green p-8 md:p-10 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="text-3xl font-extrabold text-fiesta-teal">Deposit Received!</h1>
        <p className="text-fiesta-orange font-medium">¡Depósito Recibido!</p>

        <p className="mt-6 text-fiesta-teal/80">
          Thank you — your date is being held. We&apos;ll reach out shortly to confirm the details
          of your event. The remaining balance is due on the day of the party.
        </p>
        <p className="mt-3 text-sm text-fiesta-teal/50">
          Gracias — estamos apartando tu fecha. Te contactaremos pronto para confirmar los detalles
          de tu evento. El saldo restante se paga el día de la fiesta.
        </p>

        <div className="mt-6 bg-fiesta-cream rounded-xl p-4 text-sm text-fiesta-teal/70">
          Stripe has emailed you a receipt. Questions? Call or text{" "}
          <a href="tel:303-295-3886" className="text-fiesta-orange font-bold hover:underline">
            (303) 295-3886
          </a>
          .
        </div>

        {session_id && (
          <p className="mt-4 text-xs text-fiesta-teal/40 break-all">
            Reference: {session_id}
          </p>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="bg-fiesta-orange text-white px-6 py-3 rounded-full font-bold hover:bg-fiesta-red transition-colors"
          >
            Back to Home / Inicio
          </Link>
          <Link
            href="/rentals"
            className="bg-white border-2 border-fiesta-teal/20 text-fiesta-teal px-6 py-3 rounded-full font-bold hover:border-fiesta-teal/40 transition-colors"
          >
            See Packages / Ver Paquetes
          </Link>
        </div>
      </div>
    </div>
  );
}
