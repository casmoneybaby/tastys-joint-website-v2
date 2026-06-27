"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [touch, setTouch] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    setTouch(isTouch);
    if (isTouch) return;

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return setHover(false);
      const interactive = target.closest(
        "a, button, [data-cursor], input, textarea, select, [role='button']"
      );
      setHover(Boolean(interactive));
    };
    window.addEventListener("mouseover", over);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (touch) return null;

  return (
    <div
      aria-hidden
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 100,
        transform: `translate(${pos.x - (hover ? 22 : 8)}px, ${pos.y - (hover ? 22 : 8)}px)`,
        transition: "transform 90ms cubic-bezier(0.22, 1, 0.36, 1), width 200ms ease, height 200ms ease, background 200ms ease, border-color 200ms ease",
        width: hover ? 44 : 16,
        height: hover ? 44 : 16,
        background: hover ? "transparent" : "#111111",
        border: hover ? "1px solid #111111" : "none",
        mixBlendMode: "difference",
        borderRadius: 999,
      }}
    />
  );
}
