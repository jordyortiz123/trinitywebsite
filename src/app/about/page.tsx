import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Fiesta Fun Familia with Trinity | Denver Party Rentals",
  description: "Learn about Fiesta Fun Familia with Trinity — Denver's family-owned party rental service proudly serving Latin, Indian, and all diverse communities.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-fiesta-teal to-fiesta-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            About Us / Sobre Nosotros
          </h1>
          <p className="text-xl text-white/80">
            Family-owned, community-driven / De familia, para la comunidad
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-fiesta-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-fiesta-yellow/20">
            <div className="text-center mb-8">
              <span className="text-6xl">🎪</span>
            </div>
            <h2 className="text-3xl font-extrabold text-fiesta-teal text-center mb-6">
              Our Story / Nuestra Historia
            </h2>
            <div className="space-y-4 text-fiesta-teal/80 leading-relaxed">
              <p>
                <strong className="text-fiesta-teal">Fiesta Fun Familia with Trinity</strong> was born from a simple
                belief: every child deserves an amazing birthday party, and every family deserves a stress-free
                celebration. Based in Denver, Colorado, we&apos;re a family-owned business that understands the
                importance of bringing people together.
              </p>
              <p className="text-fiesta-orange italic">
                Fiesta Fun Familia with Trinity nació de una creencia simple: cada niño merece una fiesta de
                cumpleaños increíble, y cada familia merece una celebración sin estrés. Con sede en Denver,
                Colorado, somos un negocio familiar que entiende la importancia de unir a las personas.
              </p>
              <p>
                With roots in the vibrant Latin community, we bring the spirit of fiesta to every event we serve.
                But our doors are open to everyone — we proudly serve families from all backgrounds, including
                the growing Indian community in Denver. From quinceañeras to Diwali celebrations, from
                Día del Niño to birthday bashes, we&apos;re here to make every moment special.
              </p>
              <p className="text-fiesta-orange italic">
                Con raíces en la vibrante comunidad latina, llevamos el espíritu de fiesta a cada evento.
                Pero nuestras puertas están abiertas para todos — servimos con orgullo a familias de todos
                los orígenes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-fiesta-teal text-center mb-14">
            What We Stand For / Lo Que Representamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "👨‍👩‍👧‍👦",
                title: "Family First",
                titleEs: "La Familia Primero",
                desc: "We treat every customer like family. Your celebration is as important to us as it is to you.",
                descEs: "Tratamos a cada cliente como familia. Tu celebración es tan importante para nosotros como lo es para ti.",
              },
              {
                icon: "🌍",
                title: "Community Driven",
                titleEs: "Impulsados por la Comunidad",
                desc: "We're proud to serve Denver's diverse communities — Latino, Indian, and families from all backgrounds.",
                descEs: "Estamos orgullosos de servir a las diversas comunidades de Denver.",
              },
              {
                icon: "✨",
                title: "Quality & Safety",
                titleEs: "Calidad y Seguridad",
                desc: "Every piece of equipment is sanitized, inspected, and maintained to the highest standards.",
                descEs: "Cada equipo es desinfectado, inspeccionado y mantenido con los más altos estándares.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-fiesta-cream rounded-2xl p-8 text-center border border-fiesta-yellow/20"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-fiesta-teal mb-1">{value.title}</h3>
                <p className="text-sm text-fiesta-orange font-medium mb-3">{value.titleEs}</p>
                <p className="text-fiesta-teal/70 text-sm">{value.desc}</p>
                <p className="text-fiesta-teal/50 text-xs mt-2">{value.descEs}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events We Celebrate */}
      <section className="py-20 bg-fiesta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-fiesta-teal mb-4">
            We Celebrate Every Culture 🌎
          </h2>
          <p className="text-fiesta-teal/60 mb-10 max-w-2xl mx-auto">
            Our multicultural approach means we understand and respect the traditions that make your celebration unique.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-fiesta-yellow/20">
              <div className="text-4xl mb-3">🇲🇽 🇨🇴 🇵🇪</div>
              <h3 className="font-bold text-fiesta-teal text-lg mb-2">Latin Celebrations</h3>
              <p className="text-fiesta-teal/60 text-sm">
                Quinceañeras, Día del Niño, Primera Comunión, Bautizos, Cumpleaños & more
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-fiesta-yellow/20">
              <div className="text-4xl mb-3">🇮🇳 🪔 🎨</div>
              <h3 className="font-bold text-fiesta-teal text-lg mb-2">Indian Celebrations</h3>
              <p className="text-fiesta-teal/60 text-sm">
                Diwali, Holi, Birthday Parties, Baby Showers, Naming Ceremonies & more
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-md border border-fiesta-yellow/20">
              <div className="text-4xl mb-3">🎉 🎊 🎈</div>
              <h3 className="font-bold text-fiesta-teal text-lg mb-2">All Celebrations</h3>
              <p className="text-fiesta-teal/60 text-sm">
                Church events, school festivals, corporate parties, family reunions, graduations & more
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-fiesta-orange to-fiesta-red text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">
            Let&apos;s Plan Your Fiesta! 🎉
          </h2>
          <p className="text-lg text-white/80 mb-8">
            ¡Planifiquemos tu fiesta juntos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-white text-fiesta-red hover:bg-fiesta-yellow hover:text-fiesta-teal px-8 py-3 rounded-full font-bold transition-all"
            >
              Book Now / Reservar
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
