"use client";
import Link from "next/link";
import { useState } from "react";

const tiers = [
  {
    name: "Fiesta Basic",
    nameEs: "Fiesta Básica",
    tagline: "Perfect for small gatherings",
    taglineEs: "Perfecto para reuniones pequeñas",
    price: "$200",
    priceNote: "starting at / desde",
    color: "fiesta-green",
    borderColor: "border-fiesta-green",
    bgColor: "bg-fiesta-green",
    popular: false,
    features: [
      { en: "1 Small Bouncy Castle (full day, min 4 hrs)", es: "1 Brincolín Pequeño (día completo, mín 4 hrs)", detail: "$125/day" },
      { en: "2 Tables", es: "2 Mesas", detail: "Included" },
      { en: "6 Chairs", es: "6 Sillas", detail: "Included" },
      { en: "Free delivery in Denver", es: "Entrega gratis en Denver", detail: "Included" },
      { en: "Setup & takedown included", es: "Instalación y desmontaje incluido", detail: "Included" },
    ],
    notIncluded: [
      { en: "Water Slide", es: "Tobogán de Agua" },
      { en: "Cotton Candy Machine (coming soon)", es: "Máquina de Algodón (próximamente)" },
      { en: "Photo Booth (coming soon)", es: "Cabina de Fotos (próximamente)" },
      { en: "Sound System", es: "Sistema de Sonido" },
    ],
  },
  {
    name: "Fiesta Plus",
    nameEs: "Fiesta Plus",
    tagline: "Most popular for birthday parties!",
    taglineEs: "¡El más popular para cumpleaños!",
    price: "$600",
    priceNote: "starting at / desde",
    color: "fiesta-orange",
    borderColor: "border-fiesta-orange",
    bgColor: "bg-fiesta-orange",
    popular: true,
    features: [
      { en: "1 Small Bouncy Castle (full day, min 4 hrs)", es: "1 Brincolín Pequeño (día completo, mín 4 hrs)", detail: "$125/day" },
      { en: "1 Water Slide (full day, min 4hrs)", es: "1 Tobogán de Agua (día completo, mín 4hrs)", detail: "$250/day" },
      { en: "4 Tables", es: "4 Mesas", detail: "Included" },
      { en: "10 Chairs", es: "10 Sillas", detail: "Included" },
      { en: "Free delivery in Denver", es: "Entrega gratis en Denver", detail: "Included" },
      { en: "Setup & takedown included", es: "Instalación y desmontaje incluido", detail: "Included" },
    ],
    notIncluded: [
      { en: "Cotton Candy Machine (coming soon)", es: "Máquina de Algodón (próximamente)" },
      { en: "Photo Booth (coming soon)", es: "Cabina de Fotos (próximamente)" },
      { en: "Sound System (add-on available)", es: "Sistema de Sonido (disponible como extra)" },
    ],
  },
  {
    name: "Fiesta Pro",
    nameEs: "Fiesta Pro",
    tagline: "The ultimate party experience!",
    taglineEs: "¡La experiencia definitiva de fiesta!",
    price: "$800",
    priceNote: "starting at / desde",
    color: "fiesta-red",
    borderColor: "border-fiesta-red",
    bgColor: "bg-fiesta-red",
    popular: false,
    features: [
      { en: "1 Small Bouncy Castle (full day, min 4 hrs)", es: "1 Brincolín Pequeño (día completo, mín 4 hrs)", detail: "$125/day" },
      { en: "1 Water Slide (full day, min 4hrs)", es: "1 Tobogán de Agua (día completo, mín 4hrs)", detail: "$250/day" },
      { en: "10 Tables", es: "10 Mesas", detail: "Included" },
      { en: "20+ Chairs", es: "20+ Sillas", detail: "Included" },
      { en: "Portable Sound System", es: "Sistema de Sonido portátil", detail: "Included" },
      { en: "Free delivery in Denver", es: "Entrega gratis en Denver", detail: "Included" },
      { en: "Setup & takedown included", es: "Instalación y desmontaje incluido", detail: "Included" },
      { en: "Priority booking", es: "Reserva prioritaria", detail: "Included" },
    ],
    notIncluded: [
      { en: "Cotton Candy Machine (coming soon)", es: "Máquina de Algodón (próximamente)" },
      { en: "Photo Booth (coming soon)", es: "Cabina de Fotos (próximamente)" },
    ],
  },
];

const individualItems = [
  {
    icon: "🏰",
    name: "Bouncy Castle (Small)",
    nameEs: "Brincolín (Pequeño)",
    pricing: "$125 full day (minimum 4 hours) — no hourly rentals",
    pricingEs: "$125 día completo (mínimo 4 horas) — sin renta por hora",
    available: "1 available",
  },
  {
    icon: "🏰",
    name: "Bouncy Castle (Large)",
    nameEs: "Brincolín (Grande)",
    pricing: "$225 full day (minimum 4 hours) — no hourly rentals",
    pricingEs: "$225 día completo (mínimo 4 horas) — sin renta por hora",
    available: "1 available",
  },
  {
    icon: "🌊",
    name: "Water Slide",
    nameEs: "Tobogán de Agua",
    pricing: "$250/day (minimum 4 hours)",
    pricingEs: "$250/día (mínimo 4 horas)",
    available: "2 available",
  },
  {
    icon: "🪑",
    name: "Tables",
    nameEs: "Mesas",
    pricing: "Custom quote based on quantity",
    pricingEs: "Cotización personalizada según cantidad",
    available: "5-10 available (more can be arranged)",
  },
  {
    icon: "💺",
    name: "Chairs",
    nameEs: "Sillas",
    pricing: "Custom quote based on quantity",
    pricingEs: "Cotización personalizada según cantidad",
    available: "10+ available (more can be arranged)",
  },
  {
    icon: "🍭",
    name: "Cotton Candy Machine",
    nameEs: "Máquina de Algodón de Azúcar",
    pricing: "Coming soon",
    pricingEs: "Próximamente",
    available: "Coming soon",
  },
  {
    icon: "📸",
    name: "Photo Booth",
    nameEs: "Cabina de Fotos",
    pricing: "Coming soon",
    pricingEs: "Próximamente",
    available: "Coming soon",
  },
  {
    icon: "🔊",
    name: "Portable Sound System",
    nameEs: "Sistema de Sonido Portátil",
    pricing: "Ask for quote",
    pricingEs: "Solicitar cotización",
    available: "Available",
  },
];

function TierCard({ tier }: { tier: typeof tiers[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative bg-white rounded-3xl shadow-lg border-2 ${tier.borderColor} overflow-hidden transition-all hover:shadow-2xl ${
        tier.popular ? "md:-mt-4 md:mb-0" : ""
      }`}
    >
      {tier.popular && (
        <div className={`${tier.bgColor} text-white text-center text-sm font-bold py-2`}>
          ⭐ MOST POPULAR / MÁS POPULAR ⭐
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-extrabold text-fiesta-teal">{tier.name}</h3>
        <p className="text-sm text-fiesta-orange font-medium">{tier.nameEs}</p>
        <p className="text-sm text-fiesta-teal/60 mt-1">{tier.tagline}</p>
        <p className="text-xs text-fiesta-teal/40">{tier.taglineEs}</p>

        <div className="my-6">
          <span className="text-xs text-fiesta-teal/50 uppercase tracking-wide">{tier.priceNote}</span>
          <div className="text-5xl font-extrabold text-fiesta-teal">{tier.price}</div>
          <p className="mt-2 text-xs text-fiesta-orange font-medium">
            Prices may vary on holidays &amp; weekends
            <span className="block text-fiesta-teal/50 font-normal">Los precios pueden variar en días festivos y fines de semana</span>
          </p>
        </div>

        <Link
          href="/book"
          className={`block w-full text-center ${tier.bgColor} text-white py-3 rounded-full font-bold text-lg transition-all hover:opacity-90 hover:scale-[1.02]`}
        >
          Book Now / Reservar
        </Link>

        <ul className="mt-6 space-y-3">
          {tier.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="text-fiesta-green mt-0.5 flex-shrink-0">✓</span>
              <div className="flex-1">
                <span className="text-fiesta-teal">{f.en}</span>
                <span className="block text-fiesta-teal/50 text-xs">{f.es}</span>
              </div>
            </li>
          ))}
          {tier.notIncluded.map((f, i) => (
            <li key={`no-${i}`} className="flex items-start gap-2 text-sm opacity-40">
              <span className="mt-0.5 flex-shrink-0">—</span>
              <div>
                <span className="text-fiesta-teal">{f.en}</span>
                <span className="block text-fiesta-teal/50 text-xs">{f.es}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Expandable Detail Breakdown */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 w-full text-center text-sm text-fiesta-orange hover:text-fiesta-red font-semibold transition-colors"
        >
          {expanded ? "Hide Details ▲" : "See Price Breakdown ▼"}
        </button>
        {expanded && (
          <div className="mt-3 bg-fiesta-cream rounded-xl p-4 space-y-2 text-sm animate-in">
            <p className="font-bold text-fiesta-teal text-xs uppercase tracking-wide mb-2">What&apos;s Included:</p>
            {tier.features.map((f, i) => (
              <div key={i} className="flex justify-between items-center border-b border-fiesta-yellow/15 pb-1">
                <span className="text-fiesta-teal/80">{f.en}</span>
                <span className="text-fiesta-orange font-semibold text-xs">{f.detail}</span>
              </div>
            ))}
            <div className="pt-2 flex justify-between font-bold text-fiesta-teal border-t border-fiesta-teal/20 mt-2">
              <span>Starting Total</span>
              <span className="text-fiesta-orange text-lg">{tier.price}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function RentalsPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-fiesta-teal to-fiesta-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Party Packages / Paquetes de Fiesta
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Choose the perfect package for your celebration. All packages include free delivery & setup in Denver.
          </p>
          <p className="text-lg text-white/60 mt-2">
            Elige el paquete perfecto. Todos incluyen entrega e instalación gratis en Denver.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-20 bg-fiesta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-fiesta-teal/60 mb-10 text-sm">
            Click &quot;See Price Breakdown&quot; on any package to see exactly what&apos;s included and how pricing works.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier) => (
              <TierCard key={tier.name} tier={tier} />
            ))}
          </div>

          {/* Pricing Notice */}
          <div className="mt-12 max-w-3xl mx-auto bg-white border-2 border-fiesta-orange/40 rounded-2xl p-6 text-center shadow-sm">
            <h3 className="text-lg font-extrabold text-fiesta-orange mb-3">
              Please Note / Aviso Importante
            </h3>
            <ul className="space-y-2 text-sm text-fiesta-teal/80">
              <li>
                Prices may vary on holidays and weekends.
                <span className="block text-xs text-fiesta-teal/50">Los precios pueden variar en días festivos y fines de semana.</span>
              </li>
              <li>
                Bundle pricing varies depending on the items included.
                <span className="block text-xs text-fiesta-teal/50">El precio de los paquetes varía según los artículos incluidos.</span>
              </li>
              <li>
                <strong className="text-fiesta-teal">A mandatory security deposit is required on all rentals</strong> — amount quoted at booking.
                <span className="block text-xs text-fiesta-teal/50">Se requiere un depósito de seguridad obligatorio en todas las rentas — el monto se cotiza al reservar.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Individual Items */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-fiesta-teal text-center mb-4">
            Individual Rentals / Alquileres Individuales
          </h2>
          <p className="text-center text-fiesta-teal/60 mb-12 max-w-2xl mx-auto">
            Don&apos;t need a full package? Rent individual items and build your own party setup.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {individualItems.map((item) => (
              <div
                key={item.name}
                className="bg-fiesta-cream rounded-2xl p-5 border border-fiesta-yellow/20 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-fiesta-teal">{item.name}</h3>
                <p className="text-xs text-fiesta-orange font-medium mb-2">{item.nameEs}</p>
                <p className="text-sm text-fiesta-teal/80 font-semibold leading-snug">{item.pricing}</p>
                <p className="text-xs text-fiesta-teal/50 mt-1">{item.pricingEs}</p>
                <p className="text-xs text-fiesta-green mt-2 font-medium">{item.available}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-fiesta-orange to-fiesta-red text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">
            Need a Custom Package? / ¿Necesitas un Paquete Personalizado?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Contact us and we&apos;ll create the perfect package for your event!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-fiesta-red hover:bg-fiesta-yellow hover:text-fiesta-teal px-8 py-3 rounded-full font-bold transition-all"
            >
              Contact Us / Contáctanos
            </Link>
            <a
              href="tel:303-295-3886"
              className="border-2 border-white hover:bg-white hover:text-fiesta-red px-8 py-3 rounded-full font-bold transition-all"
            >
              📞 303-295-3886
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
