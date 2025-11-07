# React + Tailwind Baby Steps

Tiny React 18 + Vite 4 starter that is intentionally simple and fully styled with Tailwind CSS.  
The notes below capture every command I ran so you can reproduce the setup locally or on a fresh machine.

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
7. **Build a simple UI with Tailwind utilities** – the sample `src/App.jsx` renders a checklist of the steps above:
   ```jsx
   const steps = [/* ... */]
   export default function App() {
     return (
       <main className="min-h-screen bg-slate-950 text-slate-100">
         {/* content omitted for brevity; see src/App.jsx */}
       </main>
     )
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
- ✅ Minimal demo UI living in `src/App.jsx`.
