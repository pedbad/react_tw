function KpiCard({ label, value, change, trend }) {
  const trendClasses = trend === 'down' ? 'text-rose-500 bg-rose-50 dark:bg-rose-400/10' : 'text-emerald-500 bg-emerald-50 dark:bg-emerald-400/10'

  return (
    <div className="card p-5">
      <p className="caption text-text-tertiary">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-text-primary">{value}</p>
      <span className={`mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${trendClasses}`}>
        <span className="inline-block h-2 w-2 rounded-full bg-current" aria-hidden="true" />
        {change}
      </span>
    </div>
  )
}

export default KpiCard
