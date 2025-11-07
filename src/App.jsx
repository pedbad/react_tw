const steps = [
  {
    id: 1,
    title: 'Scaffold the project',
    command: 'npm create vite@latest react-tw -- --template react',
  },
  {
    id: 2,
    title: 'Install dependencies',
    command: 'cd react-tw && npm install',
  },
  {
    id: 3,
    title: 'Add Tailwind CSS',
    command: 'npm install -D tailwindcss postcss autoprefixer',
  },
  {
    id: 4,
    title: 'Generate configs',
    command: 'npx tailwindcss init -p',
  },
  {
    id: 5,
    title: 'Start building',
    command: 'npm run dev',
  },
]

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-4 py-16">
        <header className="space-y-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35rem] text-emerald-300">
            React + Tailwind
          </p>
          <h1 className="text-3xl font-semibold text-white md:text-4xl">
            Build a simple UI fast with utility classes
          </h1>
          <p className="text-base text-slate-300 md:text-lg">
            Follow the tiny checklist below to spin up a working React + Tailwind playground in
            minutes. Each step mirrors the setup documented in the repository README.
          </p>
        </header>

        <section className="space-y-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-black/40 backdrop-blur">
          {steps.map((step) => (
            <article
              key={step.id}
              className="flex flex-col gap-1 rounded-xl border border-white/5 bg-slate-900/40 p-4 transition hover:border-emerald-300/50"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                  Step {step.id}
                </span>
                <span className="text-sm font-medium text-emerald-300">{step.title}</span>
              </div>
              <code className="mt-2 rounded-lg bg-black/40 px-3 py-2 font-mono text-sm text-emerald-100">
                {step.command}
              </code>
            </article>
          ))}
        </section>

        <footer className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-slate-400">
            Once Tailwind is wired up, start the dev server and drop components wherever you like.
          </p>
          <a
            href="https://tailwindcss.com/docs"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-400/30 transition hover:bg-emerald-300"
          >
            Browse Tailwind docs
          </a>
        </footer>
      </div>
    </main>
  )
}

export default App
