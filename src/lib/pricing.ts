/* The price list, server side.

   The browser only ever sends *what* is being booked — never an amount. The
   checkout route looks the price up here and charges that, so nothing editable
   in the page can change what Stripe takes.

   Keep these numbers in step with the rentals page. */

export const DEPOSIT_RATE = 0.25; /* 25% due at booking, balance on the day */

export type Priced = {
  id: string;
  name: string;
  nameEs: string;
  price: number;
};

export const PACKAGES: Priced[] = [
  { id: "basic", name: "Fiesta Basic", nameEs: "Fiesta Básica", price: 200 },
  { id: "plus", name: "Fiesta Plus", nameEs: "Fiesta Plus", price: 600 },
  { id: "pro", name: "Fiesta Pro", nameEs: "Fiesta Pro", price: 800 },
];

/* Only items with a fixed published price can be paid for online. Tables,
   chairs and the sound system are quoted per event, so they are booked through
   the form and settled directly. */
export const ITEMS: Priced[] = [
  { id: "bouncy-small", name: "Bouncy Castle (Small) — full day", nameEs: "Brincolín Pequeño — día completo", price: 125 },
  { id: "bouncy-large", name: "Bouncy Castle (Large) — full day", nameEs: "Brincolín Grande — día completo", price: 225 },
  { id: "waterslide", name: "Water Slide — full day", nameEs: "Tobogán de Agua — día completo", price: 250 },
];

export function findPriced(kind: string, id: unknown): Priced | null {
  if (typeof id !== "string") return null;
  const list = kind === "item" ? ITEMS : PACKAGES;
  return list.find((p) => p.id === id) ?? null;
}

/* Deposit in whole dollars — rounded up so we never undercharge by a cent. */
export function depositFor(price: number): number {
  return Math.ceil(price * DEPOSIT_RATE);
}
