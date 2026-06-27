"use client";

import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream grain relative">
      <div className="container-x relative z-10 py-16 md:py-24">
        {/* Top row — big brand wordmark + nav columns */}
        <div className="grid md:grid-cols-12 gap-8 mb-14 md:mb-20 items-end">
          <div className="md:col-span-7">
            <div className="display text-[clamp(3rem,8vw,7rem)] leading-[0.86]">
              TASTY&apos;S
              <br />
              <span className="text-saffron">JOINT</span>.
            </div>
          </div>
          <div className="md:col-span-5 md:text-right">
            <div className="marker text-saffron">[ Available for parties of 6+ ]</div>
            <div className="font-serif mt-2 max-w-md md:ml-auto leading-snug">
              Walk-in only. Want to roll up with a crowd? Call ahead and we&apos;ll
              try to make space.
            </div>
          </div>
        </div>

        {/* Mid row — three columns */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-14 pt-12 border-t border-cream/20">
          {/* Column 1 — Address */}
          <div className="flex flex-col gap-3">
            <div className="marker text-saffron mb-2">[ Visit ]</div>
            <div className="font-serif text-lg leading-tight">
              {site.address}
              <br />
              {site.city}, {site.state} {site.zip}
            </div>
            <a
              href={`tel:${site.phoneRaw}`}
              className="marker text-cream/75 hover:text-saffron draw-under"
            >
              {site.phone}
            </a>
            <div className="marker text-cream/60 mt-1">hello@tastysjoint.com</div>
          </div>

          {/* Column 2 — Hours */}
          <div className="flex flex-col gap-3">
            <div className="marker text-saffron mb-2">[ Hours ]</div>
            {site.hours.map((h) => (
              <div
                key={h.day}
                className="flex justify-between gap-4 border-b border-cream/10 pb-2.5 last:border-b-0"
              >
                <span className="font-serif italic">{h.day}</span>
                <span className="marker text-cream/75">{h.time}</span>
              </div>
            ))}
          </div>

          {/* Column 3 — Nav */}
          <div className="flex flex-col gap-3">
            <div className="marker text-saffron mb-2">[ Navigate ]</div>
            {[
              { href: "/", label: "Home" },
              { href: "/menu", label: "Menu" },
              { href: "/visit", label: "Visit" },
              { href: "/#story", label: "Story" },
              { href: "/#press", label: "Press" },
              { href: "/visit", label: "Hours" },
            ].map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                className="font-serif text-lg tracking-tight hover:text-saffron draw-under w-fit"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter + Socials */}
        <div className="grid md:grid-cols-12 gap-8 mt-16 pt-10 border-t border-cream/20">
          <form
            action="#"
            onSubmit={(e) => e.preventDefault()}
            className="md:col-span-7 flex flex-col gap-4"
          >
            <label className="marker text-saffron">
              [ Get a heads-up when a new burger drops ]
            </label>
            <div className="flex gap-2">
              <input
                type="email"
                required
                placeholder="your@email"
                aria-label="Email"
                className="flex-1 bg-transparent border border-cream/30 px-4 py-3 font-serif placeholder:text-cream/40 focus:border-saffron focus:outline-none"
              />
              <button
                type="submit"
                className="btn btn--ink !bg-saffron !text-ink hover:!bg-cream"
              >
                Join →
              </button>
            </div>
            <div className="marker text-cream/50">
              One email a month. We don&apos;t share. Unsubscribe with a click.
            </div>
          </form>

          <div className="md:col-span-5 md:text-right flex md:justify-end gap-5 items-end">
            <a href={site.instagram} className="marker hover:text-saffron">
              Instagram
            </a>
            <a href={site.yelp} className="marker hover:text-saffron">
              Yelp
            </a>
            <a href={site.mapsUrl} className="marker hover:text-saffron">
              Maps
            </a>
          </div>
        </div>

        {/* Bottom strap */}
        <div className="mt-16 md:mt-24 pt-6 border-t border-cream/15 marker text-cream/55 grid md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-4">
            © {year} {site.name}, Sausalito · All rights reserved.
          </div>
          <div className="md:col-span-4 md:text-center script italic text-2xl opacity-80 leading-none">
            Worth the bridge toll.
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link href="/" className="draw-under">Back to top ↑</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
