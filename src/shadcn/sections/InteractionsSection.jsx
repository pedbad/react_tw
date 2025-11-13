import { Section, ExampleCard } from '../components/Section.jsx'
import { useState } from 'react'

function ButtonsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button type="button" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800">
        Primary
      </button>
      <button
        type="button"
        className="inline-flex items-center rounded-md border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
      >
        Outline
      </button>
      <button type="button" className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-900 dark:bg-slate-800 dark:text-slate-100">
        Pill badge
      </button>
      <button type="button" className="inline-flex items-center rounded-md border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:bg-slate-900">
        Ghost
      </button>
    </div>
  )
}

function DropdownTabsDemo() {
  const [activeTab, setActiveTab] = useState('overview')
  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'modules', label: 'Modules' },
    { id: 'reviews', label: 'Reviews' },
  ]

  return (
    <div className="space-y-4">
      <div className="relative inline-block text-left">
        <button
          type="button"
          className="inline-flex w-full justify-between rounded-md border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          Quick actions
          <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor">
            <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className="absolute left-0 mt-2 w-56 origin-top-left rounded-md border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">
          <div className="py-1 text-sm text-slate-700 dark:text-slate-100">
            <a className="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">Duplicate</a>
            <a className="block px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800">Archive</a>
            <a className="block px-4 py-2 text-red-600 hover:bg-slate-50 dark:hover:bg-slate-800">Delete</a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 rounded-lg border border-slate-200 bg-white p-1 text-sm font-medium dark:border-slate-700 dark:bg-slate-900">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`flex-1 rounded-md px-3 py-2 ${
              activeTab === tab.id ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900' : 'text-slate-600 dark:text-slate-200'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <p className="text-sm text-text-secondary">Active tab: {tabs.find((tab) => tab.id === activeTab)?.label}</p>
    </div>
  )
}

function AccordionDemo() {
  const [open, setOpen] = useState(0)
  const faqs = [
    { title: 'What is shadcn/ui?', body: 'A collection of re-usable components built with Radix and Tailwind. Copy + paste code, keep control.' },
    { title: 'Is it a component library?', body: 'No. You own the components. There’s no dependency drift or design lock-in.' },
    { title: 'How do I customize it?', body: 'Update the class names, tokens, or break components apart. They are your files.' },
  ]

  return (
    <div className="space-y-3">
      {faqs.map((item, index) => (
        <div key={item.title} className="rounded-xl border border-border-subtle bg-surface-base">
          <button
            type="button"
            className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-text-primary"
            onClick={() => setOpen((value) => (value === index ? -1 : index))}
          >
            <span>{item.title}</span>
            <svg className={`h-5 w-5 transition-transform ${open === index ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="none" stroke="currentColor">
              <path d="M6 8l4 4 4-4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {open === index && <div className="px-5 pb-5 text-sm text-text-secondary">{item.body}</div>}
        </div>
      ))}
    </div>
  )
}

function InteractionsSection() {
  const demos = [
    { title: 'Button system', description: 'Primary, outline, ghost, and badges', Component: ButtonsDemo },
    { title: 'Dropdown + Tabs', description: 'Radix-inspired menu & segmented control', Component: DropdownTabsDemo },
    { title: 'Accordion', description: 'Collapsible FAQ pattern', Component: AccordionDemo },
  ]

  return (
    <Section
      eyebrow="Interactions"
      title="Inputs, tabs, and disclosures"
      description="Core shadcn/ui elements focused on actions, menus, and toggleable content."
    >
      {demos.map((demo) => (
        <ExampleCard key={demo.title} title={demo.title} description={demo.description}>
          <demo.Component />
        </ExampleCard>
      ))}
    </Section>
  )
}

export default InteractionsSection
