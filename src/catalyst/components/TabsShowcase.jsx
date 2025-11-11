import { useEffect, useState } from 'react'
import { Icon } from '../../icons'

const tabs = [
  { id: 'strategy', label: 'Strategy', body: 'Align cohorts to measurable outcomes and roadmap themes.' },
  { id: 'design', label: 'Design', body: 'Prototype Catalyst surfaces, map tokens, and capture states.' },
  { id: 'build', label: 'Build', body: 'Drop React + Tailwind primitives into your product shell.' },
  { id: 'qa', label: 'QA', body: 'Review motion, a11y, and theming before launch.' },
]

const iconShowcase = ['arrowUp', 'book', 'check', 'play', 'info', 'warning', 'error', 'refresh', 'eye', 'download', 'search']

function TabsShowcase() {
  const hasDocument = typeof document !== 'undefined'
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const [showModal, setShowModal] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(() => (hasDocument ? document.documentElement.classList.contains('dark') : false))
  const activeContent = tabs.find((tab) => tab.id === activeTab)

  useEffect(() => {
    if (!hasDocument) return
    setIsDarkMode(document.documentElement.classList.contains('dark'))
  }, [hasDocument])

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const next = !prev
      if (hasDocument) {
        document.documentElement.classList.toggle('dark', next)
      }
      return next
    })
  }

  return (
    <>
      <div className="surface-panel-elevated-padded">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`tab ${activeTab === tab.id ? 'tab-active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.id === 'qa' ? <Icon name="info" className="h-5 w-5" /> : tab.label}
          </button>
        ))}
      </div>
      <div className="px-2 py-4">
        <p className="body text-text-secondary">{activeContent.body}</p>
        {activeTab === 'strategy' && (
          <div className="mt-4 space-y-4">
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex">
                <button type="button" className="btn btn-sm btn-primary-solid relative group shadow-md shadow-primary/30 text-surface-base">
                  Example tooltip
                  <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-3 hidden -translate-x-1/2 surface-panel px-4 py-3 text-sm font-medium text-text-secondary shadow-xl group-hover:block md:w-72">
                    Use Catalyst tooltips to call out success metrics or helper copy.
                  </span>
                </button>
              </div>
              <button type="button" className="btn btn-sm btn-secondary-solid" onClick={() => setShowModal(true)}>
                Launch modal
              </button>
            </div>
            <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50/80 p-4 text-amber-900 dark:border-amber-400/50 dark:bg-amber-400/10 dark:text-amber-50">
              <span className="rounded-full bg-amber-100 p-2 text-amber-600 dark:bg-amber-400/20 dark:text-amber-100" aria-hidden="true">
                <Icon name="info" className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold">Heads up</p>
                <p className="body-sm">
                  Catalyst alerts can surface roadmap drift or KPI risk, matching the design shown in Catalyst UI docs.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeTab === 'design' && (
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="badge badge-primary">Primary badge</span>
            <span className="badge badge-secondary">Secondary badge</span>
            <span className="badge badge-tertiary">Tertiary badge</span>
            <span className="badge bg-surface-elevated text-text-primary">Surface badge</span>
            <span className="badge bg-primary-100 text-primary">Primary-100</span>
            <span className="badge bg-secondary-200 text-secondary-500">Secondary-200</span>
            <span className="badge bg-tertiary-200 text-tertiary-500">Tertiary-200</span>
          </div>
        )}
        {activeTab === 'build' && (
          <div className="surface-panel-padded mt-4 flex items-center gap-4">
            <div>
              <p className="caption text-text-tertiary">Theme switch</p>
              <p className="body-sm text-text-secondary">Toggle global light/dark mode via Catalyst switch.</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={isDarkMode}
              onClick={toggleTheme}
              className={`relative inline-flex h-8 w-14 items-center rounded-full border-2 transition-base ${
                isDarkMode ? 'border-primary bg-transparent' : 'border-border-subtle bg-transparent'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 rounded-full bg-white shadow-sm transition-motion ${
                  isDarkMode ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
              <span className="sr-only">Toggle theme</span>
            </button>
          </div>
        )}
        {activeTab === 'qa' && (
          <div className="mt-4 space-y-3">
            <p className="caption text-text-tertiary">Icon kit</p>
            <div className="flex flex-wrap gap-3">
              {iconShowcase.map((icon) => (
                <button
                  key={icon}
                  type="button"
                  className="btn btn-icon btn-secondary-outline transition-base hover:border-tertiary-300 hover:bg-gradient-to-br hover:from-primary/15 hover:to-tertiary/20 hover:text-tertiary-400"
                  aria-label={`Icon ${icon}`}
                >
                  <Icon name={icon} />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
      {showModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-surface-overlay/70 px-4">
        <div className="w-full max-w-lg rounded-3xl border border-border-subtle bg-surface-base p-6 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="caption text-text-tertiary">Catalyst modal</p>
              <h3 className="heading-sm">Roadmap checkpoint</h3>
            </div>
            <button type="button" className="btn btn-icon btn-secondary-outline" aria-label="Close modal" onClick={() => setShowModal(false)}>
              ×
            </button>
          </div>
          <p className="body mt-4">
            Use Catalyst modals for high-signal confirmations and planning gates. Pair with tooltips, alerts, and workflow calls-to-action to keep teams
            aligned.
          </p>
          <div className="mt-6 flex flex-wrap justify-end gap-3">
            <button type="button" className="btn btn-sm btn-secondary-ghost" onClick={() => setShowModal(false)}>
              Later
            </button>
            <button type="button" className="btn btn-sm btn-primary-solid" onClick={() => setShowModal(false)}>
              Continue
            </button>
          </div>
        </div>
      </div>
      )}
    </>
  )
}

export default TabsShowcase
