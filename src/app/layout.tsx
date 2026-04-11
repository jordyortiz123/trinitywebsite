import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fiesta Fun Familia with Trinity | Party Rentals Denver CO | Alquiler de Fiestas",
  description:
    "Denver's #1 bouncy castle, water slide & party rental service. Serving the Latin, Indian & diverse communities. Brincolines, inflables, water slides, tables, chairs & more. Book today! | El mejor servicio de alquiler para fiestas en Denver.",
  keywords: [
    "bouncy castle rental Denver",
    "water slide rental Denver",
    "party rentals Denver CO",
    "brincolines Denver",
    "inflables para fiestas Denver",
    "renta de brincolines",
    "jumping castle Denver",
    "fiesta rentals",
    "birthday party rentals Denver",
    "quinceañera rentals",
    "cotton candy machine rental",
  ],
  openGraph: {
    title: "Fiesta Fun Familia with Trinity | Party Rentals Denver",
    description: "Bouncy castles, water slides, tables, chairs & more for your next celebration!",
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_US"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
