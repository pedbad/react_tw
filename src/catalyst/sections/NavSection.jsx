import { useRef, useState } from 'react'
import { Icon } from '../../icons'
import { useClickAway } from '../hooks/useClickAway'

const links = [
  { id: 'workspace', label: 'Workspace', icon: 'book' },
  { id: 'streams', label: 'Streams', icon: 'play' },
  { id: 'reviews', label: 'Reviews', icon: 'check' },
  { id: 'insights', label: 'Insights', icon: 'eye' },
]

const insightsMenu = ['Pulse reports', 'Engagement view', 'Time-on-task', 'Completion map', 'Exports']

function NavSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [insightsOpen, setInsightsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useClickAway(dropdownRef, () => setInsightsOpen(false))

  return (
    <section className="card">
      <div className="card-header">
        <span className="caption text-text-tertiary">Navigation system</span>
        <h2 className="heading-sm">Responsive primary navigation</h2>
        <p className="body-sm">Menu items stay flush right on desktop and collapse under a hamburger on mobile.</p>
      </div>
      <div className="card-body">
        <div className="flex flex-wrap items-center gap-4">
          <div className="text-left">
            <p className="text-sm font-semibold text-text-primary">Catalyst OS</p>
            <p className="caption text-text-secondary normal-case">v0.7 preview</p>
          </div>
          <button
            type="button"
            className="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border-subtle md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="flex flex-col items-center gap-1.5">
              <span className="block h-0.5 w-5 rounded-full bg-text-primary" />
              <span className="block h-0.5 w-5 rounded-full bg-text-primary" />
              <span className="block h-0.5 w-5 rounded-full bg-text-primary" />
            </span>
          </button>
          <nav
            className={`w-full md:flex md:flex-1 md:justify-end ${
              isOpen ? 'flex flex-col gap-2 pt-4' : 'hidden md:flex'
            }`}
          >
            <ul className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:items-center md:gap-3">
              {links.map((link) => (
                <li key={link.id} className="relative md:last:mr-0">
                  <button
                    type="button"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-text-secondary transition-base hover:bg-primary/10 hover:text-primary"
                    onClick={() =>
                      link.id === 'insights' ? setInsightsOpen((value) => !value) : setInsightsOpen(false)
                    }
                    aria-haspopup={link.id === 'insights' ? 'menu' : undefined}
                    aria-expanded={link.id === 'insights' ? insightsOpen : undefined}
                    ref={link.id === 'insights' ? dropdownRef : null}
                  >
                    <Icon name={link.icon} className="h-5 w-5" />
                    {link.label}
                    {link.id === 'insights' && (
                      <svg
                        className={`h-4 w-4 transition-motion ${insightsOpen ? 'rotate-180 text-primary' : 'text-text-tertiary'}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    )}
                  </button>
                  {link.id === 'insights' && insightsOpen && (
                    <div className="dropdown-panel absolute right-0 z-10 mt-2 w-56 md:text-left">
                      <ul className="space-y-1 text-sm text-text-secondary">
                        {insightsMenu.map((item) => (
                          <li key={item}>
                            <button
                              type="button"
                              className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left transition-base hover:bg-primary/5 hover:text-primary"
                              onClick={() => setInsightsOpen(false)}
                            >
                              {item}
                              <span className="caption text-text-tertiary">↗</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  )
}

export default NavSection
