"use client";
import { useState } from "react";
import type { FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, wire this to an email service or API
    setSubmitted(true);
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-fiesta-pink to-fiesta-purple text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Contact Us / Contáctanos
          </h1>
          <p className="text-xl text-white/80">
            We&apos;d love to hear from you! / ¡Nos encantaría saber de ti!
          </p>
        </div>
      </section>

      <section className="py-20 bg-fiesta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-fiesta-yellow/20">
              <h2 className="text-2xl font-extrabold text-fiesta-teal mb-6">
                Send Us a Message / Envíanos un Mensaje
              </h2>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🎉</div>
                  <h3 className="text-2xl font-bold text-fiesta-green mb-2">Message Sent!</h3>
                  <p className="text-fiesta-teal/70">
                    We&apos;ll get back to you within 24 hours. ¡Gracias!
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-fiesta-orange hover:underline font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-fiesta-teal mb-1">
                        Name / Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-fiesta-teal mb-1">
                        Phone / Teléfono *
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange"
                        placeholder="(303) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">
                      Email / Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">
                      Event Date / Fecha del Evento
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">
                      Preferred Language / Idioma Preferido
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange">
                      <option>English</option>
                      <option>Español</option>
                      <option>हिन्दी (Hindi)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">
                      Message / Mensaje *
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange resize-none"
                      placeholder="Tell us about your event... / Cuéntanos sobre tu evento..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-fiesta-orange hover:bg-fiesta-red text-white py-3 rounded-full font-bold text-lg transition-colors"
                  >
                    Send Message / Enviar Mensaje 🎉
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-fiesta-yellow/20">
                <h2 className="text-2xl font-extrabold text-fiesta-teal mb-6">
                  Get in Touch / Ponte en Contacto
                </h2>
                <div className="space-y-5">
                  <a href="tel:303-295-3886" className="flex items-center gap-4 p-4 bg-fiesta-cream rounded-xl hover:bg-fiesta-yellow/20 transition-colors">
                    <span className="text-3xl">📞</span>
                    <div>
                      <p className="font-bold text-fiesta-teal">303-295-3886</p>
                      <p className="text-sm text-fiesta-teal/60">Call or text us / Llámanos o envía mensaje</p>
                    </div>
                  </a>
                  <a href="mailto:jordyo3728@gmail.com" className="flex items-center gap-4 p-4 bg-fiesta-cream rounded-xl hover:bg-fiesta-yellow/20 transition-colors">
                    <span className="text-3xl">📧</span>
                    <div>
                      <p className="font-bold text-fiesta-teal">jordyo3728@gmail.com</p>
                      <p className="text-sm text-fiesta-teal/60">Email us anytime / Escríbenos cuando quieras</p>
                    </div>
                  </a>
                  <a href="https://instagram.com/jordy37" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-fiesta-cream rounded-xl hover:bg-fiesta-pink/20 transition-colors">
                    <span className="text-3xl">📸</span>
                    <div>
                      <p className="font-bold text-fiesta-teal">@jordy37</p>
                      <p className="text-sm text-fiesta-teal/60">Follow us on Instagram / Síguenos en Instagram</p>
                    </div>
                  </a>
                  <a href="https://www.facebook.com/amy.castillo.1293" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-fiesta-cream rounded-xl hover:bg-blue-50 transition-colors">
                    <span className="text-3xl">👍</span>
                    <div>
                      <p className="font-bold text-fiesta-teal">Amy Castillo</p>
                      <p className="text-sm text-fiesta-teal/60">Like us on Facebook / Danos like en Facebook</p>
                    </div>
                  </a>
                  <a href="https://wa.me/13032953886" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                    <span className="text-3xl">💬</span>
                    <div>
                      <p className="font-bold text-fiesta-teal">WhatsApp</p>
                      <p className="text-sm text-fiesta-teal/60">Chat with us / Chatea con nosotros</p>
                    </div>
                  </a>
                  <a href="https://cash.app/$JordyO2837" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors">
                    <span className="text-3xl">💵</span>
                    <div>
                      <p className="font-bold text-fiesta-teal">$JordyO2837</p>
                      <p className="text-sm text-fiesta-teal/60">Pay with Cash App / Pagar con Cash App</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-fiesta-yellow/20">
                <h2 className="text-2xl font-extrabold text-fiesta-teal mb-4">
                  Service Area / Área de Servicio
                </h2>
                <p className="text-fiesta-teal/70 mb-4">
                  We serve all of Denver and surrounding areas. Free delivery within Denver metro!
                </p>
                <p className="text-fiesta-teal/50 text-sm mb-4">
                  Servimos todo Denver y áreas circundantes. ¡Entrega gratis en el área metropolitana de Denver!
                </p>
                <div className="rounded-xl overflow-hidden border border-fiesta-yellow/20">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196281.12937236!2d-104.99519574!3d39.76451544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b80aa231f17cf%3A0x118ef4f8278a36d6!2sDenver%2C%20CO!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Denver service area map"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
