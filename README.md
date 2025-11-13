# React + Tailwind Baby Steps

![React version](https://img.shields.io/badge/React-18.3.1-61dafb?logo=react&logoColor=white)
![Tailwind version](https://img.shields.io/badge/Tailwind-3.4.13-38bdf8?logo=tailwind-css&logoColor=white)
![Catalyst demo](https://img.shields.io/badge/Catalyst-demo-6366f1?logo=react&logoColor=white)

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

## Catalyst Showcase

The project now ships with a dedicated Catalyst demo page (`/catalyst`) that highlights modular UX patterns:

- Modular folder (`src/catalyst/`) containing reusable components, sections, and data mocks.
- Hero, responsive navigation (with dropdown), accordion primer, KPI grid, signals panel, workflow builder, productivity tools, data views, micro-interactions, and various tabbed demos.
- Embedded UX flourishes: tooltips, alerts, modal, icon playground, theme switch, palette badges, responsive dropdowns, gradient icon hovers, auto-open accordions, and back-to-top triggers.
- Axe-based accessibility reporter (`src/a11y/AxeReporter.jsx`) that runs in development to surface contrast + WAVE-type violations across routes.

## DaisyUI Showcase

Visit `/daisy` to see every DaisyUI component rendered with our tokens. Because DaisyUI is installed as a Tailwind plugin (`tailwind.config.js`), you only need to compose the provided classes—no custom CSS required. The page lives in `src/daisy/` and demonstrates drawers, modals, mockups, accordions, navbars, forms, and feedback components pulled straight from [daisyui.com/components](https://daisyui.com/components/).

## shadcn/ui Showcase

The `/shadcn` route hosts examples copied from [shadcn/ui](https://ui.shadcn.com/). Each component is just a React file with Tailwind class strings, so you own the markup/styles. The folder `src/shadcn/` mirrors shadcn’s sectioned approach (interactions, forms, data, feedback) and shows how to blend their headless components with our shared tokens and `.ds-scope` styles.

## Directory Guide

```
/
├─ public/                # Static assets served by Vite (favicons, OG images, etc.)
├─ src/
│  ├─ a11y/               # Dev-only accessibility helpers (axe-core reporter)
│  ├─ catalyst/           # Catalyst demo (bespoke components, sections, hooks, data)
│  ├─ daisy/              # DaisyUI showcase (sections composed from plugin classes)
│  ├─ shadcn/             # shadcn/ui showcase (copied components + Tailwind class strings)
│  ├─ components/         # Shared app chrome (layout, nav)
│  ├─ icons/              # SVG icon registry + Icon helper
│  ├─ pages/              # Route-level screens (Overview, Components gallery, Animations)
│  ├─ index.css           # Tailwind layers, tokens, and component utilities (Catalyst styles under .ds-scope)
│  ├─ main.jsx            # App bootstrap (React + Router + Tailwind)
│  └─ App.jsx             # Router config, dark-mode state, and route wiring for Catalyst/Daisy/shadcn
├─ tailwind.config.js     # Tailwind theme extensions (tokens → CSS vars)
├─ postcss.config.js      # PostCSS + Tailwind pipeline
├─ vite.config.js         # Vite build setup with React plugin
└─ package.json           # Scripts and dependency manifest
```

## Comparing Catalyst, DaisyUI, and shadcn/ui

The repo now includes **three** different Tailwind-powered UI experiences so newcomers can see how the same React + Tailwind foundation can skin products in very different ways.

| Route | Folder | Philosophy | Use this when… |
| --- | --- | --- | --- |
| `/catalyst` | `src/catalyst/` | Hand-crafted design system baked into `src/index.css` using `@layer components` + CSS variables. | You want total control, one source of truth for tokens, and custom React components. |
| `/daisy` | `src/daisy/` | DaisyUI plugin generates hundreds of utility classes; our page just composes them. | You need quick scaffolding + theme switching without writing your own component CSS. |
| `/shadcn` | `src/shadcn/` | Copy‑pasted shadcn/ui patterns (Radix behaviors + Tailwind class strings) that you own. | You prefer headless, customizable React components without depending on an external CSS bundle. |

### How to experiment

1. **Start the dev server** (`npm run dev`) and visit each route via the header navigation (Catalyst, Daisy, shadcn/ui).
2. **Inspect classes** in DevTools:
   - Catalyst components use project-specific classes such as `.btn-primary-solid`. Those live under `.ds-scope` in `src/index.css`.
   - DaisyUI components use plugin classes like `.btn`, `.navbar`, `.tabs`. They come straight from the DaisyUI plugin you see registered in `tailwind.config.js`.
   - shadcn/ui components use long Tailwind class strings on standard HTML elements. They rely on your Tailwind config + tokens—you can edit them directly.
3. **Tweak tokens** in `tailwind.config.js` (color names, fonts, spacing) or CSS variables in `src/index.css`. Re-run `npm run dev` and watch all three frameworks update together.
4. **Mix & match**: drop a Daisy snippet into a Catalyst section, or reuse a shadcn accordion inside a Catalyst card. Because everything is just Tailwind utilities, they coexist as soon as you manage scope (we wrap Catalyst styles inside `.ds-scope` so Daisy/shadcn pages stay untouched).

### Tailwind strengths on display

- **Single source of tokens** – Colors, typography, and spacing live in `tailwind.config.js` + CSS variables. Every framework demo reads from those values, so dark mode and theming stay aligned.
- **Scoped overrides** – Our custom design system styles are wrapped in `.ds-scope`, proving that you can introduce opinionated component classes without breaking third-party utility plugins.
- **Plugin ecosystem** – DaisyUI shows how dropping a Tailwind plugin instantly gives you themed buttons, drawers, navbars, etc. without touching CSS.
- **Component blueprints** – shadcn/ui demonstrates the “copy/paste and own it” workflow: everything is just React + Tailwind classes, so it’s easy to customize or split apart.
- **Headless + composable** – Catalyst vs. shadcn illustrates two ends of the spectrum: Catalyst is fully bespoke, shadcn is headless but prebuilt. Tailwind supports both seamlessly.

If you’re new to Tailwind:

1. Start in `/daisy` to understand how plugins expose ready-made components.
2. Move to `/shadcn` to see how Tailwind class strings build higher-level UI without extra CSS.
3. Dive into `/catalyst` to learn how to craft your own design system with `@layer` and `@apply`.

Each page lives in its own folder, so you can delete the ones you don’t need or use them as jump-start kits for your next React + Tailwind project.

## Framework Cheat Sheet

| Framework | Location | Styling ownership | Pros | Considerations | Quick start |
| --- | --- | --- | --- | --- | --- |
| **Catalyst** | `src/catalyst/` + `src/index.css` | 100% custom—`@layer components` defines every button, card, accordion, etc. | Total control, single source of truth, design tokens baked in, no external dependency. | More upfront work; you’re responsible for accessibility and maintenance. | Copy/paste Catalyst sections into your app or keep the `.ds-scope` styles and reuse the primitives. |
| **DaisyUI** | `src/daisy/` + `tailwind.config.js` plugin | Plugin-generated classes (`.btn`, `.navbar`, etc.) with optional themes. | Fastest way to scaffold UI, tons of components, theme switching, minimal CSS. | Class names are opinionated; overriding styles requires understanding plugin output. | Install `daisyui`, enable in `tailwind.config.js`, then drop snippets from https://daisyui.com/components/. |
| **shadcn/ui** | `src/shadcn/` | Tailwind class strings on standard elements; behavior from Radix primitives, styles are yours. | Copy/paste ownership, accessible headless components, easy to customize per component. | You manage updates manually; long class strings can get verbose. | Use the shadcn CLI or copy code from https://ui.shadcn.com/, then tweak Tailwind classes/tokens to match your brand. |

## Why Tailwind instead of handwritten CSS?

Tailwind keeps gaining traction because it lets teams ship faster without losing control:

- **Token-driven design** – Define colors, spacing, fonts once in `tailwind.config.js` and reuse them everywhere. Our Catalyst/Daisy/shadcn demos all inherit the same palette automatically.
- **No class naming overhead** – Utilities remove the need for BEM/block naming, so you can focus on the component rather than inventing CSS class conventions.
- **Theming + variants for free** – Dark mode, DaisyUI themes, or CSS variables for Catalyst are just data; Tailwind wires the variants so style changes ripple through instantly.
- **Tooling ecosystem** – JIT compilation, IntelliSense, class sorting, Prettier plugins, and community components (DaisyUI, shadcn/ui) mean you spend more time on UX and less on boilerplate.
- **Composable with custom CSS** – You can still write bespoke rules (`src/index.css`), scope them (our `.ds-scope` wrapper), or layer plugins. Tailwind doesn’t lock you in—it just accelerates the common cases.

In short, Tailwind gives React teams the speed of utility classes plus the structure of a design system, which is why it’s becoming the default for skinning apps like this one.
