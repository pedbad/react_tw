function FilterSidebar({ filters = [] }) {
  return (
    <aside className="card p-5">
      <p className="caption text-text-tertiary">Quick filters</p>
      <div className="mt-4 space-y-5">
        {filters.map((filter) => (
          <div key={filter.id} className="space-y-2">
            <p className="text-sm font-semibold text-text-primary">{filter.label}</p>
            <div className="flex flex-wrap gap-2">
              {filter.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  className="rounded-full border border-border-subtle px-3 py-1 text-xs font-medium text-text-secondary transition-base hover:border-primary/40 hover:text-primary"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default FilterSidebar
