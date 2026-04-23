import Link from "next/link";
import Image from "next/image";

const featuredRentals = [
  {
    icon: "🏰",
    title: "Bouncy Castles",
    titleEs: "Brincolines",
    desc: "Safe, clean & colorful bouncy castles for kids of all ages.",
    descEs: "Brincolines seguros, limpios y coloridos para niños de todas las edades.",
    price: "From $25/hr",
  },
  {
    icon: "🌊",
    title: "Water Slides",
    titleEs: "Toboganes de Agua",
    desc: "Beat the Colorado heat with our amazing water slides! Min 4 hours.",
    descEs: "¡Vence el calor de Colorado con nuestros increíbles toboganes! Mín 4 horas.",
    price: "$150/day",
  },
  {
    icon: "🪑",
    title: "Tables & Chairs",
    titleEs: "Mesas y Sillas",
    desc: "Complete your setup with tables and chairs for any event size.",
    descEs: "Completa tu evento con mesas y sillas para cualquier tamaño.",
    price: "Custom Quote",
  },
  {
    icon: "🍭",
    title: "Cotton Candy",
    titleEs: "Algodón de Azúcar",
    desc: "$50 for machine rental. Add $50 for 4 different flavor kit.",
    descEs: "$50 por máquina. Añade $50 por kit de 4 sabores.",
    price: "From $50",
  },
  {
    icon: "📸",
    title: "Photo Booth",
    titleEs: "Cabina de Fotos",
    desc: "Capture memories with backdrop, props & digital copies!",
    descEs: "¡Captura recuerdos con fondo, accesorios y copias digitales!",
    price: "Ask for Quote",
  },
  {
    icon: "🔊",
    title: "Sound System",
    titleEs: "Sistema de Sonido",
    desc: "Portable speaker system to keep the party going all day.",
    descEs: "Sistema de altavoces portátil para mantener la fiesta todo el día.",
    price: "Ask for Quote",
  },
];

const testimonials = [
  {
    name: "Maria G.",
    text: "My daughter's quinceañera was perfect thanks to Fiesta Fun Familia! The bouncy castle was a hit with all the kids. ¡Increíble servicio!",
    rating: 5,
  },
  {
    name: "Priya S.",
    text: "We rented the water slide for our son's birthday party. Amazing quality and the delivery was right on time. Highly recommend!",
    rating: 5,
  },
  {
    name: "Carlos R.",
    text: "Best party rental in Denver! Very professional and the prices are great. Mis hijos se divirtieron mucho. We'll definitely book again.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-fiesta-orange via-fiesta-red to-fiesta-pink text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl animate-float">🎈</div>
          <div className="absolute top-20 right-20 text-7xl animate-float" style={{ animationDelay: "1s" }}>🎉</div>
          <div className="absolute bottom-20 left-1/4 text-6xl animate-float" style={{ animationDelay: "2s" }}>🎊</div>
          <div className="absolute bottom-10 right-1/3 text-8xl animate-float" style={{ animationDelay: "3s" }}>🪅</div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl font-medium text-white/90 mb-4">
              🎪 Denver&apos;s #1 Party Rental Service | El Mejor Servicio de Fiestas en Denver
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Make Every <span className="text-fiesta-yellow">Fiesta</span> Unforgettable!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              ¡Haz cada fiesta inolvidable!
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Bouncy castles, water slides, cotton candy machines & more.
              Serving all of Denver — from birthday parties to quinceañeras,
              Día del Niño to Diwali celebrations!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book"
                className="bg-white text-fiesta-red hover:bg-fiesta-yellow hover:text-fiesta-teal px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Book Now / ¡Reservar Ahora! 🎉
              </Link>
              <Link
                href="/rentals"
                className="border-2 border-white text-white hover:bg-white hover:text-fiesta-red px-8 py-4 rounded-full font-bold text-lg transition-all"
              >
                View Rentals / Ver Alquileres
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-white/80">
              <span>✓ Free Delivery in Denver</span>
              <span>✓ Entrega Gratis en Denver</span>
              <span>✓ Same-Day Available</span>
              <span>✓ Bilingual Service</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured photo */}
      <section className="bg-fiesta-cream pt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/gallery/bounce-house-castle.jpg"
              alt="Colorful balloon-turret castle bounce house ready for a Denver party"
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured video */}
      <section className="bg-fiesta-cream pt-10 pb-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-fiesta-teal">
              See the Fiesta in Action 🎥
            </h2>
            <p className="text-fiesta-teal/60 mt-1">¡Mira la Fiesta en Acción!</p>
          </div>
          <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black">
            <video
              src="/gallery/party-video-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
              preload="metadata"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Featured Rentals */}
      <section className="py-20 bg-fiesta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold text-fiesta-teal mb-3">
              Our Party Rentals / Nuestros Alquileres
            </h2>
            <p className="text-lg text-fiesta-teal/70 max-w-2xl mx-auto">
              Everything you need for the perfect celebration. Quality equipment, spotless clean, delivered to your door.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredRentals.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-fiesta-yellow/20"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-fiesta-teal mb-1">{item.title}</h3>
                <p className="text-sm text-fiesta-orange font-medium mb-2">{item.titleEs}</p>
                <p className="text-fiesta-teal/70 text-sm mb-3">{item.desc}</p>
                <p className="text-xs text-fiesta-teal/50 mb-4">{item.descEs}</p>
                <div className="flex items-center justify-between">
                  <span className="text-fiesta-orange font-bold text-lg">{item.price}</span>
                  <Link
                    href="/book"
                    className="text-sm bg-fiesta-orange/10 text-fiesta-orange hover:bg-fiesta-orange hover:text-white px-4 py-2 rounded-full font-semibold transition-colors"
                  >
                    Book / Reservar
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/rentals"
              className="inline-block bg-fiesta-teal hover:bg-fiesta-green text-white px-8 py-3 rounded-full font-bold transition-colors"
            >
              See All Packages / Ver Todos los Paquetes →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-fiesta-teal text-center mb-14">
            Why Choose Us? / ¿Por Qué Elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: "🛡️", title: "Safe & Clean", titleEs: "Seguro y Limpio", desc: "All equipment sanitized and safety-inspected before every rental." },
              { icon: "🚚", title: "Free Delivery", titleEs: "Entrega Gratis", desc: "Free setup and delivery anywhere in the Denver metro area." },
              { icon: "💰", title: "Best Prices", titleEs: "Mejores Precios", desc: "Competitive pricing with package deals that save you money." },
              { icon: "🌎", title: "Multicultural", titleEs: "Multicultural", desc: "Proudly serving Latin, Indian, and all diverse communities in Denver." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-fiesta-teal text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-fiesta-orange font-medium mb-2">{item.titleEs}</p>
                <p className="text-fiesta-teal/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier CTA */}
      <section className="py-20 bg-gradient-to-r from-fiesta-teal to-fiesta-green text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Party Packages for Every Budget 🎊
          </h2>
          <p className="text-xl text-white/80 mb-3">
            Paquetes de Fiesta para Cada Presupuesto
          </p>
          <p className="text-lg text-white/70 mb-8">
            Choose from our Fiesta Basic, Fiesta Plus, or Fiesta Pro packages — just like picking the perfect plan for your celebration.
          </p>
          <Link
            href="/rentals"
            className="inline-block bg-fiesta-yellow text-fiesta-teal hover:bg-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105"
          >
            Compare Packages / Comparar Paquetes
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-fiesta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-fiesta-teal text-center mb-14">
            Happy Families / Familias Felices ⭐
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-6 shadow-md border border-fiesta-yellow/20"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-fiesta-yellow text-xl">★</span>
                  ))}
                </div>
                <p className="text-fiesta-teal/80 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <p className="font-bold text-fiesta-teal">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-fiesta-teal mb-10">
            Perfect For Every Celebration 🎉
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Birthday Parties / Cumpleaños",
              "Quinceañeras",
              "Día del Niño",
              "Primera Comunión",
              "Diwali Celebrations",
              "Holi Parties",
              "Church Events",
              "School Festivals",
              "Family Reunions / Reuniones Familiares",
              "Corporate Events",
              "Baby Showers",
              "Graduation Parties",
            ].map((event) => (
              <span
                key={event}
                className="bg-fiesta-cream text-fiesta-teal px-5 py-2 rounded-full text-sm font-medium border border-fiesta-yellow/30"
              >
                {event}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-fiesta-red via-fiesta-orange to-fiesta-yellow text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Ready to Party? 🎪
          </h2>
          <p className="text-xl mb-3">¿Listo para la Fiesta?</p>
          <p className="text-lg text-white/80 mb-8">
            Call us today or book online. We&apos;ll handle the fun — you enjoy the celebration!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-fiesta-red hover:bg-fiesta-teal hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl"
            >
              Book Online / Reservar en Línea
            </Link>
            <a
              href="tel:303-295-3886"
              className="border-2 border-white text-white hover:bg-white hover:text-fiesta-red px-8 py-4 rounded-full font-bold text-lg transition-all"
            >
              📞 Call 303-295-3886
            </a>
            <a
              href="https://cash.app/$JordyO2837"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl"
            >
              💵 Pay $JordyO2837
            </a>
          </div>
          <p className="text-sm text-white/80 mt-4">
            Cash App: <span className="font-bold">$JordyO2837</span> · Pay by card, cash, or Cash App
          </p>
        </div>
      </section>
    </div>
  );
}
