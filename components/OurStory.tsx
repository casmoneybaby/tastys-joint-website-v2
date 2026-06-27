"use client";

import Image from "next/image";
import { site } from "@/data/site";

export default function OurStory() {
  return (
    <section id="story" className="section">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* Left: image stack */}
          <div className="md:col-span-6 relative">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream-2">
                <Image
                  src="https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=1200&q=85&auto=format&fit=crop"
                  alt="A cook pressing a smash patty at the griddle"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              {/* Stamp */}
              <div
                aria-hidden
                className="absolute -top-6 -left-6 w-32 h-32 rounded-full border-2 border-ink flex flex-col items-center justify-center -rotate-12 bg-cream"
              >
                <span className="display text-[1.4rem] leading-none">EST.</span>
                <span className="display text-[2rem] leading-none text-tomato">
                  24
                </span>
                <span className="marker text-[0.55rem] mt-0.5">Marin</span>
              </div>

              {/* Floating sauce-spilled ticket */}
              <div
                aria-hidden
                className="absolute -bottom-10 -right-6 md:-right-10 bg-ink text-cream p-5 max-w-[260px] rotate-3 hidden md:block"
              >
                <div className="marker opacity-60 mb-2">[ Receipt ]</div>
                <div className="font-serif text-base leading-snug italic">
                  &ldquo;Best burger I&apos;ve had since the Lobster Pit in
                  Sausalito closed in &apos;94. — Mom&rdquo;
                </div>
              </div>
            </div>
          </div>

          {/* Right: copy */}
          <div className="md:col-span-6 flex flex-col gap-8 md:pl-4">
            <span className="eyebrow">Story — Issue 01</span>

            <h2 className="display text-[clamp(2.8rem,6vw,5.2rem)] leading-[0.86]">
              A JOINT
              <br />
              BECAUSE
              <br />
              <span className="script text-tomato italic lowercase font-serif tracking-normal">
                Sausalito needed one.
              </span>
            </h2>

            <div className="flex flex-col gap-5 max-w-xl">
              <p className="font-serif text-lg leading-snug">
                We moved here in 2019. We sat in every burger place between
                Caledonia and the Ferry. We were politely disappointed.
              </p>
              <p className="font-serif text-lg leading-snug">
                So we rented the smallest kitchen we could afford. We bought a
                used Hestan flat-top. We sourced bun from a baker who
                doesn&apos;t do social media. We grind, we smash, we plate.
                That&apos;s the whole operation.
              </p>
              <p className="font-serif text-lg leading-snug">
                <span className="italic text-tomato">We&apos;re small on purpose.</span>{" "}
                Six burgers. House-made everything. A counter, ten stools, and a
                bench by the window. If you want a franchise, this isn&apos;t
                it. We will never be a franchise.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-4 pt-6 border-t border-ink/15 max-w-md">
              <div className="script text-3xl italic">— Calle &amp; Devra</div>
              <div className="marker opacity-60 mt-2">
                Co-owners, grill operators, and the team that takes your order.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
