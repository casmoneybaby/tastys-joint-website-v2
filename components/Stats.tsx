"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/site";

/**
 * Counter that ticks up when scrolled into view.
 * SSR-safe: falls back to "—" if no JS or no intersection.
 */
function Counter({ to, suffix = "" }: { to: string; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<string>(to.includes("%") ? "0%" : to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observed = el;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Parse numeric portion
          const match = to.match(/^([\d.]+)(.*)$/);
          if (!match) {
            setShown(to);
            obs.disconnect();
            return;
          }
          const target = parseFloat(match[1]);
          const suffixAll = match[2];
          const duration = 1100;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setShown(`${(target * p).toFixed(target % 1 === 0 ? 0 : 1)}${suffixAll}${suffix}`);
            if (p < 1) requestAnimationFrame(tick);
            else setShown(`${target}${suffixAll}${suffix}`);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(observed);
    return () => obs.disconnect();
  }, [to, suffix]);

  return <span ref={ref}>{shown}</span>;
}

export default function Stats() {
  return (
    <section className="border-y border-ink/15 bg-cream">
      <div className="container-x py-14 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 md:gap-x-8">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col gap-3">
              <div className="display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-none">
                <Counter to={s.value} />
              </div>
              <div className="marker opacity-60">{s.label}</div>
              {/* Hand-drawn squiggly underline */}
              <svg
                width="60"
                height="6"
                viewBox="0 0 60 6"
                fill="none"
                className="text-tomato"
                aria-hidden
              >
                <path
                  d="M1 3 Q12 1 22 4 T44 3 T60 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
