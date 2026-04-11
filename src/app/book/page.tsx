"use client";
import { useState, useMemo, useRef } from "react";
import type { FormEvent } from "react";
import { downloadWaiver } from "@/components/WaiverDocument";
import type { WaiverData } from "@/components/WaiverDocument";

const packages = [
  { id: "basic", label: "Fiesta Basic", price: "$125+" },
  { id: "plus", label: "Fiesta Plus", price: "$400+" },
  { id: "pro", label: "Fiesta Pro", price: "$750+" },
  { id: "custom", label: "Custom / Personalizado", price: "Quote" },
];

function getRecommendation(kidCount: number) {
  if (kidCount <= 0) return null;
  if (kidCount <= 8) {
    return {
      package: "Fiesta Basic",
      items: [
        "1 Small Bouncy Castle (4 hrs)",
        "2 Tables",
        `${Math.max(kidCount, 4)} Chairs`,
      ],
      note: "Perfect for a small, intimate party!",
      noteEs: "¡Perfecto para una fiesta pequeña e íntima!",
      estimate: "$125+",
    };
  }
  if (kidCount <= 20) {
    return {
      package: "Fiesta Plus",
      items: [
        "1 Large Bouncy Castle (4 hrs)",
        "1 Water Slide (full day, min 4hrs)",
        `${Math.min(Math.ceil(kidCount / 4), 10)} Tables`,
        `${Math.min(kidCount + 5, 20)} Chairs`,
        "Optional: Cotton Candy Machine (+$50-$100)",
      ],
      note: "Great for birthday parties & celebrations!",
      noteEs: "¡Ideal para cumpleaños y celebraciones!",
      estimate: "$400+",
    };
  }
  return {
    package: "Fiesta Pro",
    items: [
      "2 Bouncy Castles — Small + Large (4 hrs)",
      "1 Water Slide (full day, min 4hrs)",
      `${Math.min(Math.ceil(kidCount / 3), 10)} Tables`,
      `${Math.min(kidCount + 10, 30)}+ Chairs`,
      "Cotton Candy Machine + 4 Flavors",
      "Photo Booth with props & backdrop",
      "Portable Sound System",
    ],
    note: "The ultimate party for a big group!",
    noteEs: "¡La fiesta definitiva para un grupo grande!",
    estimate: "$750+",
  };
}

export default function BookPage() {
  const [submitted, setSubmitted] = useState(false);
  const [bookingType, setBookingType] = useState<"smart" | "package" | "individual">("smart");
  const [kidCount, setKidCount] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [waiverAccepted, setWaiverAccepted] = useState(false);
  const [showWaiver, setShowWaiver] = useState(false);
  const [waiverData, setWaiverData] = useState<WaiverData | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const recommendation = useMemo(() => getRecommendation(kidCount), [kidCount]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!waiverAccepted) {
      alert("Please accept the liability waiver to proceed. / Por favor acepta la exención de responsabilidad.");
      return;
    }

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const now = new Date();
    const dateStr = now.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

    const data: WaiverData = {
      customerName: (formData.get("customerName") as string) || "",
      phone: (formData.get("phone") as string) || "",
      email: (formData.get("email") as string) || "",
      eventDate: (formData.get("eventDate") as string) || "",
      eventTime: (formData.get("eventTime") as string) || "",
      eventType: (formData.get("eventType") as string) || "",
      address: (formData.get("address") as string) || "",
      kidCount: kidCount,
      selectedPackage: selectedPackage
        ? packages.find((p) => p.id === selectedPackage)?.label || selectedPackage
        : recommendation?.package || "Custom",
      signatureDate: dateStr,
    };

    setWaiverData(data);
    downloadWaiver(data);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-fiesta-cream">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="text-8xl mb-6">🎉</div>
          <h1 className="text-3xl font-extrabold text-fiesta-teal mb-3">Booking Request Sent!</h1>
          <h2 className="text-xl text-fiesta-orange font-bold mb-4">¡Solicitud de Reserva Enviada!</h2>
          <p className="text-fiesta-teal/70 mb-6">
            We&apos;ll contact you within 24 hours to confirm your booking and discuss details.
            Nos comunicaremos contigo dentro de 24 horas.
          </p>

          {/* Waiver Download Section */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-fiesta-green/30 mb-6 text-left">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">📄</span>
              <div>
                <h3 className="font-bold text-fiesta-teal">Liability Waiver & Agreement</h3>
                <p className="text-sm text-fiesta-green font-medium">Document opened in new tab</p>
              </div>
            </div>
            <p className="text-sm text-fiesta-teal/60 mb-4">
              Your signed waiver document has been opened. Please <strong>print it or save it as PDF</strong> for your records.
              Use the &quot;Print / Save as PDF&quot; button in the document.
            </p>
            <p className="text-xs text-fiesta-teal/40 mb-4">
              Su documento de exención firmado se ha abierto. Por favor guárdelo como PDF para sus registros.
            </p>
            {waiverData && (
              <button
                onClick={() => downloadWaiver(waiverData)}
                className="w-full bg-fiesta-teal hover:bg-fiesta-green text-white py-3 rounded-xl font-bold transition-colors"
              >
                📄 Open Waiver Again / Abrir Exención de Nuevo
              </button>
            )}
          </div>

          <a
            href="tel:303-295-3886"
            className="inline-block bg-fiesta-orange text-white px-6 py-3 rounded-full font-bold hover:bg-fiesta-red transition-colors"
          >
            📞 Call Now for Faster Booking: 303-295-3886
          </a>
          <button
            onClick={() => { setSubmitted(false); setWaiverAccepted(false); setWaiverData(null); }}
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
            Fill out the form and we&apos;ll get back to you ASAP!
          </p>
          <p className="text-lg text-white/60 mt-1">
            Llena el formulario y te contactaremos lo antes posible.
          </p>
        </div>
      </section>

      <section className="py-16 bg-fiesta-cream">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-fiesta-yellow/20">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">

              {/* 1. Personal Info */}
              <div>
                <h2 className="text-xl font-extrabold text-fiesta-teal mb-4 flex items-center gap-2">
                  <span className="bg-fiesta-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                  Your Information / Tu Información
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">Full Name / Nombre *</label>
                    <input type="text" name="customerName" required className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">Phone / Teléfono *</label>
                    <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" placeholder="(303) 000-0000" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-fiesta-teal mb-1">Email *</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" placeholder="your@email.com" />
                </div>
              </div>

              {/* 2. Event Details */}
              <div>
                <h2 className="text-xl font-extrabold text-fiesta-teal mb-4 flex items-center gap-2">
                  <span className="bg-fiesta-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                  Event Details / Detalles del Evento
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">Event Date / Fecha *</label>
                    <input type="date" name="eventDate" required className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">Event Time / Hora</label>
                    <input type="time" name="eventTime" className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-fiesta-teal mb-1">Event Type / Tipo</label>
                    <select name="eventType" className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange">
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
                    <input type="text" name="address" required className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange" placeholder="Denver, CO address" />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-semibold text-fiesta-teal mb-1">
                    Rental Duration / Duración
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange">
                    <option>4 Hours / 4 Horas (minimum)</option>
                    <option>6 Hours / 6 Horas</option>
                    <option>8 Hours / 8 Horas</option>
                    <option>Full Day / Día Completo</option>
                    <option>2 Days / 2 Días</option>
                  </select>
                </div>
              </div>

              {/* 3. Party Builder */}
              <div>
                <h2 className="text-xl font-extrabold text-fiesta-teal mb-4 flex items-center gap-2">
                  <span className="bg-fiesta-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                  Build Your Party / Construye Tu Fiesta
                </h2>

                <div className="flex gap-2 mb-6 flex-wrap">
                  {[
                    { key: "smart" as const, label: "Smart Builder" },
                    { key: "package" as const, label: "Choose Package" },
                    { key: "individual" as const, label: "Pick Items" },
                  ].map((tab) => (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setBookingType(tab.key)}
                      className={`flex-1 min-w-[120px] py-3 rounded-xl font-bold text-sm transition-colors ${
                        bookingType === tab.key
                          ? "bg-fiesta-orange text-white shadow-md"
                          : "bg-fiesta-cream text-fiesta-teal border border-fiesta-yellow/30 hover:bg-fiesta-yellow/20"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* SMART BUILDER */}
                {bookingType === "smart" && (
                  <div className="space-y-4">
                    <div className="bg-fiesta-cream rounded-2xl p-5 border border-fiesta-yellow/20">
                      <label className="block text-sm font-bold text-fiesta-teal mb-3">
                        How many kids will be at the party? / ¿Cuántos niños habrá en la fiesta? *
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => setKidCount(Math.max(0, kidCount - 1))}
                          className="w-12 h-12 bg-white rounded-full border-2 border-fiesta-orange text-fiesta-orange font-bold text-xl hover:bg-fiesta-orange hover:text-white transition-colors flex items-center justify-center"
                        >
                          −
                        </button>
                        <input
                          type="number"
                          min={0}
                          max={100}
                          value={kidCount}
                          onChange={(e) => setKidCount(Math.max(0, parseInt(e.target.value) || 0))}
                          className="w-20 text-center text-3xl font-extrabold text-fiesta-teal bg-white rounded-xl border border-fiesta-yellow/30 py-2 focus:outline-none focus:ring-2 focus:ring-fiesta-orange"
                        />
                        <button
                          type="button"
                          onClick={() => setKidCount(kidCount + 1)}
                          className="w-12 h-12 bg-white rounded-full border-2 border-fiesta-orange text-fiesta-orange font-bold text-xl hover:bg-fiesta-orange hover:text-white transition-colors flex items-center justify-center"
                        >
                          +
                        </button>
                        <span className="text-fiesta-teal/60 text-sm">kids / niños</span>
                      </div>
                    </div>

                    {recommendation && (
                      <div className="bg-gradient-to-br from-fiesta-orange/5 to-fiesta-yellow/10 rounded-2xl p-5 border-2 border-fiesta-orange/30">
                        <div className="flex items-center justify-between mb-3">
                          <div>
                            <h4 className="font-extrabold text-fiesta-teal text-lg">
                              We Recommend: {recommendation.package} 🎯
                            </h4>
                            <p className="text-sm text-fiesta-green font-medium">{recommendation.note}</p>
                            <p className="text-xs text-fiesta-teal/50">{recommendation.noteEs}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-2xl font-extrabold text-fiesta-orange">{recommendation.estimate}</span>
                          </div>
                        </div>
                        <div className="bg-white rounded-xl p-4 mt-3">
                          <p className="text-xs font-bold text-fiesta-teal/60 uppercase tracking-wide mb-2">
                            Recommended for {kidCount} kids:
                          </p>
                          <ul className="space-y-1.5">
                            {recommendation.items.map((item, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm text-fiesta-teal">
                                <span className="text-fiesta-green">✓</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <input type="hidden" name="recommended_package" value={recommendation.package} />
                        <input type="hidden" name="kid_count" value={kidCount} />
                      </div>
                    )}
                  </div>
                )}

                {/* CHOOSE PACKAGE */}
                {bookingType === "package" && (
                  <div className="space-y-3">
                    {packages.map((pkg) => (
                      <label
                        key={pkg.id}
                        className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all border-2 ${
                          selectedPackage === pkg.id
                            ? "border-fiesta-orange bg-fiesta-orange/5 shadow-md"
                            : "border-fiesta-yellow/20 bg-fiesta-cream hover:border-fiesta-orange/40"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="package"
                            value={pkg.id}
                            checked={selectedPackage === pkg.id}
                            onChange={() => setSelectedPackage(pkg.id)}
                            className="w-5 h-5 accent-fiesta-orange"
                          />
                          <span className="text-fiesta-teal font-bold">{pkg.label}</span>
                        </div>
                        <span className="text-fiesta-orange font-bold">{pkg.price}</span>
                      </label>
                    ))}

                    {/* Show package details when selected */}
                    {selectedPackage && selectedPackage !== "custom" && (
                      <div className="bg-fiesta-cream rounded-xl p-4 border border-fiesta-yellow/20 mt-2">
                        <p className="text-xs font-bold text-fiesta-teal uppercase tracking-wide mb-2">
                          {selectedPackage === "basic" && "Fiesta Basic includes:"}
                          {selectedPackage === "plus" && "Fiesta Plus includes:"}
                          {selectedPackage === "pro" && "Fiesta Pro includes:"}
                        </p>
                        <ul className="space-y-1.5 text-sm text-fiesta-teal/80">
                          {selectedPackage === "basic" && (
                            <>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> 1 Small Bouncy Castle (4 hours) — $25/hr</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> 2 Tables</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> 4 Chairs</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> Free delivery & setup in Denver</li>
                            </>
                          )}
                          {selectedPackage === "plus" && (
                            <>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> 1 Large Bouncy Castle (4 hours) — $50/hr</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> 1 Water Slide (full day, min 4hrs) — $150/day</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> 5 Tables</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> 10 Chairs</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> Free delivery & setup in Denver</li>
                              <li className="flex items-center gap-2 text-fiesta-teal/50"><span>+</span> Add Cotton Candy ($50-$100)</li>
                              <li className="flex items-center gap-2 text-fiesta-teal/50"><span>+</span> Add Photo Booth (ask for quote)</li>
                            </>
                          )}
                          {selectedPackage === "pro" && (
                            <>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> 2 Bouncy Castles — Small ($25/hr) + Large ($50/hr) — 4 hours</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> 1 Water Slide (full day, min 4hrs) — $150/day</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> 10 Tables + 20+ Chairs</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> Cotton Candy Machine + 4 Flavors</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> Photo Booth with props & backdrop</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> Portable Sound System</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> Free delivery & setup in Denver</li>
                              <li className="flex items-center gap-2"><span className="text-fiesta-green">✓</span> Priority booking</li>
                            </>
                          )}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {/* INDIVIDUAL ITEMS */}
                {bookingType === "individual" && (
                  <div className="space-y-2">
                    {[
                      { id: "bouncy-small", label: "Bouncy Castle (Small) / Brincolín (Pequeño)", price: "$25/hr" },
                      { id: "bouncy-large", label: "Bouncy Castle (Large) / Brincolín (Grande)", price: "$50/hr" },
                      { id: "waterslide", label: "Water Slide / Tobogán de Agua", price: "$150/day" },
                      { id: "tables", label: "Tables / Mesas", price: "Quote" },
                      { id: "chairs", label: "Chairs / Sillas", price: "Quote" },
                      { id: "cottoncandy-machine", label: "Cotton Candy Machine Only / Solo Máquina", price: "$50/day" },
                      { id: "cottoncandy-flavors", label: "Cotton Candy Flavor Kit (4 flavors) / Kit de Sabores", price: "+$50" },
                      { id: "photobooth", label: "Photo Booth / Cabina de Fotos", price: "Quote" },
                      { id: "speakers", label: "Sound System / Sistema de Sonido", price: "Quote" },
                    ].map((item) => (
                      <label key={item.id} className="flex items-center justify-between p-3 bg-fiesta-cream rounded-xl cursor-pointer hover:bg-fiesta-yellow/20 transition-colors border border-transparent hover:border-fiesta-orange/20">
                        <div className="flex items-center gap-3">
                          <input type="checkbox" value={item.id} className="w-5 h-5 accent-fiesta-orange rounded" />
                          <span className="text-fiesta-teal font-medium text-sm">{item.label}</span>
                        </div>
                        <span className="text-fiesta-orange font-bold text-sm">{item.price}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* 4. Additional Notes */}
              <div>
                <h2 className="text-xl font-extrabold text-fiesta-teal mb-4 flex items-center gap-2">
                  <span className="bg-fiesta-orange text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                  Additional Info / Información Adicional
                </h2>
                <textarea
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-fiesta-yellow/30 bg-fiesta-cream/50 text-fiesta-teal focus:outline-none focus:ring-2 focus:ring-fiesta-orange resize-none"
                  placeholder="Any special requests, number of adults attending, space details... / Solicitudes especiales, número de adultos..."
                />
              </div>

              {/* 5. Waiver */}
              <div>
                <h2 className="text-xl font-extrabold text-fiesta-teal mb-4 flex items-center gap-2">
                  <span className="bg-fiesta-red text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                  Liability Waiver / Exención de Responsabilidad
                </h2>

                <div className="bg-fiesta-cream rounded-2xl border border-fiesta-red/20 overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setShowWaiver(!showWaiver)}
                    className="w-full text-left p-4 flex items-center justify-between text-sm font-semibold text-fiesta-teal hover:bg-fiesta-yellow/10 transition-colors"
                  >
                    <span>Read Full Waiver / Leer Exención Completa</span>
                    <span className="text-fiesta-orange">{showWaiver ? "▲" : "▼"}</span>
                  </button>
                  {showWaiver && (
                    <div className="px-4 pb-4 max-h-64 overflow-y-auto text-xs text-fiesta-teal/70 leading-relaxed space-y-3 border-t border-fiesta-yellow/20 pt-3">
                      <p><strong>ACKNOWLEDGMENT OF RISK:</strong> The Customer and/or Parent/Legal Guardian acknowledges that the use of inflatable equipment, photo booth equipment, and other party rental items involves inherent risks of physical injury, including falls, collisions, sprains, fractures, and in rare cases, serious bodily harm. By proceeding, you voluntarily assume all risks associated with the use of rented equipment.</p>
                      <p><strong>WAIVER & RELEASE:</strong> In consideration of being permitted to rent equipment from Fiesta Fun Familia with Trinity, the Customer, on behalf of themselves, their children, minor dependents, guests, heirs, and assigns, hereby WAIVES, RELEASES, AND FOREVER DISCHARGES the Company, its owners, employees, agents, and affiliates from any and all claims, damages, losses, and liabilities arising from the use of rental equipment, including personal injury, property damage, negligence, or equipment defects.</p>
                      <p><strong>INDEMNIFICATION:</strong> The Customer agrees to indemnify, defend, and hold harmless the Company from any claims, damages, costs, and attorney&apos;s fees arising from the Customer&apos;s use of rental equipment or breach of this Agreement.</p>
                      <p><strong>PARENTAL CONSENT:</strong> If any participant is under 18, the signing Parent/Legal Guardian consents to the minor&apos;s participation, assumes responsibility for their safety and supervision, and agrees to all waiver terms on their behalf.</p>
                      <p><strong>MEDICAL AUTHORIZATION:</strong> In an emergency, the Customer authorizes the Company to seek emergency medical treatment. The Customer assumes all associated medical costs.</p>
                      <p><strong>CLEANING FEE:</strong> Unauthorized water use on bouncy castles results in a $100 cleaning/disinfection fee. <strong>DAMAGE FEE:</strong> Up to $500 (credit card on file) or $300 (alternative payment). <strong>This Agreement is governed by Colorado law.</strong></p>
                      <p><a href="/terms" className="text-fiesta-orange hover:underline font-medium">View complete Terms & Conditions →</a></p>
                    </div>
                  )}
                </div>

                <label className="flex items-start gap-3 mt-4 p-4 bg-fiesta-red/5 rounded-xl border border-fiesta-red/20 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={waiverAccepted}
                    onChange={(e) => setWaiverAccepted(e.target.checked)}
                    className="w-6 h-6 mt-0.5 accent-fiesta-red flex-shrink-0"
                  />
                  <span className="text-sm text-fiesta-teal/80">
                    <strong className="text-fiesta-teal">I have read, understand, and agree to the{" "}
                    <a href="/terms" className="text-fiesta-orange hover:underline">Terms & Conditions and Liability Waiver</a></strong>.
                    I acknowledge the risks involved and release the Company from liability. If booking for minors,
                    I confirm I am the Parent/Legal Guardian with authority to agree on their behalf. *
                    <span className="block mt-1 text-xs text-fiesta-teal/50">
                      He leído, entiendo y acepto los Términos, Condiciones y la Exención de Responsabilidad. *
                    </span>
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className={`w-full py-4 rounded-full font-bold text-lg transition-all shadow-lg ${
                  waiverAccepted
                    ? "bg-fiesta-orange hover:bg-fiesta-red text-white hover:shadow-xl"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!waiverAccepted}
              >
                Submit Booking Request / Enviar Solicitud 🎉
              </button>

              <p className="text-center text-xs text-fiesta-teal/50">
                We&apos;ll confirm within 24 hours / Confirmaremos dentro de 24 horas
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
