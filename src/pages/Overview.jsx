import { Icon } from '../icons'

const steps = [
  { id: 1, title: 'Outline course structure', status: 'Ready' },
  { id: 2, title: 'Record instructor videos', status: 'In Review' },
  { id: 3, title: 'Publish learner resources', status: 'Blocked' },
]

const buttonShowcase = [
  { label: 'Primary', classes: 'btn btn-md btn-primary-solid' },
  { label: 'Secondary', classes: 'btn btn-md btn-secondary-outline' },
  { label: 'Tertiary', classes: 'btn btn-md btn-tertiary-ghost' },
  { label: 'Disabled', classes: 'btn btn-md btn-primary-solid disabled:opacity-60', disabled: true },
]

function Overview() {
  return (
    <>
      <header className="space-y-5 text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="badge badge-primary">eLearning site demo</span>
          <span className="badge badge-tertiary">Design system</span>
        </div>
        <h1 className="heading-lg">Reusable foundations for your learning platform</h1>
        <p className="body-lg mx-auto max-w-3xl">
          Tokens, components, and utilities stay in sync across light and dark themes thanks to CSS variables. Pair
          classes like <code className="font-mono text-sm">card</code>,{' '}
          <code className="font-mono text-sm">btn-primary-solid</code>, and{' '}
          <code className="font-mono text-sm">heading-md</code> to ship polished cohort experiences fast.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.3fr,0.7fr]">
        <article className="card card-elevated">
          <div className="card-header">
            <span className="caption text-text-tertiary">Course kickoff</span>
            <h2 className="heading-md">eLearning site demo</h2>
            <p className="body">
              Buttons, inputs, typography, and list treatments below all rely on the design-system classes you can reuse
              throughout the platform.
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
                <label htmlFor="course-name" className="body-sm text-text-secondary">
                  Course name
                </label>
                <input id="course-name" placeholder="Intro to Product Analytics" className="input input-lg" />
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="instructor" className="body-sm text-text-secondary">
                    Instructor
                  </label>
                  <input id="instructor" placeholder="Add teammate" className="input input-sm" />
                </div>
                <div>
                  <label htmlFor="enrollment" className="body-sm text-text-secondary">
                    Enrollment goal
                  </label>
                  <input id="enrollment" placeholder="1,200 learners" className="input input-sm" />
                </div>
              </div>
            </form>
          </div>

          <div className="card-footer">
            <div className="flex flex-wrap items-center gap-2">
              <span className="badge badge-secondary">Draft</span>
              <span className="badge badge-tertiary">Curriculum</span>
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
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-md btn-primary-solid">
                  <Icon name="arrowUp" className="h-5 w-5" />
                  Back to top
                </button>
                <button className="btn btn-icon btn-primary-outline" aria-label="Back to top">
                  <Icon name="arrowUp" />
                </button>
              </div>
              <div className="divider" aria-hidden="true" />
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-md btn-primary-solid btn-square">
                  Square primary
                </button>
                <button className="btn btn-md btn-secondary-solid btn-square">
                  Square secondary
                </button>
                <button className="btn btn-md btn-tertiary-solid btn-square">
                  Square tertiary
                </button>
                <button className="btn btn-sm btn-primary-outline btn-square-sm">Outline square</button>
                <button className="btn btn-sm btn-secondary-outline btn-square-sm">Gray outline</button>
                <button className="btn btn-sm btn-tertiary-outline btn-square-sm">Lavender outline</button>
                <button className="btn btn-icon btn-primary-solid btn-square-sm" aria-label="Square icon button">
                  <Icon name="arrowUp" />
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <span className="caption text-text-tertiary">Typography</span>
              <h3 className="heading-sm">Scale tokens</h3>
            </div>
            <div className="card-body space-y-3">
              <p className="heading-xs">heading-xs · Lesson title</p>
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
    </>
  )
}

export default Overview
