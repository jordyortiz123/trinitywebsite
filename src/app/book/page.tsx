"use client";
import { useState } from "react";
import type { FormEvent } from "react";

const rentalItems = [
  { id: "bouncy1", label: "Bouncy Castle #1 / Brincolín #1", price: "$25/hr" },
  { id: "bouncy2", label: "Bouncy Castle #2 / Brincolín #2", price: "$25/hr" },
  { id: "waterslide1", label: "Water Slide #1 / Tobogán #1", price: "$150/day" },
  { id: "waterslide2", label: "Water Slide #2 / Tobogán #2", price: "$150/day" },
  { id: "tables", label: "Tables / Mesas", price: "Quote" },
  { id: "chairs", label: "Chairs / Sillas", price: "Quote" },
  { id: "cottoncandy", label: "Cotton Candy Machine / Algodón de Azúcar", price: "$100/day" },
  { id: "speakers", label: "Sound System / Sistema de Sonido", price: "Quote" },
];

const packages = [
  { id: "basic", label: "Fiesta Basic / Básica — from $100" },
  { id: "plus", label: "Fiesta Plus — from $350" },
  { id: "pro", label: "Fiesta Pro — from $600" },
  { id: "custom", label: "Custom / Personalizado" },
];

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [bookingType, setBookingType] = useState<"package" | "individual">("package");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-fiesta-cream">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-8xl mb-6">🎉</div>
          <h1 className="text-3xl font-extrabold text-fiesta-teal mb-3">Booking Request Sent!</h1>
          <h2 className="text-xl text-fiesta-orange font-bold mb-4">¡Solicitud de Reserva Enviada!</h2>
          <p className="text-fiesta-teal/70 mb-6">
            We&apos;ll contact you within 24 hours to confirm your booking and discuss details.
            Nos comunicaremos contigo dentro de 24 horas.
          </p>
          <a
            href="tel:303-295-3886"
            className="inline-block bg-fiesta-orange text-white px-6 py-3 rounded-full font-bold hover:bg-fiesta-red transition-colors"
          >
            📞 Call Now for Faster Booking: 303-295-3886
          </a>
          <button
            onClick={() => setSubmitted(false)}
            className="block mx-auto mt-4 text-fiesta-orange hover:underline font-medium"
          >
            Submit Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-fiesta-orange to-fiesta-red text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Book Your Fiesta! / ¡Reserva Tu Fiesta!
          </h1>
          <p className="text-xl text-white/80">
            Fill out the form below and we&apos;ll get back to you ASAP!
          </p>
          <p className="text-lg text-white/60 mt-1">
            Llena el formulario y te contactaremos lo antes posible.
          </p>
        </div>
      </section>

      <section className="py-20 bg-fiesta-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-fiesta-yellow/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Info */}
              <div>
                <h2 className="text-xl font-extrabold text-fiesta-teal mb-4 flex items-center gap-2">
                  <span>👤</span> Your Information / Tu Información
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">Full Name / Nombre Completo *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" placeholder="John / Juan" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">Phone / Teléfono *</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" placeholder="(303) 000-0000" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-fiesta-teal mb-1">Email *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" placeholder="your@email.com" />
                </div>
              </div>

              {/* Event Details */}
              <div>
                <h2 className="text-xl font-extrabold text-fiesta-teal mb-4 flex items-center gap-2">
                  <span>📅</span> Event Details / Detalles del Evento
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">Event Date / Fecha *</label>
                    <input type="date" required className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">Event Time / Hora</label>
                    <input type="time" className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">Event Type / Tipo de Evento</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange">
                      <option>Birthday Party / Cumpleaños</option>
                      <option>Quinceañera</option>
                      <option>Primera Comunión</option>
                      <option>Día del Niño</option>
                      <option>Diwali / Holi</option>
                      <option>Church / School Event</option>
                      <option>Family Reunion / Reunión Familiar</option>
                      <option>Corporate Event</option>
                      <option>Other / Otro</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">Delivery Address / Dirección *</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" placeholder="Denver, CO address" />
                  </div>
                </div>
              </div>

              {/* Rental Selection */}
              <div>
                <h2 className="text-xl font-extrabold text-fiesta-teal mb-4 flex items-center gap-2">
                  <span>🎪</span> What Do You Need? / ¿Qué Necesitas?
                </h2>

                <div className="flex gap-4 mb-4">
                  <button
                    type="button"
                    onClick={() => setBookingType("package")}
                    className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
                      bookingType === "package"
                        ? "bg-fiesta-orange text-white"
                        : "bg-fiesta-cream text-fiesta-teal border border-fiesta-yellow/30"
                    }`}
                  >
                    Package / Paquete
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingType("individual")}
                    className={`flex-1 py-3 rounded-xl font-bold transition-colors ${
                      bookingType === "individual"
                        ? "bg-fiesta-orange text-white"
                        : "bg-fiesta-cream text-fiesta-teal border border-fiesta-yellow/30"
                    }`}
                  >
                    Individual Items
                  </button>
                </div>

                {bookingType === "package" ? (
                  <div className="space-y-2">
                    {packages.map((pkg) => (
                      <label key={pkg.id} className="flex items-center gap-3 p-3 bg-fiesta-cream rounded-xl cursor-pointer hover:bg-fiesta-yellow/20 transition-colors">
                        <input type="radio" name="package" value={pkg.id} className="w-5 h-5 text-fiesta-orange accent-fiesta-orange" />
                        <span className="text-fiesta-teal font-medium">{pkg.label}</span>
                      </label>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-2">
                    {rentalItems.map((item) => (
                      <label key={item.id} className="flex items-center justify-between p-3 bg-fiesta-cream rounded-xl cursor-pointer hover:bg-fiesta-yellow/20 transition-colors">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" value={item.id} className="w-5 h-5 accent-fiesta-orange" />
                          <span className="text-fiesta-teal font-medium">{item.label}</span>
                        </div>
                        <span className="text-fiesta-orange font-bold text-sm">{item.price}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-semibold text-fiesta-teal mb-1">
                  Rental Duration / Duración del Alquiler
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange">
                  <option>2 Hours / 2 Horas</option>
                  <option>4 Hours / 4 Horas</option>
                  <option>6 Hours / 6 Horas</option>
                  <option>Full Day / Día Completo</option>
                  <option>2 Days / 2 Días</option>
                </select>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-semibold text-fiesta-teal mb-1">
                  Additional Notes / Notas Adicionales
                </label>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange resize-none"
                  placeholder="Any special requests or questions... / Cualquier solicitud especial..."
                />
              </div>

              {/* Terms Acknowledgment */}
              <label className="flex items-start gap-3 text-sm text-fiesta-teal/70">
                <input type="checkbox" required className="w-5 h-5 mt-0.5 accent-fiesta-orange" />
                <span>
                  I agree to the{" "}
                  <a href="/terms" className="text-fiesta-orange hover:underline font-medium">
                    terms and conditions
                  </a>{" "}
                  / Acepto los términos y condiciones *
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-fiesta-orange hover:bg-fiesta-red text-white py-4 rounded-full font-bold text-lg transition-colors shadow-lg"
              >
                Submit Booking Request / Enviar Solicitud de Reserva 🎉
              </button>

              <p className="text-center text-sm text-fiesta-teal/50">
                We&apos;ll confirm your booking within 24 hours / Confirmaremos tu reserva dentro de 24 horas
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
