import type { Config } from "tailwindcss";

/**
 * TASTY'S JOINT V2 — "Smoke & Sail" palette
 * 90/9/1 rule: cream & ink dominate, saffron accents, tomato red whispers.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paper & ink — the loud "two-tone" base
        cream: "#F4EFE6",
        "cream-2": "#EBE3D4",
        ink: "#111111",
        "ink-2": "#1A1A1A",
        ash: "#7A756C",
        line: "#D9D2C2",

        // Accents — rationed like saffron threads in a broth
        saffron: "#D4A537",
        "saffron-deep": "#A87E1F",
        tomato: "#C8392E",
        "tomato-deep": "#9F2B22",
        smoke: "#2A2118",

        // Old Marin nautical palette (for section variety)
        fog: "#B7B0A4",
        driftwood: "#5C4B36",
        bay: "#1F3A4A",
      },
      fontFamily: {
        display: ["var(--font-anton)", "Impact", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        ultra: "0.3em",
        mega: "0.45em",
        crunch: "-0.02em",
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        crisp: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        blink: "blink 1.05s steps(2) infinite",
        flicker: "flicker 3.2s linear infinite",
        smoke: "smoke 9s ease-in-out infinite",
        shake: "shake 0.45s ease-in-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.95" },
          "52%": { opacity: "0.7" },
          "60%": { opacity: "0.95" },
          "72%": { opacity: "0.82" },
        },
        smoke: {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.0" },
          "15%": { opacity: "0.35" },
          "100%": { transform: "translateY(-300px) scale(1.6)", opacity: "0" },
        },
        shake: {
          "0%, 100%": { transform: "translate(0,0) rotate(0deg)" },
          "20%": { transform: "translate(-1px, 1px) rotate(-0.6deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(0.6deg)" },
          "60%": { transform: "translate(-1px, 1px) rotate(-0.3deg)" },
          "80%": { transform: "translate(1px, 1px) rotate(0.3deg)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
