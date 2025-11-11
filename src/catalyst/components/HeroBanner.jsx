function HeroBanner({ eyebrow, title, description, primaryAction, secondaryAction, meta }) {
  return (
    <section className="card bg-gradient-to-br from-primary/10 via-surface-base to-surface-base">
      <div className="card-body flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4 max-w-2xl">
          <p className="caption text-primary">{eyebrow}</p>
          <h1 className="heading-md lg:heading-lg">{title}</h1>
          <p className="body text-text-secondary">{description}</p>
          <div className="flex flex-wrap gap-3">
            <button type="button" className="btn btn-lg btn-primary-solid">
              {primaryAction}
            </button>
            <button type="button" className="btn btn-lg btn-secondary-outline">
              {secondaryAction}
            </button>
          </div>
        </div>
        <div className="min-w-[240px] rounded-2xl border border-border-subtle bg-surface-base p-4 shadow-inner">
          <p className="body-sm text-text-secondary">{meta.label}</p>
          <p className="heading-sm">{meta.value}</p>
          <p className="body-sm text-text-secondary">{meta.helper}</p>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
