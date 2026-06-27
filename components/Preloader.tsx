"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [clip, setClip] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDone(true);
      return;
    }
    let n = 0;
    const tick = setInterval(() => {
      n = Math.min(n + Math.floor(Math.random() * 8) + 2, 100);
      setCount(n);
    }, 60);
    const t1 = setTimeout(() => setClip(100), 900);
    const t2 = setTimeout(() => setDone(true), 1500);
    return () => {
      clearInterval(tick);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (done) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 90,
        background: "#111111",
        color: "#F4EFE6",
        clipPath: `inset(0 ${100 - clip}% 0 0)`,
        transition: "clip-path 700ms cubic-bezier(0.86, 0, 0.07, 1)",
      }}
    >
      <div className="container-x h-full flex">
        <div className="m-auto grid grid-cols-2 gap-12 items-end w-full pb-12">
          <div>
            <div className="marker" style={{ color: "#D4A537", letterSpacing: "0.4em" }}>              [ TASTY&apos;S JOINT • SAUSALITO ] 
            </div>
            <div className="display mt-3" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", lineHeight: 0.86 }}>
              WARMING<br />THE GRIDDLE.
            </div>
          </div>
          <div className="hidden md:flex flex-col items-end gap-2">
            <div className="marker" style={{ color: "#F4EFE6", opacity: 0.55 }}>
              prep / {count}%
            </div>
            <div className="display" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
              {String(count).padStart(3, "0")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
