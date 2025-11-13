function Section({ title, eyebrow, description, columns = 'lg:grid-cols-2', children }) {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        {eyebrow && <p className="caption uppercase tracking-wide text-text-tertiary">{eyebrow}</p>}
        {title && <h2 className="heading-sm">{title}</h2>}
        {description && <p className="body-sm text-text-secondary">{description}</p>}
      </div>
      <div className={`grid gap-6 ${columns}`}>{children}</div>
    </section>
  )
}

function ExampleCard({ title, description, span = 1, children }) {
  const spanClass =
    span === 2 ? 'lg:col-span-2' : span === 3 ? 'lg:col-span-2 xl:col-span-3' : span === 'full' ? 'lg:col-span-2 xl:col-span-3' : ''

  return (
    <article className={`rounded-2xl border border-base-300 bg-base-100/80 p-5 shadow-sm ${spanClass}`}>
      <div className="space-y-1">
        <p className="font-semibold text-base-content">{title}</p>
        {description && <p className="text-sm text-base-content/70">{description}</p>}
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </article>
  )
}

export { Section, ExampleCard }
