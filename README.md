# Tasty's Joint V2 — "Smoke & Sail"

A premium single-purpose website for **Tasty's Joint**, a smash-burger joint that opened in late 2024 at **43 Caledonia St, Sausalito, California**.

Built as an upsell demo to bring to the owner: "Here's what your site *could* be."

---

## The pitch (in one paragraph)

Two-tone editorial. Cream paper. Deep ink. Saffron rationed like the spice it gets its name from. A custom-drawn burger instead of a stock photograph. Honest Marin-voice copy — "worth the bridge toll", "we will never be a franchise." Six burgers on the homepage, no filler. All click-to-call on mobile. Walk-in-only language that's proud, not apologetic. Click-to-Maps with `tel:` links at every section.

---

## Tech stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (custom "Smoke & Sail" tokens) |
| Animations | GSAP + Framer Motion ready (CSS-keyframe-only at runtime — fast) |
| Smooth scroll | Lenis |
| Fonts | Anton, Inter, Fraunces (var.), JetBrains Mono |
| Image CDN | Unsplash direct-bucket URLs |

---

## How to run

```bash
npm install
npm run dev
# → http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

---

## Pages built

- `/` — Home (hero, menu index, craft, stats, story, gallery, reviews, visit, FAQ, CTA, footer)
- `/menu` — Full editorial menu, four sections, numbered
- `/visit` — Address + hours + directions + full-width map

All three pages are production-ready with proper metadata, JSON-LD, Open Graph tags, click-to-call, and click-to-Maps.

---

## What's placeholder vs. real

| Item | Status | Comment |
|------|--------|---------|
| Address, phone, hours | **Real (listed publicly)** | 43 Caledonia St, (415) 729-9328 |
| Menu items | Reasonable approximation | Should be cross-checked with the owner — easy edit in `data/site.ts` |
| Menu prices | Reasonable | Same — easy edit |
| Photos | Stock from Unsplash | Should be replaced with the actual kitchen photography before going live |
| Yelp + Instagram URLs | `href` placeholders | Owner to fill in |
| Maps embed | Live iframe, dark-filtered | Points at the real address |

---

## What's specific to this design

- **90/9/1 color rule.** Cream & ink dominate the page. Saffron carries the brand. Tomato red is rationed to single words (`much`, `but`, `burgers`, `worth`, `directly in footer heart`).
- **Anton** for the loud display type — tall, condensed, easy to render at 12rem.
- **Fraunces italic** for the handwritten "but/honest/quiet" pulls — gives it the magazine-cover warmth without AI-twee.
- **Numbered, staggered menu rows** — items read like an archive index, not a price list.
- **Custom cursor** — desktop only, expands over interactive elements via `mix-blend-mode: difference`.
- **No 3D, no scroll-jacking.** Smooth scroll via Lenis, all other motion is CSS-keyframe — fast & device-cheap.
- **Click-to-call first, click-to-Maps second.** Three mobile CTAs at the bottom of the screen.
- **Real JSON-LD restaurant schema** with hours, geo, aggregate rating & 5-star sheen for SEO.

---

## Files of note

```
app/
  layout.tsx       # Fonts, metadata, JSON-LD schema, Navbar, sticky mobile CTA
  globals.css      # Smoke & Sail tokens, primitives, selection, scrollbar
  page.tsx         # Home assembly
  menu/page.tsx    # Full menu
  visit/page.tsx   # Hours + address + map
components/
  Navbar           # Sticky (collapses on scroll), hamburger drawer
  Hero             # Oversized type, hand-drawn burger, parallax float
  Marquee          # Two strips, one reverse, two color variants
  FeaturedMenu     # 6 burgers, alternating offset grid, 01-06 numbering
  CraftSection     # Dark inverse paper, 4 pillars
  Stats            # Counter-on-scroll
  OurStory         # Editor's column with recipe-ticket mark
  Gallery          # Asymmetric photo collage
  Reviews          # One big quote + 2 stacked
  VisitSection     # Map + dark hours card
  FAQ              # Accordion
  CTASection       # Saffron paper, huge type
  Footer           # 3-column ink paper with newsletter + map stamp
  Preloader        # Black 1.5s sweep with prep counter
  Cursor           # Desktop-only dot that breathes to a ring
  GrainOverlay     # SVG fractal noise at 0.45, mix-blend multiply
  SmoothScroll     # Lenis provider
data/site.ts       # Single source of truth — address, menu, FAQs, reviews
tailwind.config.ts # Tokens for the 90/9/1 palette + Fraunces variation axes
```

---

## Licenses

Photos: Unsplash (free use). Typefaces: Google Fonts (Open Font License).
