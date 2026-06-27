"use client";

import { site } from "@/data/site";

export default function CTASection() {
  return (
    <section className="relative py-32 md:py-44 bg-saffron overflow-hidden grain">
      <div className="container-x relative z-10">
        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="eyebrow text-ink/80 !text-ink/80 mb-6 inline-flex">
              <span aria-hidden className="!w-7 !bg-ink/80" /> Come hungry,
              leave full.
            </span>

            <h2 className="display text-[clamp(3rem,11vw,11rem)] leading-[0.83] tracking-crunch">
              GRAB A
              <br />
              STOOL.
            </h2>
          </div>

          <div className="md:col-span-4 flex flex-col gap-5 md:pb-4">
            <p className="font-serif text-lg max-w-sm leading-snug">
              We&apos;re a walk-in joint, no reservations. Line moves
              fast. Ferry is the move.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${site.phoneRaw}`}
                className="btn btn--ink"
              >
                ☎ {site.phone}
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
              >
                Open in maps →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom address strap */}
        <div className="mt-16 pt-7 border-t border-ink/30 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <span className="marker opacity-85">
            {site.address} · {site.city}, {site.state} {site.zip}
          </span>
          <span className="font-serif italic">
            Built with salt, smoke, and a flat-top that hasn&apos;t cooled since
            &apos;24.
          </span>
        </div>
      </div>

      {/* Big background numbers */}
      <span
        aria-hidden
        className="absolute -right-12 -bottom-24 display text-[26rem] leading-none opacity-[0.18] select-none pointer-events-none"
        style={{ fontWeight: 900 }}
      >
        ♥
      </span>
    </section>
  );
}
