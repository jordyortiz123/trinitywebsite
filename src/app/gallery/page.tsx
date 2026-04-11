import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Fiesta Fun Familia with Trinity | Denver Party Rentals",
  description: "See our bouncy castles, water slides, and party setups in action! Gallery of events across Denver, CO.",
};

const placeholderImages = [
  { bg: "from-fiesta-red to-fiesta-orange", icon: "🏰", label: "Bouncy Castle Setup" },
  { bg: "from-fiesta-orange to-fiesta-yellow", icon: "🌊", label: "Water Slide Fun" },
  { bg: "from-fiesta-green to-fiesta-teal", icon: "🎂", label: "Birthday Party" },
  { bg: "from-fiesta-pink to-fiesta-purple", icon: "🪅", label: "Quinceañera" },
  { bg: "from-fiesta-yellow to-fiesta-orange", icon: "🍭", label: "Cotton Candy Station" },
  { bg: "from-fiesta-teal to-fiesta-green", icon: "🎵", label: "Party Setup" },
  { bg: "from-fiesta-purple to-fiesta-red", icon: "🎈", label: "Kids Having Fun" },
  { bg: "from-fiesta-orange to-fiesta-red", icon: "🪑", label: "Table & Chair Setup" },
  { bg: "from-fiesta-green to-fiesta-yellow", icon: "🎉", label: "Event Overview" },
];

export default function GalleryPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-fiesta-yellow to-fiesta-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3">
            Gallery / Galería 📸
          </h1>
          <p className="text-xl text-white/80">
            See our rentals in action! / ¡Mira nuestros alquileres en acción!
          </p>
        </div>
      </section>

      <section className="py-20 bg-fiesta-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-fiesta-teal/60 mb-12 max-w-2xl mx-auto">
            Photos from our events across Denver. Follow us on{" "}
            <a
              href="https://instagram.com/jordy37"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fiesta-pink font-bold hover:underline"
            >
              @jordy37
            </a>{" "}
            for more!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderImages.map((img, index) => (
              <div
                key={index}
                className={`aspect-square bg-gradient-to-br ${img.bg} rounded-2xl flex flex-col items-center justify-center text-white shadow-md hover:shadow-xl transition-all hover:scale-[1.02] cursor-pointer`}
              >
                <span className="text-6xl mb-3">{img.icon}</span>
                <span className="font-bold text-lg">{img.label}</span>
                <span className="text-white/60 text-sm mt-1">Photo coming soon</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-white rounded-2xl p-8 shadow-md border border-fiesta-yellow/20 max-w-lg mx-auto">
            <div className="text-5xl mb-4">📸</div>
            <h3 className="text-xl font-bold text-fiesta-teal mb-2">More Photos Coming Soon!</h3>
            <p className="text-fiesta-teal/60 mb-1">¡Más fotos próximamente!</p>
            <p className="text-fiesta-teal/60 text-sm mb-4">
              Follow us on social media for the latest event photos.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://instagram.com/jordy37"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-fiesta-pink hover:bg-fiesta-red text-white px-6 py-2 rounded-full font-bold transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://facebook.com/jordy.ortiz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
