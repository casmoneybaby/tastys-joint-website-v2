"use client";

import Link from "next/link";
import { site } from "@/data/site";

export default function StickyMobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-ink/15 bg-cream/95 backdrop-blur-md">
      <div className="grid grid-cols-3">
        <a
          href={`tel:${site.phoneRaw}`}
          className="flex flex-col items-center justify-center py-3.5 active:bg-ink active:text-cream"
          aria-label="Call"
        >
          <span className="text-xl leading-none" aria-hidden>☎</span>
          <span className="marker text-[0.55rem] mt-1.5">Call</span>
        </a>
        <Link
          href="/menu"
          className="flex flex-col items-center justify-center py-3.5 border-l border-r border-ink/10 active:bg-tomato active:text-cream"
        >
          <span className="text-xl leading-none" aria-hidden>≡</span>
          <span className="marker text-[0.55rem] mt-1.5">Menu</span>
        </Link>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center justify-center py-3.5 active:bg-ink active:text-cream"
          aria-label="Directions"
        >
          <span className="text-xl leading-none" aria-hidden>↗</span>
          <span className="marker text-[0.55rem] mt-1.5">Find Us</span>
        </a>
      </div>
    </div>
  );
}
