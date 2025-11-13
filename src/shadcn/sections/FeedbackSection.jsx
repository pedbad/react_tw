import { useState } from 'react'
import { Section, ExampleCard } from '../components/Section.jsx'

function AlertsDemo() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-100">
        <p className="font-semibold">Heads up!</p>
        <p className="text-xs">Learners without SSO need to verify their email before accessing this module.</p>
      </div>
      <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900 dark:border-emerald-400/40 dark:bg-emerald-400/10 dark:text-emerald-100">
        <p className="font-semibold">All good</p>
        <p className="text-xs">Auto-graded quiz results synced with your LMS.</p>
      </div>
    </div>
  )
}

function ToastDemo() {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-4 rounded-xl border border-border-subtle bg-surface-base px-4 py-3 shadow-sm">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-white">✓</div>
        <div>
          <p className="font-semibold text-text-primary">Lesson published</p>
          <p className="text-sm text-text-secondary">Learners get notified automatically.</p>
        </div>
        <button type="button" className="text-sm font-medium text-primary hover:underline">
          Undo
        </button>
      </div>
      <p className="text-xs text-text-tertiary">Shadcn-style toast sits bottom-right by default.</p>
    </div>
  )
}

function DialogDemo() {
  const [open, setOpen] = useState(false)
  return (
    <div className="space-y-3">
      <button
        type="button"
        className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:bg-white dark:text-slate-900"
        onClick={() => setOpen(true)}
      >
        Open dialog
      </button>
      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-slate-950/40 backdrop-blur-sm" role="dialog" aria-modal="true">
          <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-700 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-text-primary">Archive course?</h3>
            <p className="mt-2 text-sm text-text-secondary">You can restore it later, but learners will lose access immediately.</p>
            <div className="mt-6 flex justify-end gap-2 text-sm">
              <button type="button" className="rounded-md border border-slate-200 px-3 py-1.5 font-medium text-slate-700 dark:border-slate-700 dark:text-slate-100" onClick={() => setOpen(false)}>
                Cancel
              </button>
              <button type="button" className="rounded-md bg-red-600 px-3 py-1.5 font-medium text-white hover:bg-red-500" onClick={() => setOpen(false)}>
                Archive
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function TooltipDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <button type="button" className="relative rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100">
        Hover me
        <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-xs text-white opacity-0 transition hover:opacity-100">
          Tooltip
        </span>
      </button>
      <div className="rounded-xl border border-dashed border-border-subtle p-4 text-sm text-text-secondary">
        Tooltips, skeletons, alerts, and toasts are straightforward `div` structures styled with Tailwind utilities.
      </div>
    </div>
  )
}

function FeedbackSection() {
  const demos = [
    { title: 'Alerts', description: 'Callouts for warnings and success', Component: AlertsDemo },
    { title: 'Toast', description: 'Transient notification card', Component: ToastDemo },
    { title: 'Dialog', description: 'Overlay confirm dialog', Component: DialogDemo },
    { title: 'Tooltip', description: 'Hover interactions', Component: TooltipDemo },
  ]

  return (
    <Section eyebrow="Feedback" title="Communicate status" description="Alerts, toasts, dialogs, and tooltips styled like shadcn/ui.">
      {demos.map((demo) => (
        <ExampleCard key={demo.title} title={demo.title} description={demo.description}>
          <demo.Component />
        </ExampleCard>
      ))}
    </Section>
  )
}

export default FeedbackSection
