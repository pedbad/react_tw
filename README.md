# React + Tailwind Baby Steps

![React version](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react&logoColor=white)
![Tailwind version](https://img.shields.io/badge/Tailwind-3.4.13-38bdf8?logo=tailwind-css&logoColor=white)

Tiny React 18 + Vite 4 starter that now doubles as a reusable Tailwind CSS design system.  
Tokens, components, and utilities are powered by CSS variables so light/dark theming stays in sync.

## What’s Included

- **Design tokens** – RGB-based palettes for primary/secondary/tertiary colors, surface layers, text, and borders (see `tailwind.config.js` + `src/index.css`).
- **Typography scale** – heading/body classes mapped to custom font stacks (`--font-sans`, `--font-heading`, `--font-mono`).
- **Component primitives** – buttons (5 sizes × 3 variants × 3 color families), inputs, cards, badges, lists, and link treatments wired via `@apply`.
- **Demo screens** – overview dashboard plus a components gallery (with headings, lists, accordions, nav patterns) accessible via the sticky top navigation.
- **Utility helpers** – transition helpers plus sensible focus-ring defaults for accessible interactions.
- **Example screen** – `src/App.jsx` demonstrates real usage with cards, forms, badges, and a dark-mode toggle.

## Prerequisites

- Node.js ≥ 16 (built with v16.15.1)
- npm ≥ 8

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the dev server**
   ```bash
   npm run dev
   ```
3. **Build for production**
   ```bash
   npm run build
   ```
4. **Preview the production bundle**
   ```bash
   npm run preview
   ```

## Available npm Scripts

- `npm run dev` – start Vite in development mode with hot reloading.
- `npm run build` – create the production bundle in `dist/`.
- `npm run preview` – preview the production build locally.
- `npm run lint` – run ESLint with the shared config.

## Feature Highlights

- Sticky layout with dark-mode toggle and multi-page routing (Overview, Components, Animations).
- Tailwind-powered design system: typography scale, button families, inputs, cards, badges, lists, and utilities defined via `@layer components`.
- Shared SVG icon registry (`src/icons/`) plus `<Icon />` helper for embedding Material-inspired icons.
- Button playground with size/variant/icon demos, square button variants, and icon-only buttons.
- Toast notifications with icon library integration and transparent icon treatments.
- Audio player & mini player mockups with Tailwind transitions.
- Components gallery: typography, lists, navigation, numbered pills, accordions, card patterns, inputs.
- Animations page showcasing tilt, fade, zoom, slide, glow, flip, blur, pulse—and additional 3D hover interactions across 20 cards.
