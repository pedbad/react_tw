import { useEffect, useRef, useState } from 'react'
import { Icon } from '../../icons'
import { TabsShowcase } from '../components'

const accordionItems = [
  {
    id: 'patterns',
    title: 'Pattern coverage',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, culpa. Laboriosam reiciendis a tempore ab consequuntur fugiat ipsa sunt.',
  },
  {
    id: 'handoff',
    title: 'Design → build handoff (with tabs)',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur tenetur cumque aspernatur minus assumenda dolore, quo consectetur sit aperiam.',
  },
  {
    id: 'roadmap',
    title: 'Scroll-triggered observer behavior',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, necessitatibus officiis. Corrupti nisi, doloremque iste aliquid ut fugit alias.',
  },
]

function AccordionSection() {
  const [openItems, setOpenItems] = useState([accordionItems[0].id])
  const lastAccordionId = accordionItems[accordionItems.length - 1].id
  const lastHeaderRef = useRef(null)

  useEffect(() => {
    const target = lastHeaderRef.current
    if (!target || typeof IntersectionObserver === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setOpenItems((prev) => (prev.includes(lastAccordionId) ? prev : [...prev, lastAccordionId]))
          }
        })
      },
      { threshold: 0.6 },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [lastAccordionId])

  useEffect(() => {
    const handleScroll = () => {
      const target = lastHeaderRef.current
      if (!target) {
        return
      }
      const nav = document.querySelector('.site-header')
      const navBottom = nav ? nav.getBoundingClientRect().bottom : 0
      const headerTop = target.getBoundingClientRect().top

      if (openItems.includes(lastAccordionId) && headerTop <= navBottom + 16) {
        setOpenItems((prev) => prev.filter((id) => id !== lastAccordionId))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastAccordionId, openItems])

  return (
    <section className="card">
      <div className="card-header">
        <span className="caption text-text-tertiary">Catalyst primer</span>
        <h3 className="heading-sm">Example Catalyst accordions</h3>
      </div>
      <div className="card-body space-y-3">
        {accordionItems.map((item) => {
          const isOpen = openItems.includes(item.id)
          return (
            <div key={item.id} className="surface-panel">
              <button
                ref={item.id === lastAccordionId ? lastHeaderRef : null}
                type="button"
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-text-primary transition-base hover:text-primary"
                onClick={() =>
                  setOpenItems((prev) => (isOpen ? prev.filter((id) => id !== item.id) : [...prev, item.id]))
                }
              >
                <span>{item.title}</span>
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-motion ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden px-5 transition-all duration-300 ease-out ${
                  isOpen ? 'max-h-[600px] py-4 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-4">
                  {item.id === 'handoff' && (
                    <div className="toast toast-info">
                      <span className="toast-icon" aria-hidden="true">
                        <Icon name="info" className="h-10 w-10" />
                      </span>
                      <div className="toast-body">
                        <p className="toast-title">Catalyst tip</p>
                        <p className="toast-message">Observers respect your global dark/light tokens automatically.</p>
                      </div>
                    </div>
                  )}
                  <p className="body-sm text-text-secondary">{item.content}</p>
                  {item.id === 'handoff' && <TabsShowcase />}
                  {item.id === 'roadmap' && (
                    <p className="body-sm text-text-secondary">
                      The observer attaches to the last accordion’s header (ref={'{'}item.id === lastAccordionId ? lastHeaderRef
                      : null{'}'} in <code className="font-mono text-xs">src/catalyst/sections/AccordionSection.jsx:49</code>). Once
                      that header enters the viewport enough to satisfy the{' '}
                      <code className="font-mono text-xs">threshold: 0.6</code>, the IntersectionObserver fires; for each entry marked{' '}
                      <code className="font-mono text-xs">isIntersecting</code>, it calls{' '}
                      <code className="font-mono text-xs">setOpenItem(lastAccordionId)</code>, which opens the final accordion panel.
                      So it’s triggered as soon as roughly 60% of that last header is visible during scroll (and only while the
                      component is mounted).
                    </p>
                  )}
                  {item.id === 'roadmap' && (
                    <p className="body-sm text-text-secondary">
                      Added a scroll listener in <code className="font-mono text-xs">src/catalyst/sections/AccordionSection.jsx:24</code>{' '}
                      that monitors the last accordion header against the sticky <code className="font-mono text-xs">.site-header</code>.
                      When the header’s top reaches the nav (within ~16px) and that accordion is open, it automatically closes,
                      preventing overlap with the fixed navigation.
                    </p>
                  )}
                  {item.id === 'patterns' && (
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="surface-panel-elevated-padded">
                        <p className="caption text-text-tertiary">Standard ordered list</p>
                        <ol className="list-ordered mt-3">
                          <li className="list-ordered-item">Capture requirements</li>
                          <li className="list-ordered-item">Map tokens</li>
                          <li className="list-ordered-item">Ship component</li>
                        </ol>
                      </div>
                      <div className="surface-panel-elevated-padded">
                        <p className="caption text-text-tertiary">Numbered circles</p>
                        <ol className="numbered-list mt-3">
                          <li className="numbered-list-item">Brief approval</li>
                          <li className="numbered-list-item">Design review</li>
                          <li className="numbered-list-item">Deploy</li>
                        </ol>
                      </div>
                      <div className="surface-panel-elevated-padded">
                        <p className="caption text-text-tertiary">Standard bullet list</p>
                        <ul className="list-unordered mt-3">
                          <li className="list-unordered-item">Progress tracker</li>
                          <li className="list-unordered-item">Team mentions</li>
                          <li className="list-unordered-item">Autosave states</li>
                        </ul>
                      </div>
                      <div className="surface-panel-elevated-padded">
                        <p className="caption text-text-tertiary">Hollow bullet list</p>
                        <ul className="circle-list circle-list--vibrant mt-3">
                          <li className="circle-list-item">Outline controls</li>
                          <li className="circle-list-item">Draft QA cues</li>
                          <li className="circle-list-item">Launch checks</li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default AccordionSection
