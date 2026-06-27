"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  // Subtle parallax for the burger float
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const x = (e.clientX - w / 2) / w;
      const y = (e.clientY - h / 2) / h;
      setPos({ x: x * 12, y: y * 12 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={wrapRef}
      className="relative min-h-[100svh] pt-28 md:pt-36 pb-16 grain"
    >
      {/* Marker strap (top right corner) */}
      <div className="absolute top-24 right-4 md:right-12 hidden md:block">
        <div className="marker opacity-60 leading-tight">
          EST. 2024<br />
          CALEDONIA ST.<br />
          MARIN · CA
        </div>
      </div>

      <div className="container-x">
        {/* Top eyebrow row */}
        <div className="flex items-center justify-between mb-10 md:mb-16">
          <span className="eyebrow">Issue 01 — Open Daily</span>
          <span className="marker opacity-60 hidden md:inline">
            Today: 11AM — 9PM
          </span>
        </div>

        {/* Headline — kinetic, oversized, breaks lines on purpose */}
        <h1 className="display text-[clamp(3.2rem,11.5vw,11.5rem)] leading-[0.82] tracking-crunch">
          <span className="block">SMASH</span>
          <span className="block">
            BURG<span className="script text-tomato">e</span>RS,
          </span>
          <span className="block">SMALL</span>
          <span className="block">
            <span className="script text-tomato italic font-serif lowercase tracking-normal align-middle">
              but
            </span>{" "}
            LOUD.
          </span>
        </h1>

        {/* Middle row: copy + burger visual */}
        <div className="mt-12 md:mt-20 grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Copy */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <p className="font-serif text-[1.35rem] leading-tight max-w-md">
              A burger joint worth the bridge toll. Small kitchen, slow grind,
              daily menu,{" "}
              <span className="italic text-tomato">on the quiet side</span>{" "}
              of Sausalito.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href={`tel:${site.phoneRaw}`} className="btn btn--ink">
                ☎ Call to Order
              </a>
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn--outline"
              >
                Find us on Caledonia
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <div className="display text-2xl leading-none">43</div>
                <div className="marker opacity-60 mt-1.5">Caledonia</div>
              </div>
              <div>
                <div className="display text-2xl leading-none">11a</div>
                <div className="marker opacity-60 mt-1.5">Open daily</div>
              </div>
              <div>
                <div className="display text-2xl leading-none">
                  <span aria-hidden>·</span>
                  <span className="ml-1 text-tomato animate-blink">●</span>
                </div>
                <div className="marker opacity-60 mt-1.5">Walk-in only</div>
              </div>
            </div>
          </div>

          {/* Burger visual: hand-rendered svg (no 3D / no stock) */}
          <div className="md:col-span-7 relative h-[300px] md:h-[480px]">
            <BurgerComposition pos={pos} />
          </div>
        </div>

        {/* Bottom row — bottom rule + meta */}
        <div className="mt-16 md:mt-24 border-t border-ink/15 pt-6 grid md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-7">
            <div className="script text-2xl md:text-[2.2rem] leading-tight italic">
              &ldquo;We don&apos;t do lettuce wraps. We don&apos;t do impossible
              patties. We do the burger, honestly.&rdquo;
            </div>
          </div>
          <div className="md:col-span-5 md:text-right grid grid-cols-2 md:grid-cols-1 gap-6">
            <div>
              <div className="marker opacity-60 mb-1">Avg cost</div>
              <div className="display text-3xl leading-none">$16 / PP</div>
            </div>
            <div>
              <div className="marker opacity-60 mb-1">Dine-in</div>
              <div className="display text-3xl leading-none">
                <span className="text-tomato">● </span>OPEN
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
        <span className="marker text-[0.6rem]">scroll</span>
        <span aria-hidden className="block w-[1px] h-8 bg-ink animate-flicker" />
      </div>
    </section>
  );
}

function BurgerComposition({ pos }: { pos: { x: number; y: number } }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: "transform 380ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {/* Strong shape: layered circles, tilted */}
      <svg
        viewBox="0 0 600 480"
        className="w-full h-full max-w-[620px]"
        aria-hidden
      >
        {/* Sesame seeds on top */}
        {[...Array(26)].map((_, i) => {
          const x = 110 + (i * 19) % 360;
          const y = 70 + Math.floor((i * 19) / 360) * 22 + (i % 3) * 4;
          return (
            <ellipse
              key={i}
              cx={x}
              cy={y}
              rx="6"
              ry="2.6"
              fill="#F4EFE6"
              transform={`rotate(${(i * 17) % 60 - 30} ${x} ${y})`}
            />
          );
        })}

        {/* Top bun */}
        <path
          d="M60 150 Q300 -10 540 150 Z"
          fill="#C97B2A"
          stroke="#1A1A1A"
          strokeWidth="3"
        />
        <path
          d="M80 148 Q300 18 520 148"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2"
          opacity="0.35"
        />

        {/* Lettuce frill (knocked to one side) */}
        <path
          d="M50 180 Q90 160 120 175 Q160 145 200 180 Q260 155 300 175 Q360 150 400 180 Q450 160 510 180 Q540 175 555 185 L555 220 L50 220 Z"
          fill="#4A7B3C"
          stroke="#1A1A1A"
          strokeWidth="3"
        />

        {/* Cheese melting */}
        <path
          d="M40 220 Q160 200 280 220 Q420 200 560 220 L560 260 L40 260 Z"
          fill="#DBA53A"
          stroke="#1A1A1A"
          strokeWidth="3"
        />
        <path
          d="M70 235 L70 270 M180 240 L180 282 M280 240 L280 280 M380 240 L380 285 M480 235 L480 268"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* Beef patty */}
        <rect x="40" y="260" width="520" height="76" rx="6"
          fill="#3D1F0F" stroke="#1A1A1A" strokeWidth="3" />
        <path
          d="M70 280 Q280 320 480 280"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="81"
          strokeOpacity="0.5"
          strokeLinecap="round"
        />

        {/* Tomato slice with seeds */}
        <path
          d="M50 332 Q300 326 550 332 L550 360 Q300 366 50 360 Z"
          fill="#C8392E"
          stroke="#1A1A1A"
          strokeWidth="3"
        />
        {[140, 240, 340, 440].map((cx, i) => (
          <g key={i}>
            <ellipse cx={cx} cy={346} rx="6" ry="3.5" fill="#F4EFE6" />
            <line x1={cx - 3} y1={346} x2={cx + 3} y2={346} stroke="#1A1A1A" strokeWidth="1" />
          </g>
        ))}

        {/* Bottom bun */}
        <path
          d="M60 358 Q300 470 540 358 Z"
          fill="#C97B2A"
          stroke="#1A1A1A"
          strokeWidth="3"
        />

        {/* Steam wisps */}
        <path
          d="M120 60 Q100 30 130 -5"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2"
          opacity="0.35"
        />
        <path
          d="M280 40 Q310 10 290 -10"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2"
          opacity="0.35"
        />
        <path
          d="M450 60 Q470 30 440 5"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="2"
          opacity="0.35"
        />

        {/* Circular stamp */}
        <g transform="translate(470, 100)">
          <circle r="60" fill="none" stroke="#C8392E" strokeWidth="2" />
          <circle r="50" fill="none" stroke="#C8392E" strokeWidth="1.5" />
          <text
            textAnchor="middle"
            y="-26"
            fontFamily="var(--font-mono), monospace"
            fontSize="9"
            letterSpacing="2"
            fill="#C8392E"
            style={{ textTransform: "uppercase" }}
          >
            OPEN
          </text>
          <text
            textAnchor="middle"
            y="-12"
            fontFamily="var(--font-mono), monospace"
            fontSize="9"
            letterSpacing="2"
            fill="#C8392E"
            style={{ textTransform: "uppercase" }}
          >
            DAILY
          </text>
          <text
            textAnchor="middle"
            y="2"
            fontFamily="var(--font-anton), sans-serif"
            fontSize="14"
            letterSpacing="1.5"
            fill="#C8392E"
          >
            11 — 9
          </text>
          <text
            textAnchor="middle"
            y="18"
            fontFamily="var(--font-mono), monospace"
            fontSize="8"
            letterSpacing="2.5"
            fill="#C8392E"
            style={{ textTransform: "uppercase" }}
          >
            JL. CALEDONIA
          </text>
          <text
            textAnchor="middle"
            y="32"
            fontFamily="var(--font-mono), monospace"
            fontSize="7"
            letterSpacing="2"
            fill="#C8392E"
          >
            MARIN · CA
          </text>
        </g>
      </svg>
    </div>
  );
}
