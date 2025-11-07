import { useState } from 'react'

const accordionItems = [
  {
    id: 1,
    title: 'Curriculum cards',
    content:
      'Cards use the shared surface + border tokens. Mix `card`, `card-header`, `card-body`, and `card-footer` for consistent spacing.',
  },
  {
    id: 2,
    title: 'Navigation patterns',
    content:
      'Use `.pill-nav` for course filters or to highlight active syllabus content with `.pill-nav-item-active`.',
  },
  {
    id: 3,
    title: 'Forms & inputs',
    content:
      'Inputs share focus rings with buttons. Combine `.input`, `.input-sm`, and `.input-lg` depending on the density you need.',
  },
]

const headings = [
  { tag: 'h1', className: 'heading-xl', text: 'Heading 1 · Hero headline' },
  { tag: 'h2', className: 'heading-lg', text: 'Heading 2 · Section title' },
  { tag: 'h3', className: 'heading-md', text: 'Heading 3 · Module title' },
  { tag: 'h4', className: 'heading-sm', text: 'Heading 4 · Lesson headline' },
  { tag: 'h5', className: 'heading-xs', text: 'Heading 5 · Sub heading' },
  { tag: 'h6', className: 'caption', text: 'Heading 6 · Caption scale' },
]

const navPills = ['Overview', 'Modules', 'Resources', 'Community']

const fontTabs = [
  { id: 'sans', label: 'Sans', className: 'font-sans', description: 'Inter — core UI body copy.' },
  { id: 'heading', label: 'Heading', className: 'font-heading', description: 'Space Grotesk — hero & titles.' },
  { id: 'mono', label: 'Mono', className: 'font-mono', description: 'JetBrains Mono — code snippets.' },
]

const toastItems = [
  {
    id: 'info',
    title: 'Course reminder',
    message: 'Analytics 101 drops a new lesson tomorrow at 9am.',
    icon: 'ℹ️',
    className: 'toast-info',
  },
  {
    id: 'success',
    title: 'Module published',
    message: '“Building dashboards” is now live for all learners.',
    icon: '✅',
    className: 'toast-success',
  },
  {
    id: 'warning',
    title: 'Action required',
    message: 'Upload captions for Lesson 3 to stay compliant.',
    icon: '⚠️',
    className: 'toast-warning',
  },
  {
    id: 'danger',
    title: 'Payment failed',
    message: 'Learner subscription for DevOps cohort could not be renewed.',
    icon: '⛔',
    className: 'toast-danger',
  },
]

const paletteGroups = [
  {
    title: 'Primary palette',
    colors: [
      { label: 'primary-50', className: 'bg-primary-50' },
      { label: 'primary-100', className: 'bg-primary-100' },
      { label: 'primary-200', className: 'bg-primary-200' },
      { label: 'primary-300', className: 'bg-primary-300' },
      { label: 'primary-400', className: 'bg-primary-400' },
    ],
  },
  {
    title: 'Secondary palette',
    colors: [
      { label: 'secondary-50', className: 'bg-secondary-50' },
      { label: 'secondary-100', className: 'bg-secondary-100' },
      { label: 'secondary-200', className: 'bg-secondary-200' },
      { label: 'secondary-300', className: 'bg-secondary-300' },
      { label: 'secondary-400', className: 'bg-secondary-400' },
    ],
  },
  {
    title: 'Tertiary palette',
    colors: [
      { label: 'tertiary-50', className: 'bg-tertiary-50' },
      { label: 'tertiary-100', className: 'bg-tertiary-100' },
      { label: 'tertiary-200', className: 'bg-tertiary-200' },
      { label: 'tertiary-300', className: 'bg-tertiary-300' },
      { label: 'tertiary-400', className: 'bg-tertiary-400' },
    ],
  },
  {
    title: 'Surfaces',
    colors: [
      { label: 'surface-base', className: 'bg-surface-base' },
      { label: 'surface-elevated', className: 'bg-surface-elevated' },
      { label: 'surface-overlay', className: 'bg-surface-overlay' },
    ],
  },
  {
    title: 'Text & borders',
    colors: [
      { label: 'text-primary', className: 'bg-text-primary' },
      { label: 'text-secondary', className: 'bg-text-secondary' },
      { label: 'text-tertiary', className: 'bg-text-tertiary' },
      { label: 'text-disabled', className: 'bg-text-disabled' },
      { label: 'border-default', className: 'bg-border-default' },
      { label: 'border-strong', className: 'bg-border-strong' },
    ],
  },
]

function ComponentsDemo() {
  const [openItem, setOpenItem] = useState(accordionItems[0].id)
  const [activeFontTab, setActiveFontTab] = useState(fontTabs[0].id)
  const activeFont = fontTabs.find((tab) => tab.id === activeFontTab)

  return (
    <div className="space-y-8">
      <section className="card">
        <div className="card-header">
          <span className="caption text-text-tertiary">Color system</span>
          <h2 className="heading-sm">Palette pills (light & dark)</h2>
        </div>
        <div className="card-body space-y-5">
          {paletteGroups.map((group) => (
            <div key={group.title} className="space-y-2">
              <p className="caption uppercase tracking-wide text-text-secondary">{group.title}</p>
              <div className="color-palette-row">
                {group.colors.map((color) => (
                  <div key={color.label} className="color-palette-item">
                    <span className={`color-pill ${color.className}`} />
                    <span className="color-pill-label">{color.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <span className="caption text-text-tertiary">Feedback</span>
          <h2 className="heading-sm">Toast notifications</h2>
        </div>
        <div className="card-body space-y-4">
          {toastItems.map((toast) => (
            <div key={toast.id} className={`toast ${toast.className}`}>
              <span className="toast-icon" aria-hidden="true">
                {toast.icon}
              </span>
              <div className="toast-body">
                <p className="toast-title">{toast.title}</p>
                <p className="toast-message">{toast.message}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <span className="caption text-text-tertiary">Typography</span>
          <h2 className="heading-sm">Headings & body styles</h2>
        </div>
        <div className="card-body space-y-5">
          <div className="tabs">
            {fontTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`tab ${activeFontTab === tab.id ? 'tab-active' : ''}`}
                onClick={() => setActiveFontTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <p className="body-sm text-text-secondary">{activeFont.description}</p>
          <div className="space-y-3">
            {headings.map(({ tag: Tag, className, text }) => (
              <Tag key={text} className={`${className} ${activeFont.className}`}>
                {text}
              </Tag>
            ))}
            <p className={`body ${activeFont.className}`}>
              Body text inherits `body` styles. Use `body-sm` for helper copy and `caption` for metadata or label text
              across the eLearning UI.
            </p>
            <p className={`body-sm ${activeFont.className}`}>Body small demonstrates helper copy.</p>
            <p className={`caption ${activeFont.className}`}>Caption scale for metadata text.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card">
          <div className="card-header">
            <span className="caption text-text-tertiary">Lists</span>
            <h3 className="heading-sm">Ordered & unordered</h3>
          </div>
          <div className="card-body space-y-6">
            <div>
              <h4 className="heading-xs">Ordered list (ol & li)</h4>
              <ol className="list-ordered">
                <li className="list-ordered-item">Sign up learners</li>
                <li className="list-ordered-item">Publish lessons</li>
                <li className="list-ordered-item">Track completion</li>
              </ol>
            </div>
            <div>
              <h4 className="heading-xs">Unordered list (ul & li)</h4>
              <ul className="list-unordered">
                <li className="list-unordered-item">Live cohort calls</li>
                <li className="list-unordered-item">Resource library</li>
                <li className="list-unordered-item">Community forum</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="caption text-text-tertiary">Navigation</span>
            <h3 className="heading-sm">Pill navigation example</h3>
          </div>
          <div className="card-body space-y-4">
            <nav className="pill-nav">
              {navPills.map((pill, index) => (
                <button
                  key={pill}
                  type="button"
                  className={`pill-nav-item ${index === 0 ? 'pill-nav-item-active' : ''}`}
                >
                  {pill}
                </button>
              ))}
            </nav>
            <p className="body-sm">
              Use the pill nav for module selectors, lesson filters, or any horizontal navigation you want to style with
              badges.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <div className="card-header">
          <span className="caption text-text-tertiary">Accordion</span>
          <h3 className="heading-sm">Expandable content</h3>
        </div>
        <div className="card-body">
          <div className="accordion">
            {accordionItems.map((item) => {
              const isOpen = item.id === openItem
              return (
                <div key={item.id} className="accordion-item">
                  <button
                    type="button"
                    className="accordion-trigger"
                    onClick={() => setOpenItem(isOpen ? null : item.id)}
                  >
                    {item.title}
                    <span className={`accordion-icon ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  {isOpen && <div className="accordion-content">{item.content}</div>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card">
          <div className="card-header">
            <span className="caption text-text-tertiary">Cards</span>
            <h3 className="heading-sm">Course modules</h3>
          </div>
          <div className="card-body space-y-4">
            {['Foundations', 'Capstone project'].map((module) => (
              <div key={module} className="card-nested space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="heading-xs">{module}</h4>
                  <span className="badge badge-primary">45 mins</span>
                </div>
                <p className="body-sm">Use cards within cards for nested content like lessons or assignments.</p>
                <div className="flex gap-3">
                  <button type="button" className="btn btn-xs btn-primary-outline">
                    View
                  </button>
                  <button type="button" className="btn btn-xs btn-secondary-ghost">
                    Duplicate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <span className="caption text-text-tertiary">Inputs</span>
            <h3 className="heading-sm">Form states</h3>
          </div>
          <div className="card-body space-y-4">
            <div className="space-y-1">
              <label htmlFor="demo-email" className="body-sm">
                Email input
              </label>
              <input id="demo-email" placeholder="you@example.com" className="input" />
            </div>
            <div className="space-y-1">
              <label htmlFor="demo-select" className="body-sm">
                Select input (disabled)
              </label>
              <input id="demo-select" placeholder="Coming soon" className="input" disabled />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComponentsDemo
