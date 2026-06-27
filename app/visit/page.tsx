import type { Metadata } from "next";
import { site } from "@/data/site";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Visit — ${site.name}`,
  description: `Hours, address, phone, and directions for ${site.name} on Caledonia Street in Sausalito, CA.`,
};

export default function VisitPage() {
  return (
    <main>
      <section className="pt-36 pb-16 md:pt-44 md:pb-20 grain">
        <div className="container-x">
          <span className="eyebrow mb-6">Find Us, Eat Well</span>
          <h1 className="display text-[clamp(3.4rem,12vw,11rem)] leading-[0.83] tracking-crunch">
            CALEDONIA
            <br />
            <span className="script text-tomato italic lowercase font-serif tracking-normal">
              and Bridgeway.
            </span>
          </h1>
          <p className="mt-10 font-serif text-xl max-w-2xl leading-snug">
            Three blocks off Bridgeway — past the galleries, on the side locals
            actually walk down. If you&apos;re coming for the postcard view,
            we&apos;re just past it.
          </p>
        </div>
      </section>

      <section className="pb-12 md:pb-20">
        <div className="container-x">
          <div className="relative aspect-[16/9] md:aspect-[16/10] overflow-hidden border border-ink bg-ink-2">
            <iframe
              title={`Map to ${site.name}, Sausalito`}
              src={site.mapsEmbed}
              className="absolute inset-0 w-full h-full grayscale-[0.85] contrast-[1.05] invert-[0.94]"
              style={{ filter: "saturate(0.7)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Floating card over map */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-cream border border-ink p-6 md:p-7 max-w-[320px]">
              <div className="marker text-tomato">[ You are here ]</div>
              <div className="display text-2xl mt-3 leading-none">CALEDONIA 43</div>
              <div className="font-serif italic mt-3 leading-snug">
                Look for the saffron awning. Look for the line. Look for cook
                smoke.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two big cards: Hours + Getting here */}
      <section className="section pt-0">
        <div className="container-x grid md:grid-cols-2 gap-6">
          <div className="bg-ink text-cream p-8 md:p-12 relative overflow-hidden">
            <div className="marker text-saffron mb-6">[ Hours ]</div>
            <div className="flex flex-col gap-3">
              {site.hours.map((h) => (
                <div
                  key={h.day}
                  className="flex justify-between gap-4 border-b border-cream/15 pb-3 last:border-b-0"
                >
                  <span className="font-serif text-lg italic">{h.day}</span>
                  <span className="marker text-cream/85">{h.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 marker opacity-65">
              Tap those numbers. Last call 30 minutes before close.
            </div>
            <span aria-hidden className="absolute right-5 -bottom-10 display text-[10rem] leading-none text-saffron opacity-[0.12]">11</span>
          </div>

          <div className="bg-cream-2 p-8 md:p-12">
            <div className="marker text-ink mb-6">[ Getting here ]</div>
            <div className="flex flex-col gap-6 font-serif text-lg leading-snug">
              <p>
                <span className="display text-ink mr-2">BY&nbsp;FERRY:</span>{" "}
                Take the Larkspur Ferry or the SF Ferry. We&apos;re two blocks
                from the Sausalito landing. The ferry is the move.
              </p>
              <p>
                <span className="display text-ink mr-2">BY&nbsp;CAR:</span>{" "}
                Take the last Sausalito exit. Free parking along Caledonia and
                in the Ferry lot two blocks up the hill.
              </p>
              <p>
                <span className="display text-ink mr-2">BY&nbsp;BIKE:</span>{" "}
                Two public bike racks on Bridgeway. Bring a sweater for the
                ride back — the fog usually wins.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--ink"
              >
                Open in Maps →
              </a>
              <a
                href={`tel:${site.phoneRaw}`}
                className="btn btn--outline"
              >
                ☎ Call us: {site.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Big address stamp */}
      <section className="section bg-cream border-t border-ink/15">
        <div className="container-x">
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div>
              <div className="marker text-tomato">[ The address, big ]</div>
              <h2 className="display text-[clamp(3rem,9vw,8rem)] leading-[0.83] tracking-crunch mt-4">
                43
                <br />
                CALEDONIA
                <br />ST.
              </h2>
            </div>
            <div className="font-serif text-lg leading-snug md:pb-6">
              <div>{site.address}</div>
              <div className="italic">{site.city}, {site.state} {site.zip}</div>
              <div className="marker opacity-60 mt-4">Marin County · Sausalito · California</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
