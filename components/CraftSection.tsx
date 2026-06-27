"use client";

import { craftPillars } from "@/data/site";

export default function CraftSection() {
  return (
    <section id="craft" className="section dark-paper grain relative">
      <div className="container-x relative z-10">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-20 items-end">
          <div className="md:col-span-7">
            <span className="eyebrow eyebrow--light mb-6">How we make it</span>
            <h2 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85]">
              THE
              <br />
              CRAFT <span className="text-saffron italic dash">/</span>{" "}
              <span className="script text-tomato italic lowercase font-serif tracking-normal">
                four things we won&apos;t cut.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-3">
            <p className="font-serif text-lg max-w-md leading-snug opacity-85">
              No assembly line. No shortcuts. Four working rules that turn a
              sandwich and a griddle into something worth taking the ferry for.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-6 md:gap-4">
          {craftPillars.map((p, i) => (
            <article
              key={p.n}
              className="md:col-span-3 relative border border-cream/15 bg-ink-2/60 p-7 md:p-8 hover:bg-ink-2 transition-colors"
            >
              <span className="block marker text-[0.75rem] text-saffron mb-7 tracking-ultra">
                {p.n}
              </span>
              <h3 className="display text-[1.65rem] leading-[0.95] mb-4 tracking-tight">
                {p.title}
              </h3>
              <p className="font-serif text-base leading-snug opacity-80">
                {p.body}
              </p>
              {/* Right edge saffron detail */}
              <span
                aria-hidden
                className="absolute top-3 right-3 w-2 h-2 bg-saffron"
              />
            </article>
          ))}
        </div>

        {/* Bottom rule */}
        <div className="mt-16 pt-6 border-t border-cream/20 flex items-center justify-between">
          <span className="marker opacity-60">
            Read the long version in our{" "}
            <a className="draw-under text-saffron" href="/#story">
              Story
            </a>
            .
          </span>
          <span className="marker opacity-60">— 2 min read</span>
        </div>
      </div>
    </section>
  );
}
