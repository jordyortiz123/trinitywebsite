import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Party Rental Packages | Fiesta Fun Familia with Trinity | Denver CO",
  description: "Choose from Fiesta Basic, Plus, or Pro packages. Bouncy castles, water slides, tables, chairs, cotton candy & more in Denver. Paquetes de alquiler para fiestas.",
};

const tiers = [
  {
    name: "Fiesta Basic",
    nameEs: "Fiesta Básica",
    tagline: "Perfect for small gatherings",
    taglineEs: "Perfecto para reuniones pequeñas",
    price: "$100",
    priceNote: "starting at / desde",
    color: "fiesta-green",
    borderColor: "border-fiesta-green",
    bgColor: "bg-fiesta-green",
    popular: false,
    features: [
      { en: "1 Bouncy Castle (4 hours)", es: "1 Brincolín (4 horas)" },
      { en: "2 Tables", es: "2 Mesas" },
      { en: "4 Chairs", es: "4 Sillas" },
      { en: "Free delivery in Denver", es: "Entrega gratis en Denver" },
      { en: "Setup & takedown included", es: "Instalación y desmontaje incluido" },
    ],
    notIncluded: [
      { en: "Water Slide", es: "Tobogán de Agua" },
      { en: "Cotton Candy Machine", es: "Máquina de Algodón" },
      { en: "Sound System", es: "Sistema de Sonido" },
    ],
  },
  {
    name: "Fiesta Plus",
    nameEs: "Fiesta Plus",
    tagline: "Most popular for birthday parties!",
    taglineEs: "¡El más popular para cumpleaños!",
    price: "$350",
    priceNote: "starting at / desde",
    color: "fiesta-orange",
    borderColor: "border-fiesta-orange",
    bgColor: "bg-fiesta-orange",
    popular: true,
    features: [
      { en: "1 Bouncy Castle (4 hours)", es: "1 Brincolín (4 horas)" },
      { en: "1 Water Slide (full day)", es: "1 Tobogán de Agua (día completo)" },
      { en: "5 Tables", es: "5 Mesas" },
      { en: "10 Chairs", es: "10 Sillas" },
      { en: "Free delivery in Denver", es: "Entrega gratis en Denver" },
      { en: "Setup & takedown included", es: "Instalación y desmontaje incluido" },
    ],
    notIncluded: [
      { en: "Cotton Candy Machine (add $100)", es: "Máquina de Algodón (añadir $100)" },
      { en: "Sound System (add-on available)", es: "Sistema de Sonido (disponible como extra)" },
    ],
  },
  {
    name: "Fiesta Pro",
    nameEs: "Fiesta Pro",
    tagline: "The ultimate party experience!",
    taglineEs: "¡La experiencia definitiva de fiesta!",
    price: "$600",
    priceNote: "starting at / desde",
    color: "fiesta-red",
    borderColor: "border-fiesta-red",
    bgColor: "bg-fiesta-red",
    popular: false,
    features: [
      { en: "2 Bouncy Castles (4 hours)", es: "2 Brincolines (4 horas)" },
      { en: "1 Water Slide (full day)", es: "1 Tobogán de Agua (día completo)" },
      { en: "10 Tables", es: "10 Mesas" },
      { en: "20+ Chairs", es: "20+ Sillas" },
      { en: "Cotton Candy Machine included", es: "Máquina de Algodón incluida" },
      { en: "Portable Sound System included", es: "Sistema de Sonido portátil incluido" },
      { en: "Free delivery in Denver", es: "Entrega gratis en Denver" },
      { en: "Setup & takedown included", es: "Instalación y desmontaje incluido" },
      { en: "Priority booking", es: "Reserva prioritaria" },
    ],
    notIncluded: [],
  },
];

const individualItems = [
  {
    icon: "🏰",
    name: "Bouncy Castle",
    nameEs: "Brincolín",
    pricing: "$25/hour (first 4 hours) | Full day available",
    pricingEs: "$25/hora (primeras 4 horas) | Día completo disponible",
    available: "2 available",
  },
  {
    icon: "🌊",
    name: "Water Slide",
    nameEs: "Tobogán de Agua",
    pricing: "$150/day (minimum 2 hours)",
    pricingEs: "$150/día (mínimo 2 horas)",
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
    pricing: "$100/day",
    pricingEs: "$100/día",
    available: "1 available",
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
            Elige el paquete perfecto para tu celebración. Todos incluyen entrega e instalación gratis en Denver.
          </p>
        </div>
      </section>

      {/* Tier Cards */}
      <section className="py-20 bg-fiesta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white rounded-3xl shadow-lg border-2 ${tier.borderColor} overflow-hidden transition-all hover:shadow-2xl hover:-translate-y-1 ${
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
                        <span className="text-fiesta-green mt-0.5">✓</span>
                        <div>
                          <span className="text-fiesta-teal">{f.en}</span>
                          <span className="block text-fiesta-teal/50 text-xs">{f.es}</span>
                        </div>
                      </li>
                    ))}
                    {tier.notIncluded.map((f, i) => (
                      <li key={`no-${i}`} className="flex items-start gap-2 text-sm opacity-40">
                        <span className="mt-0.5">—</span>
                        <div>
                          <span className="text-fiesta-teal">{f.en}</span>
                          <span className="block text-fiesta-teal/50 text-xs">{f.es}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {individualItems.map((item) => (
              <div
                key={item.name}
                className="bg-fiesta-cream rounded-2xl p-6 border border-fiesta-yellow/20 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-fiesta-teal">{item.name}</h3>
                <p className="text-sm text-fiesta-orange font-medium mb-2">{item.nameEs}</p>
                <p className="text-sm text-fiesta-teal/80 font-semibold">{item.pricing}</p>
                <p className="text-xs text-fiesta-teal/50">{item.pricingEs}</p>
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
