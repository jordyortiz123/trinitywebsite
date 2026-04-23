import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | Fiesta Fun Familia with Trinity | Denver Party Rentals",
  description: "See our bouncy castles, water slides, and party setups in action! Gallery of events across Denver, CO.",
};

const photos = [
  {
    src: "/gallery/bounce-house-castle.jpg",
    alt: "Colorful balloon-turret castle bounce house",
    label: "Balloon Castle Bounce House",
  },
  {
    src: "/gallery/bounce-house-castle-angle.jpg",
    alt: "Castle bounce house with slide, side view",
    label: "Castle Bounce House",
  },
  {
    src: "/gallery/bounce-house-green.jpg",
    alt: "Green, red, and yellow combo bounce house with slide",
    label: "Combo Bounce House",
  },
  {
    src: "/gallery/bounce-house-interior.jpg",
    alt: "Inside view of a colorful bounce house",
    label: "Inside the Fun!",
  },
];

const videos = [
  { src: "/gallery/party-video-1.mp4", label: "Party Highlights" },
  { src: "/gallery/party-video-2.mp4", label: "Kids Having a Blast" },
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
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className="group relative aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all hover:scale-[1.02] bg-fiesta-teal/10"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white font-bold text-lg px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {photo.label}
                </figcaption>
              </figure>
            ))}
          </div>

          <h2 className="text-3xl font-extrabold text-fiesta-teal text-center mt-16 mb-8">
            Watch the Fun! / ¡Mira la Diversión!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {videos.map((video) => (
              <figure
                key={video.src}
                className="rounded-2xl overflow-hidden shadow-md bg-black"
              >
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full aspect-video"
                />
                <figcaption className="bg-white text-fiesta-teal font-bold px-4 py-3 text-center">
                  {video.label}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="text-center mt-12 bg-white rounded-2xl p-8 shadow-md border border-fiesta-yellow/20 max-w-lg mx-auto">
            <div className="text-5xl mb-4">📸</div>
            <h3 className="text-xl font-bold text-fiesta-teal mb-2">Follow For More!</h3>
            <p className="text-fiesta-teal/60 mb-1">¡Síguenos para más!</p>
            <p className="text-fiesta-teal/60 text-sm mb-4">
              Check our social media for the latest event photos.
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
                href="https://www.facebook.com/share/17dBzpJugc/?mibextid=wwXIfr"
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
