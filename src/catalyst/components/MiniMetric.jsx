function MiniMetric({ label, value }) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-surface-base px-4 py-3">
      <p className="caption text-text-tertiary">{label}</p>
      <p className="text-lg font-semibold text-text-primary">{value}</p>
    </div>
  )
}

export default MiniMetric
