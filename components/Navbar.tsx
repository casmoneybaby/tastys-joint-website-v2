"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/#story", label: "Story" },
  { href: "/#visit", label: "Visit" },
  { href: "/#press", label: "Press" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        scrolled ? "py-2.5" : "py-5"
      )}
    >
      <div className="container-x">
        <div
          className={cn(
            "flex items-center justify-between border transition-colors",
            scrolled
              ? "bg-cream/95 backdrop-blur-md border-ink/10 px-4 py-2.5"
              : "bg-cream/85 backdrop-blur-sm border-transparent px-2 py-3"
          )}
        >
          {/* Brand mark */}
          <Link href="/" className="flex items-end gap-2 group" aria-label={site.name}>
            <span className="display text-[1.55rem] leading-none tracking-tight">
              TASTY&apos;S
            </span>
            <span className="display text-[1.55rem] leading-none text-tomato group-hover:text-ink transition-colors">
              ⟨/⟩
            </span>
            <span className="hidden sm:flex flex-col leading-none">
              <span className="display text-[1.55rem] leading-none">JOINT</span>
            </span>
          </Link>

          {/* Center nav (md+) */}
          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="marker text-[0.7rem] draw-under"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right — call CTA */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${site.phoneRaw}`}
              className="hidden md:inline-flex btn btn--ink !py-2.5 !px-4 !text-[0.65rem]"
              aria-label={`Call ${site.name}`}
            >
              <span aria-hidden>☎</span>
              {site.phone}
            </a>

            {/* Hamburger */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
              onClick={() => setOpen((v) => !v)}
            >
              <span
                className={cn(
                  "block w-6 h-[2px] bg-ink transition-transform",
                  open && "translate-y-[7px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-[2px] bg-ink transition-opacity",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block w-6 h-[2px] bg-ink transition-transform",
                  open && "-translate-y-[7px] -rotate-45"
                )}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-ink text-cream transition-opacity pointer-events-none",
          open ? "opacity-100 pointer-events-auto" : "opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="container-x h-full flex flex-col justify-between py-24">
          <nav className="flex flex-col gap-6">
            <div className="marker text-[0.7rem] text-saffron">[ Menu ]</div>
            {[{ href: "/", label: "Home" }, ...links].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display text-[3.2rem] leading-none tracking-tight"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div>
            <a
              href={`tel:${site.phoneRaw}`}
              onClick={() => setOpen(false)}
              className="btn btn--ink !bg-cream !text-ink !border-cream hover:!text-ink"
            >
              ☎ {site.phone}
            </a>
            <div className="mt-4 marker opacity-60">
              {site.address} — {site.city}, {site.state}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
