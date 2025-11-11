function MiniMetric({ label, value }) {
  return (
    <div className="surface-panel-tight">
      <p className="caption text-text-tertiary">{label}</p>
      <p className="text-lg font-semibold text-text-primary">{value}</p>
    </div>
  )
}

export default MiniMetric
