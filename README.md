# React + Tailwind Baby Steps

Tiny React 18 + Vite 4 starter that now doubles as a reusable Tailwind CSS design system.  
Tokens, components, and utilities are powered by CSS variables so light/dark theming stays in sync.

## What’s Included

- **Design tokens** – RGB-based palettes for primary/secondary/tertiary colors, surface layers, text, and borders (see `tailwind.config.js` + `src/index.css`).
- **Typography scale** – heading/body classes mapped to custom font stacks (`--font-sans`, `--font-heading`, `--font-mono`).
- **Component primitives** – buttons (5 sizes × 3 variants × 3 color families), inputs, cards, badges, lists, and link treatments wired via `@apply`.
- **Utility helpers** – transition helpers plus sensible focus-ring defaults for accessible interactions.
- **Example screen** – `src/App.jsx` demonstrates real usage with cards, forms, badges, and a dark-mode toggle.

## Prerequisites

- Node.js ≥ 16 (this project was built on v16.15.1)
- npm ≥ 8

## Build It in Baby Steps

1. **Scaffold the project**
   ```bash
   npm create vite@latest react-tw -- --template react
   ```
2. **Install the default dependencies**
   ```bash
   cd react-tw
   npm install
   ```
3. **Add Tailwind and its build helpers**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   ```
4. **Generate the Tailwind and PostCSS configs**
   ```bash
   npx tailwindcss init -p
   ```
5. **Point Tailwind at your files** – edit `tailwind.config.js` so it looks like:
   ```js
   export default {
     content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
     theme: { extend: {} },
     plugins: [],
   }
   ```
6. **Reset the global stylesheet** – replace `src/index.css` with:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
7. **Build UI with Tailwind utilities** – replace `src/App.jsx` with any component tree that uses the design system classes (the repo includes a demo dashboard view already).
   ```jsx
   export default function App() {
     return <main className="min-h-screen bg-surface-base text-text-primary">...</main>
   }
   ```
8. **Run the dev server**
   ```bash
   npm run dev
   ```
9. **Optional: validate a production build**
   ```bash
   npm run build
   npm run preview
   ```

## Available npm Scripts

- `npm run dev` – start Vite in development mode with hot reloading.
- `npm run build` – create the production bundle in `dist/`.
- `npm run preview` – preview the production build locally.
- `npm run lint` – run ESLint with the shared config.

## Project Status

- ✅ React 18 + Vite scaffolded.
- ✅ Tailwind CSS wired into the build pipeline.
- ✅ Comprehensive design system tokens + components added.
- ✅ Demo experience (`src/App.jsx`) exercises all major classes and includes dark-mode support.
