"use client";

import { reviews } from "@/data/site";

export default function Reviews() {
  return (
    <section id="press" className="section bg-cream border-t border-ink/10">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-7">
            <span className="eyebrow">Press &amp; The Liked</span>
            <h2 className="display text-[clamp(2.6rem,7vw,6.4rem)] leading-[0.85] mt-5">
              PLEASANTLY
              <br />
              <span className="script text-tomato italic lowercase font-serif tracking-normal">
                reviewed.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-4 flex flex-col gap-3">
            <div className="marker opacity-70">
              Yelp — 4.8 ★ · 213 reviews
            </div>
            <div className="marker opacity-70">
              Marin I.J. — &ldquo;Top 10 New Restaurants on the North Bay
              Coast, Fall &apos;24&rdquo;
            </div>
            <div className="marker opacity-70">
              Eater SF — &ldquo;The Plain-Spoken Smashburger Sausalito Has
              Been Waiting For&rdquo;
            </div>
          </div>
        </div>

        {/* Editorial review layout: one main quote + secondary lines */}
        <div className="grid md:grid-cols-12 gap-10 md:gap-12">
          {/* Lead quote */}
          <figure className="md:col-span-8 flex flex-col gap-8">
            <blockquote className="font-serif italic text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.15] tracking-tight">
              <span aria-hidden className="text-tomato">&ldquo;</span>
              {reviews[0].quote}
              <span aria-hidden className="text-tomato">&rdquo;</span>
            </blockquote>
            <figcaption className="marker opacity-70 flex items-center gap-3">
              <span className="block w-12 h-px bg-ink/50" />
              {reviews[0].name} · {reviews[0].handle} · {reviews[0].source}
            </figcaption>
          </figure>

          {/* Two stacked reviews */}
          <div className="md:col-span-4 flex flex-col gap-10 pt-6 md:border-l md:border-ink/15 md:pl-10">
            {[reviews[1], reviews[2]].map((r, i) => (
              <figure key={i} className="flex flex-col gap-4">
                <blockquote className="font-serif text-lg leading-snug italic">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="marker opacity-60">
                  {r.name} · {r.source}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
