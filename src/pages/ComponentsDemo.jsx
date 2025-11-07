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

function ComponentsDemo() {
  const [openItem, setOpenItem] = useState(accordionItems[0].id)

  return (
    <div className="space-y-8">
      <section className="card">
        <div className="card-header">
          <span className="caption text-text-tertiary">Typography</span>
          <h2 className="heading-sm">Headings & body styles</h2>
        </div>
        <div className="card-body space-y-4">
          {headings.map(({ tag: Tag, className, text }) => (
            <Tag key={text} className={className}>
              {text}
            </Tag>
          ))}
          <p className="body">
            Body text inherits `body` styles. Use `body-sm` for helper copy and `caption` for metadata or label text across
            the eLearning UI.
          </p>
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
