import type { Metadata } from "next";
import { fullMenu, site } from "@/data/site";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `Menu — ${site.name}`,
  description: `The full menu at ${site.name}: smash burgers on brioche, hand-cut fries, shakes, and Marin-brewed beers.`,
};

const sectionBlurbs: Record<string, string> = {
  Burgers: "All on brioche from Boulangerie La Vecchia, San Rafael. Sub any burger to a bed of greens.",
  "Sides + Shares": "All hand-cut, made to order. Good for the table.",
  "Shakes + Floats": "Hand-shaken, soft-serve base.",
  "Drinks (Beer/Wine)": "Local-first pour list. Updated every Friday.",
};

const sectionNumbers: Record<string, string> = {
  Burgers: "I",
  "Sides + Shares": "II",
  "Shakes + Floats": "III",
  "Drinks (Beer/Wine)": "IV",
};

/**
 * Items are flattened back out into a per-item article inside its category section.
 * Running index is computed via reduce so we don't rely on a mutable outer scope.
 */
function buildSections() {
  const sections = Object.entries(fullMenu);
  const counts: number[] = [];
  for (const [, items] of sections) counts.push(items.length);
  let runningTotal = 0;
  return sections.map(([cat, items], sectionIdx) => {
    const startIndex = runningTotal + 1;
    runningTotal += items.length;
    return { cat, items, sectionIdx, startIndex, endIndex: runningTotal };
  });
}

export default function MenuPage() {
  const sections = buildSections();

  return (
    <main>
      {/* Hero */}
      <section className="pt-36 pb-20 md:pt-44 md:pb-28 grain">
        <div className="container-x">
          <span className="eyebrow mb-6">The Full Index — Updated weekly</span>
          <h1 className="display text-[clamp(3.6rem,12vw,12rem)] leading-[0.83] tracking-crunch">
            SHORT
            <br />
            MENU,
            <br />
            <span className="script text-tomato italic lowercase font-serif tracking-normal">
              no extras.
            </span>
          </h1>
          <div className="grid md:grid-cols-12 gap-8 mt-16 md:mt-20 pt-8 border-t border-ink/15">
            <p className="md:col-span-7 font-serif text-xl leading-snug max-w-xl">
              Six burgers. Five sides. Three shakes. A tight pour list. We have
              not added a single item we couldn&apos;t make exceptionally — and
              we&apos;re not about to.
            </p>
            <div className="md:col-span-5 md:text-right flex flex-col md:items-end gap-2">
              <div className="marker opacity-60">Pocket prices in USD</div>
              <div className="marker opacity-60">Tax not included</div>
              <div className="marker opacity-60">No substitutions, please — chef</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      {sections.map(({ cat, items, startIndex, endIndex }) => (
        <section
          key={cat}
          className="py-20 md:py-28 border-t border-ink/15"
          aria-labelledby={`section-${cat.replace(/\W/g, "").toLowerCase()}`}
        >
          <div className="container-x">
            <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-16 items-end">
              <div className="md:col-span-7">
                <div className="marker text-tomato">{sectionNumbers[cat]} ·</div>
                <h2
                  id={`section-${cat.replace(/\W/g, "").toLowerCase()}`}
                  className="display text-[clamp(2.8rem,7vw,6rem)] leading-[0.86] tracking-tight mt-3"
                >
                  {cat.toUpperCase()}
                </h2>
              </div>
              <p className="md:col-span-5 font-serif text-lg leading-snug max-w-md md:pt-3">
                {sectionBlurbs[cat]}
              </p>
            </div>

            <div className="grid gap-0">
              {items.map((it, i) => {
                const runningNum = startIndex + i;
                const isLast = i === items.length - 1;
                return (
                  <article
                    key={it.name}
                    className={`grid grid-cols-12 gap-4 py-7 md:py-8 border-t border-ink/15 items-baseline group hover:bg-cream-2 transition-colors px-3 -mx-3 ${
                      isLast ? "border-b" : ""
                    }`}
                  >
                    <div className="col-span-1 marker opacity-50 leading-none pt-2">
                      {String(runningNum).padStart(2, "0")}
                    </div>
                    <div className="col-span-9 md:col-span-8 flex flex-col gap-2">
                      <h3 className="display text-[clamp(1.6rem,3.2vw,2.6rem)] leading-[0.92] tracking-tight">
                        {it.name}
                      </h3>
                      <p className="font-serif text-base opacity-80 max-w-2xl leading-snug">
                        {it.desc}
                      </p>
                    </div>
                    <div className="col-span-2 md:col-span-3 md:text-right display text-[clamp(1.4rem,2.6vw,2.2rem)] leading-none text-saffron-deep tracking-tight">
                      {it.price}
                    </div>
                  </article>
                );
              })}
              <div className="mt-3 marker opacity-50">
                Items {String(startIndex).padStart(2, "0")}–
                {String(endIndex).padStart(2, "0")} of{" "}
                {String(Object.values(fullMenu).reduce((s, arr) => s + arr.length, 0)).padStart(2, "0")}
                .
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Pair it / Last call */}
      <section className="section bg-ink text-cream grain relative">
        <div className="container-x relative z-10">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <span className="eyebrow eyebrow--light mb-6">Pair it, or skip</span>
              <h2 className="display text-[clamp(2.6rem,7vw,5.4rem)] leading-[0.86]">
                TRY
                <br />
                <span className="script text-tomato italic lowercase font-serif tracking-normal">
                  the perfect order.
                </span>
              </h2>
            </div>
            <div className="md:col-span-5 font-serif text-lg leading-snug md:pt-6 max-w-md">
              <p>
                The Caledonia + a side of crispy brussels + a cold glass of
                Ridge Lytton = the move. If you want ours, get this.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Back */}
      <section className="section pb-32">
        <div className="container-x">
          <div className="border-t border-ink/15 pt-8 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
            <div className="marker opacity-70">
              Something missing? Email the kitchen — we read every one.
            </div>
            <Link href="/" className="btn btn--ghost">
              ← Back to home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
