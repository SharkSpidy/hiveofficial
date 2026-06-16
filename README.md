# HIVE — Build. Break. Repeat.

A modernized single-page rebuild of the HIVE student community site.
Vite + React 19 + TypeScript + Tailwind CSS + Framer Motion.

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks then builds to /dist
npm run preview  # preview the production build
```

## Structure

```
src/
  types/index.ts        Shared TS interfaces (NavLink, AboutFeature, Offering, SocialLink)
  data/content.ts        Typed content arrays consumed by the sections
  components/
    Navbar.tsx            Sticky glassmorphism header + mobile menu
    Hero.tsx               Kinetic headline, honeycomb backdrop, magnetic CTA
    HexGrid.tsx             Decorative animated honeycomb SVG background
    MagneticButton.tsx     Reusable cursor-following glowing CTA
    About.tsx               Mission section + 4-card feature grid
    Offerings.tsx            "Level Up" section with 3D tilt cards
    Footer.tsx                Minimal footer with animated social links
    SocialIcons.tsx           Local, dependency-free brand glyphs
  App.tsx, main.tsx, index.css
```
