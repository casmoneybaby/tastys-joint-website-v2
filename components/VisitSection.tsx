"use client";

import { site } from "@/data/site";

export default function VisitSection() {
  return (
    <section id="visit" className="section bg-cream border-t border-ink/15">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start mb-12">
          <div className="md:col-span-7">
            <span className="eyebrow">Visit the Joint</span>
            <h2 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85] mt-5">
              ON THE
              <br />
              QUIET SIDE
              <br />
              OF CALEDONIA.
            </h2>
          </div>
          <p className="md:col-span-5 font-serif text-lg leading-snug md:pt-6 max-w-md">
            If you&apos;re coming for the bridge view, we&apos;re three blocks
            west. Look for the saffron awning and a small line that knows what
            they&apos;re waiting for.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          {/* Map */}
          <div className="md:col-span-7 relative aspect-[4/3] overflow-hidden border border-ink bg-ink-2">
            <iframe
              title="Map to Tasty's Joint, Sausalito"
              src={site.mapsEmbed}
              className="absolute inset-0 w-full h-full grayscale-[0.85] contrast-[1.05] invert-[0.94]"
              style={{ filter: "saturate(0.7)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Hours + Address card */}
          <div className="md:col-span-5 bg-ink text-cream p-7 md:p-10 flex flex-col gap-10 relative">
            <div>
              <div className="marker text-saffron">[ Hours ]</div>
              <div className="mt-5 flex flex-col gap-2.5">
                {site.hours.map((h) => (
                  <div
                    key={h.day}
                    className="flex justify-between gap-4 border-b border-cream/10 pb-2.5 last:border-b-0"
                  >
                    <span className="font-serif text-base italic">{h.day}</span>
                    <span className="marker">{h.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 marker opacity-60">
                Last call 30 min before close.
              </div>
            </div>

            <div>
              <div className="marker text-saffron">[ Address ]</div>
              <div className="mt-5 font-serif text-lg leading-tight">
                {site.address}
                <br />
                {site.city}, {site.state} {site.zip}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="btn btn--ink !bg-cream !text-ink hover:!text-ink"
                >
                  ☎ {site.phone}
                </a>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--outline !border-cream !text-cream hover:!bg-cream hover:!text-ink"
                >
                  Open in Maps →
                </a>
              </div>
            </div>

            {/* Stamp */}
            <span
              aria-hidden
              className="absolute right-5 top-5 display text-[1rem] tracking-ultra text-saffron rotate-12 opacity-75"
            >
              [ FIND US ]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
