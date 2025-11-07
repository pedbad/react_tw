import { useEffect, useState } from 'react'
import './index.css'

const steps = [
  { id: 1, title: 'Define product goals', status: 'Ready' },
  { id: 2, title: 'Connect data sources', status: 'In Review' },
  { id: 3, title: 'Ship beta cohort', status: 'Blocked' },
]

const buttonShowcase = [
  { label: 'Primary', classes: 'btn btn-md btn-primary-solid' },
  { label: 'Secondary', classes: 'btn btn-md btn-secondary-outline' },
  { label: 'Tertiary', classes: 'btn btn-md btn-tertiary-ghost' },
  { label: 'Disabled', classes: 'btn btn-md btn-primary-solid disabled:opacity-60', disabled: true },
]

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return (
    <main className="min-h-screen bg-surface-base px-4 py-12 transition-color">
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <header className="space-y-5 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="badge badge-primary">Design system</span>
            <span className="badge badge-tertiary">Preview</span>
          </div>
          <h1 className="heading-lg">Reusable foundations for React + Tailwind</h1>
          <p className="body-lg max-w-3xl mx-auto">
            Tokens, components, and utilities are wired together with CSS variables so light and dark
            modes stay in sync. Mix classes such as <code className="font-mono text-sm">card</code>,
            <code className="font-mono text-sm">btn-primary-solid</code>, and
            <code className="font-mono text-sm">heading-md</code> to compose polished experiences in
            minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              className="btn btn-sm btn-primary-outline"
              onClick={() => setIsDark((value) => !value)}
            >
              Toggle {isDark ? 'Light' : 'Dark'} mode
            </button>
            <a className="link" href="https://tailwindcss.com/docs" target="_blank" rel="noreferrer">
              Explore Tailwind docs
            </a>
            <a className="link-secondary" href="https://react.dev" target="_blank" rel="noreferrer">
              React best practices
            </a>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[1.3fr,0.7fr]">
          <article className="card card-elevated">
            <div className="card-header">
              <span className="caption text-text-tertiary">Project kickoff</span>
              <h2 className="heading-md">Marketing site redesign</h2>
              <p className="body">
                Buttons, inputs, typography, and list treatments below all rely on the design-system
                classes you can reuse throughout the product.
              </p>
            </div>

            <div className="card-body space-y-6">
              <div className="list">
                {steps.map((step) => (
                  <div key={step.id} className="list-item">
                    <span className="list-item-icon font-mono text-sm">{step.id.toString().padStart(2, '0')}</span>
                    <div className="flex-1">
                      <p className="body font-semibold text-text-primary">{step.title}</p>
                      <p className="body-sm">Status: {step.status}</p>
                    </div>
                    <span
                      className={`badge ${
                        step.status === 'Ready'
                          ? 'badge-primary'
                          : step.status === 'In Review'
                            ? 'badge-secondary'
                            : 'badge-tertiary'
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                ))}
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="project-name" className="body-sm text-text-secondary">
                    Project name
                  </label>
                  <input id="project-name" placeholder="Peak launch campaign" className="input input-lg" />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="owner" className="body-sm text-text-secondary">
                      Owner
                    </label>
                    <input id="owner" placeholder="Add teammate" className="input input-sm" />
                  </div>
                  <div>
                    <label htmlFor="budget" className="body-sm text-text-secondary">
                      Budget
                    </label>
                    <input id="budget" placeholder="$25,000" className="input input-sm" />
                  </div>
                </div>
              </form>
            </div>

            <div className="card-footer">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge badge-secondary">Draft</span>
                <span className="badge badge-tertiary">Marketing</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <button type="button" className="btn btn-sm btn-secondary-ghost">
                  Discard
                </button>
                <button type="button" className="btn btn-sm btn-primary-solid">
                  Publish
                </button>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="card">
              <div className="card-header">
                <span className="caption text-text-tertiary">Buttons</span>
                <h3 className="heading-sm">Variants & sizes</h3>
              </div>
              <div className="card-body space-y-4">
                <div className="flex flex-wrap gap-3">
                  <button className="btn btn-xs btn-primary-solid">XS Solid</button>
                  <button className="btn btn-sm btn-primary-outline">SM Outline</button>
                  <button className="btn btn-md btn-primary-ghost">MD Ghost</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <button className="btn btn-lg btn-secondary-solid">LG Secondary</button>
                  <button className="btn btn-xl btn-tertiary-outline">XL Tertiary</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {buttonShowcase.map((button) => (
                    <button key={button.label} className={button.classes} disabled={button.disabled}>
                      {button.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <span className="caption text-text-tertiary">Typography</span>
                <h3 className="heading-sm">Scale tokens</h3>
              </div>
              <div className="card-body space-y-3">
                <p className="heading-xs">heading-xs · Brand voice</p>
                <p className="body">body · Use this class for paragraphs and product copy.</p>
                <p className="body-sm">body-sm · Secondary text and helper copy.</p>
                <p className="caption">caption · Labels, pill text, or subtle metadata.</p>
                <div className="flex flex-col gap-2 rounded-2xl bg-surface-elevated p-4">
                  <ol className="list-ordered">
                    <li className="list-ordered-item">List styles inherit typography tokens.</li>
                    <li className="list-ordered-item">Use unordered variants when needed.</li>
                  </ol>
                  <ul className="list-unordered">
                    <li className="list-unordered-item">Tokens keep spacing consistent.</li>
                    <li className="list-unordered-item">Apply utilities for layout needs.</li>
                  </ul>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default App
