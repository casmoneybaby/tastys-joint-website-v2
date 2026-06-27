"use client";

import Image from "next/image";
import { galleryCaptions } from "@/data/site";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=85&auto=format&fit=crop",
    alt: "Black and Blue burger at the griddle",
    caption: galleryCaptions[0],
  },
  {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=1200&q=85&auto=format&fit=crop",
    alt: "Smashburger close up with melting cheese",
    caption: galleryCaptions[1],
  },
  {
    src: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=1200&q=85&auto=format&fit=crop",
    alt: "Brioche bun, photographed up close",
    caption: galleryCaptions[2],
  },
  {
    src: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?w=1200&q=85&auto=format&fit=crop",
    alt: "The Fog burger detailed composition",
    caption: galleryCaptions[3],
  },
];

export default function Gallery() {
  return (
    <section className="section bg-cream">
      <div className="container-x">
        <div className="flex items-end justify-between mb-10 md:mb-14 gap-6">
          <div>
            <span className="eyebrow">The Kitchen, in pictures</span>
            <h2 className="display text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.86] mt-5">
              NOT
              <br />
              STOCK.
            </h2>
          </div>
          <p className="font-serif max-w-xs hidden md:block opacity-80">
            These are the photos we took ourselves — phones propped on the
            prep table, lights at the wrong angle. We like it that way.
          </p>
        </div>

        {/* Asymmetric grid: 2x2 on left, varied heights */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
          {photos.map((p, i) => {
            const colSpans = [
              "col-span-2 md:col-span-7 row-span-2 aspect-[4/3] md:aspect-[16/12]",
              "col-span-1 md:col-span-5 aspect-square",
              "col-span-1 md:col-span-7 aspect-[5/3]",
              "col-span-2 md:col-span-12 aspect-[16/7]",
            ];
            return (
              <figure key={i} className={`relative overflow-hidden bg-cream-2 group ${colSpans[i]}`}>
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="absolute bottom-3 left-3 right-3 marker opacity-90 text-cream">
                  <span className="bg-ink/85 px-2.5 py-1 inline-block">
                    {String(i + 1).padStart(2, "0")} / {p.caption}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-10 marker opacity-60 max-w-md">
          Photos: shot on an iPhone 14, frequently while hungry.
        </div>
      </div>
    </section>
  );
}
