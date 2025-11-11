function KanbanPreview({ columns = [] }) {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      {columns.map((column) => (
        <div key={column.id} className="surface-panel-padded">
          <p className="text-sm font-semibold text-text-primary">{column.title}</p>
          <ul className="mt-3 space-y-2 text-sm text-text-secondary">
            {column.items.map((item) => (
              <li key={item} className="rounded-xl border border-border-subtle bg-surface-elevated px-3 py-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default KanbanPreview
