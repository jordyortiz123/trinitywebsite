"use client";
import Link from "next/link";
import { useState } from "react";

const tiers = [
  {
    name: "Fiesta Basic",
    nameEs: "Fiesta Básica",
    tagline: "Perfect for small gatherings",
    taglineEs: "Perfecto para reuniones pequeñas",
    price: "$125",
    priceNote: "starting at / desde",
    color: "fiesta-green",
    borderColor: "border-fiesta-green",
    bgColor: "bg-fiesta-green",
    popular: false,
    features: [
      { en: "1 Small Bouncy Castle (4 hours)", es: "1 Brincolín Pequeño (4 horas)", detail: "$25/hr x 4hrs = $100" },
      { en: "2 Tables", es: "2 Mesas", detail: "Included" },
      { en: "4 Chairs", es: "4 Sillas", detail: "Included" },
      { en: "Free delivery in Denver", es: "Entrega gratis en Denver", detail: "Included" },
      { en: "Setup & takedown included", es: "Instalación y desmontaje incluido", detail: "Included" },
    ],
    notIncluded: [
      { en: "Water Slide", es: "Tobogán de Agua" },
      { en: "Cotton Candy Machine", es: "Máquina de Algodón" },
      { en: "Photo Booth", es: "Cabina de Fotos" },
      { en: "Sound System", es: "Sistema de Sonido" },
    ],
  },
  {
    name: "Fiesta Plus",
    nameEs: "Fiesta Plus",
    tagline: "Most popular for birthday parties!",
    taglineEs: "¡El más popular para cumpleaños!",
    price: "$400",
    priceNote: "starting at / desde",
    color: "fiesta-orange",
    borderColor: "border-fiesta-orange",
    bgColor: "bg-fiesta-orange",
    popular: true,
    features: [
      { en: "1 Large Bouncy Castle (4 hours)", es: "1 Brincolín Grande (4 horas)", detail: "$50/hr x 4hrs = $200" },
      { en: "1 Water Slide (full day, min 4hrs)", es: "1 Tobogán de Agua (día completo, mín 4hrs)", detail: "$250/day" },
      { en: "5 Tables", es: "5 Mesas", detail: "Included" },
      { en: "10 Chairs", es: "10 Sillas", detail: "Included" },
      { en: "Free delivery in Denver", es: "Entrega gratis en Denver", detail: "Included" },
      { en: "Setup & takedown included", es: "Instalación y desmontaje incluido", detail: "Included" },
    ],
    notIncluded: [
      { en: "Cotton Candy Machine (add $50+)", es: "Máquina de Algodón (añadir $50+)" },
      { en: "Photo Booth (add-on available)", es: "Cabina de Fotos (disponible como extra)" },
      { en: "Sound System (add-on available)", es: "Sistema de Sonido (disponible como extra)" },
    ],
  },
  {
    name: "Fiesta Pro",
    nameEs: "Fiesta Pro",
    tagline: "The ultimate party experience!",
    taglineEs: "¡La experiencia definitiva de fiesta!",
    price: "$750",
    priceNote: "starting at / desde",
    color: "fiesta-red",
    borderColor: "border-fiesta-red",
    bgColor: "bg-fiesta-red",
    popular: false,
    features: [
      { en: "2 Bouncy Castles — 1 Small + 1 Large (4 hours)", es: "2 Brincolines — 1 Pequeño + 1 Grande (4 horas)", detail: "$25/hr + $50/hr x 4hrs = $300" },
      { en: "1 Water Slide (full day, min 4hrs)", es: "1 Tobogán de Agua (día completo, mín 4hrs)", detail: "$250/day" },
      { en: "10 Tables", es: "10 Mesas", detail: "Included" },
      { en: "20+ Chairs", es: "20+ Sillas", detail: "Included" },
      { en: "Cotton Candy Machine + 4 Flavors", es: "Máquina de Algodón + 4 Sabores", detail: "$50 machine + $50 flavors = $100" },
      { en: "Photo Booth with props & backdrop", es: "Cabina de Fotos con accesorios y fondo", detail: "Included" },
      { en: "Portable Sound System", es: "Sistema de Sonido portátil", detail: "Included" },
      { en: "Free delivery in Denver", es: "Entrega gratis en Denver", detail: "Included" },
      { en: "Setup & takedown included", es: "Instalación y desmontaje incluido", detail: "Included" },
      { en: "Priority booking", es: "Reserva prioritaria", detail: "Included" },
    ],
    notIncluded: [],
  },
];

const individualItems = [
  {
    icon: "🏰",
    name: "Bouncy Castle (Small)",
    nameEs: "Brincolín (Pequeño)",
    pricing: "$25/hour (first 4 hours) | Full day available",
    pricingEs: "$25/hora (primeras 4 horas) | Día completo disponible",
    available: "1 available",
  },
  {
    icon: "🏰",
    name: "Bouncy Castle (Large)",
    nameEs: "Brincolín (Grande)",
    pricing: "$50/hour (first 4 hours) | Full day available",
    pricingEs: "$50/hora (primeras 4 horas) | Día completo disponible",
    available: "1 available",
  },
  {
    icon: "🌊",
    name: "Water Slide",
    nameEs: "Tobogán de Agua",
    pricing: "$150/day (minimum 4 hours)",
    pricingEs: "$150/día (mínimo 4 horas)",
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
    pricing: "$50/day machine | +$50 for 4 flavor kit ($100 total)",
    pricingEs: "$50/día máquina | +$50 por kit de 4 sabores ($100 total)",
    available: "1 available",
  },
  {
    icon: "📸",
    name: "Photo Booth",
    nameEs: "Cabina de Fotos",
    pricing: "Ask for quote — includes backdrop, props & digital copies",
    pricingEs: "Solicitar cotización — incluye fondo, accesorios y copias digitales",
    available: "Available",
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
