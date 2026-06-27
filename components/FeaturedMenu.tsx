"use client";

import Image from "next/image";
import { featuredBurgers } from "@/data/site";
import { cn } from "@/lib/utils";

export default function FeaturedMenu() {
  return (
    <section id="menu" className="section">
      <div className="container-x">
        {/* Header — editorial layout: oversized title left + tagline right */}
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <div className="md:col-span-7">
            <span className="eyebrow mb-6">The Index — Six Burgers</span>
            <h2 className="display text-[clamp(3rem,8vw,7rem)] leading-[0.85]">
              SHORT MENU.
              <br />
              <span className="script text-tomato italic lowercase font-serif tracking-normal">Long</span>{" "}
              ON OPINION.
            </h2>
          </div>
          <div className="md:col-span-5 md:pb-3">
            <p className="font-serif text-lg max-w-md leading-snug">
              Six burgers. One cheeseburger with a veggie cousin. We will not
              pad this list. If we did, we&apos;d lose the flavor war.
            </p>
          </div>
        </div>

        {/* Burger list — staggered, editorial, numbered */}
        <div className="grid md:grid-cols-12 gap-x-6">
          {featuredBurgers.map((b, i) => (
            <BurgerRow
              key={b.id}
              burger={b}
              index={i}
            />
          ))}
        </div>

        {/* Bottom strap */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-ink flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
          <div className="marker opacity-70">
            All burgers come on brioche from Boulangerie La Vecchia, San Rafael.
          </div>
          <a href="/menu" className="btn btn--ghost">
            See the full menu →
          </a>
        </div>
      </div>
    </section>
  );
}

interface RowProps {
  burger: typeof featuredBurgers[number];
  index: number;
}

function BurgerRow({ burger, index }: RowProps) {
  // Create intentional asymmetry: even rows lean left, odd rows lean right
  const offset = index % 2 === 0 ? "md:col-span-7" : "md:col-span-5 md:translate-y-12";

  return (
    <article
      className={cn(
        "group relative grid md:grid-cols-12 gap-6 items-center py-8 md:py-14 border-t border-ink/15",
        offset,
        index === 5 && "border-b"
      )}
    >
      {/* Photo */}
      <div
        className={cn(
          "md:col-span-5 relative aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-cream-2",
          index >= 3 && "md:order-2"
        )}
      >
        <span className="absolute top-3 left-3 z-10 tag tag--filled">
          № {burger.id}
        </span>
        <span
          aria-hidden
          className="absolute top-3 right-3 z-10 tag tag--saffron"
        >
          {burger.tagline}
        </span>
        <Image
          src={burger.image}
          alt={`${burger.name} — ${burger.tagline}`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
      </div>

      {/* Copy */}
      <div
        className={cn(
          "md:col-span-7 flex flex-col gap-4",
          index >= 3 && "md:order-1 md:text-right md:items-end"
        )}
      >
        <div className={cn("flex items-baseline gap-4 flex-wrap", index >= 3 && "md:justify-end")}>
          <h3 className="display text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.86]">
            {burger.name}
          </h3>
          <span className="display text-[clamp(1.4rem,2vw,2rem)] leading-none text-saffron-deep">
            {burger.price}
          </span>
        </div>
        <p className="font-serif text-lg max-w-xl leading-snug">
          {burger.description}{" "}
          <span className="italic text-tomato">({burger.highlight})</span>
        </p>
      </div>
    </article>
  );
}
