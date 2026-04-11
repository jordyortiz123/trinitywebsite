"use client";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: { en: "Home", es: "Inicio", hi: "होम" } },
  { href: "/rentals", label: { en: "Rentals", es: "Alquileres", hi: "किराया" } },
  { href: "/gallery", label: { en: "Gallery", es: "Galería", hi: "गैलरी" } },
  { href: "/about", label: { en: "About", es: "Nosotros", hi: "हमारे बारे में" } },
  { href: "/contact", label: { en: "Contact", es: "Contacto", hi: "संपर्क" } },
];

const languages = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "hi", label: "HI" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<"en" | "es" | "hi">("en");

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-fiesta-yellow/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🎪</span>
            <span className="font-bold text-lg text-fiesta-teal leading-tight">
              Fiesta Fun Familia
              <span className="block text-xs text-fiesta-orange font-medium">with Trinity</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-fiesta-teal hover:text-fiesta-orange transition-colors font-medium text-sm"
              >
                {link.label[lang]}
              </Link>
            ))}
            <Link
              href="/book"
              className="bg-fiesta-orange hover:bg-fiesta-red text-white px-5 py-2 rounded-full font-semibold text-sm transition-colors shadow-md"
            >
              {lang === "es" ? "¡Reservar!" : lang === "hi" ? "बुक करें!" : "Book Now!"}
            </Link>

            {/* Language Switcher */}
            <div className="flex gap-1 ml-2 bg-fiesta-cream rounded-full p-1">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code as "en" | "es" | "hi")}
                  className={`px-2 py-1 text-xs font-bold rounded-full transition-colors ${
                    lang === l.code
                      ? "bg-fiesta-orange text-white"
                      : "text-fiesta-teal hover:bg-fiesta-yellow/30"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-fiesta-teal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-fiesta-yellow/30">
            <div className="flex flex-col gap-2 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-fiesta-teal hover:text-fiesta-orange transition-colors font-medium py-2 px-2"
                >
                  {link.label[lang]}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setMobileOpen(false)}
                className="bg-fiesta-orange hover:bg-fiesta-red text-white px-5 py-2 rounded-full font-semibold text-sm text-center transition-colors mt-2"
              >
                {lang === "es" ? "¡Reservar!" : lang === "hi" ? "बुक करें!" : "Book Now!"}
              </Link>
              <div className="flex gap-2 mt-2 justify-center">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLang(l.code as "en" | "es" | "hi")}
                    className={`px-3 py-1 text-sm font-bold rounded-full transition-colors ${
                      lang === l.code
                        ? "bg-fiesta-orange text-white"
                        : "bg-fiesta-cream text-fiesta-teal"
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
