function CalendarCard({ events = [] }) {
  return (
    <div className="rounded-2xl border border-border-subtle bg-surface-base p-4">
      <p className="text-sm font-semibold text-text-primary">Week at a glance</p>
      <ul className="mt-4 space-y-3">
        {events.map((event) => (
          <li key={event.id} className="flex items-center justify-between">
            <div>
              <p className="caption text-text-tertiary">{event.day}</p>
              <p className="font-medium text-text-primary">{event.label}</p>
            </div>
            <span className="rounded-full bg-surface-elevated px-3 py-1 text-xs text-text-secondary">{event.time}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CalendarCard
