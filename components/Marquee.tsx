"use client";

import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: "normal" | "slow" | "reverse";
  variant?: "ink" | "cream" | "tomato";
}

export default function Marquee({ items, className = "", speed = "normal", variant = "ink" }: MarqueeProps) {
  const animated = speed === "slow" ? "animate-marquee-slow" : speed === "reverse" ? "animate-marquee-reverse" : "animate-marquee";
  const repeated = [...items, ...items];

  return (
    <div
      className={cn(
        "overflow-hidden border-y",
        variant === "ink" && "bg-ink text-cream border-ink",
        variant === "cream" && "bg-cream text-ink border-ink/10",
        variant === "tomato" && "bg-tomato text-cream border-tomato",
        className
      )}
      aria-hidden
    >
      <div className={cn("flex w-max", animated)}>
        {repeated.map((item, i) => (
          <div key={i} className="flex items-center px-8 py-4 gap-8">
            <span className="display text-[clamp(2rem,5vw,4.4rem)] whitespace-nowrap leading-none">
              {item}
            </span>
            <span
              aria-hidden
              className={cn(
                "w-3 h-3 rotate-45",
                variant === "ink" && "bg-saffron",
                variant === "cream" && "bg-tomato",
                variant === "tomato" && "bg-cream"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
