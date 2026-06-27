"use client";

import { useEffect, useState } from "react";

/**
 * A reusable page-wide paper-grain overlay.
 * Mix-blends with whatever's underneath, so it shows on cream backgrounds
 * and barely registers on dark sections.
 */
export default function GrainOverlay() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 60,
        opacity: 0.45,
        mixBlendMode: "multiply",
        backgroundImage:
          "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 220 220' xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
      }}
    />
  );
}
