function MicroInteractionsSection() {
  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <div className="card">
        <div className="card-header">
          <span className="caption text-text-tertiary">Stateful controls</span>
          <h3 className="heading-sm">Buttons & loaders</h3>
        </div>
        <div className="card-body flex flex-wrap gap-4">
          <button type="button" className="btn btn-primary-solid">
            Publish cohort
          </button>
          <button type="button" className="btn btn-primary-solid" disabled>
            Saving…
          </button>
          <button type="button" className="btn btn-secondary-ghost">
            Duplicate module
          </button>
          <button type="button" className="btn btn-tertiary-outline">
            Preview lesson
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <span className="caption text-text-tertiary">Progress trackers</span>
          <h3 className="heading-sm">Skeletons & upload status</h3>
        </div>
        <div className="card-body space-y-4">
          <div className="space-y-2">
            <div className="h-4 w-2/3 animate-pulse rounded-full bg-border-subtle" />
            <div className="h-16 animate-pulse rounded-2xl bg-border-subtle" />
            <div className="h-4 w-1/2 animate-pulse rounded-full bg-border-subtle" />
          </div>
          <div>
            <p className="body-sm text-text-secondary">Uploading studio cut</p>
            <div className="mt-2 h-2 w-full rounded-full bg-border-subtle">
              <div className="h-full w-3/4 rounded-full bg-primary" />
            </div>
            <p className="caption text-text-tertiary">75% complete · 1m remaining</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MicroInteractionsSection
