function IntroSection() {
  return (
    <section className="space-y-6 rounded-3xl border border-border-subtle bg-surface-base/80 p-8 shadow-sm">
      <div className="space-y-3">
        <p className="caption uppercase tracking-wide text-text-tertiary">shadcn/ui showcase</p>
        <h1 className="heading-md">Composable primitives powered by Tailwind</h1>
        <p className="body-sm text-text-secondary">
          These demos are straight from the shadcn/ui patterns: headless components, Radix behaviors, and Tailwind utility styling
          stitched into our existing design tokens.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4 rounded-2xl border border-border-subtle p-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle px-3 py-1 text-xs font-semibold uppercase tracking-wide text-text-tertiary">
            Command palette
          </div>
          <div className="rounded-xl border border-dashed border-border-subtle bg-surface-base/80 p-5 shadow-inner">
            <div className="flex items-center gap-3 rounded-lg border border-border-subtle bg-surface-base px-3 py-2 text-text-secondary">
              <span className="rounded-md border border-border-subtle px-2 py-1 text-xs font-medium">⌘ K</span>
              <span>Jump to anything…</span>
            </div>
            <ul className="mt-4 divide-y divide-border-subtle text-sm">
              {['Create course', 'Invite teammate', 'Open analytics'].map((item) => (
                <li key={item} className="flex items-center justify-between py-2">
                  <span>{item}</span>
                  <kbd className="rounded-md border border-border-subtle px-1.5 py-0.5 text-xs font-medium text-text-tertiary">↵</kbd>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-border-subtle bg-gradient-to-br from-surface-elevated to-surface-overlay/10 p-6 text-surface-overlay">
          <p className="text-sm uppercase tracking-wide text-text-secondary">Radix + Tailwind</p>
          <h2 className="mt-2 text-3xl font-semibold text-text-primary">Bring your own tokens</h2>
          <p className="mt-3 text-text-secondary">
            shadcn/ui ships unstyled React building blocks. We pulled in the exact JSX and reused our typography + spacing tokens, so
            you can compare coverage against Catalyst and Daisy without leaving this repo.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" className="btn btn-md btn-primary-solid">
              Explore components
            </button>
            <button type="button" className="btn btn-md btn-secondary-outline">
              View source
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IntroSection
