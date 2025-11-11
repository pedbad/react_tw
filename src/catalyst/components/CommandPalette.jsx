import { Icon } from '../../icons'

function CommandPalette({ items = [] }) {
  return (
    <div className="card p-5">
      <div className="flex items-center gap-3 rounded-2xl border border-border-subtle bg-surface-base px-4 py-2">
        <Icon name="search" className="h-5 w-5 text-text-tertiary" />
        <input
          className="flex-1 bg-transparent text-sm text-text-primary placeholder:text-text-tertiary focus-visible:outline-none"
          placeholder="Jump to cohort, action, or teammate"
        />
        <span className="rounded-full bg-surface-elevated px-2 py-1 text-xs text-text-tertiary">⌘K</span>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between rounded-2xl border border-border-subtle px-4 py-2 text-sm text-text-primary transition-base hover:border-primary/40 hover:bg-primary/5"
          >
            {item.label}
            <span className="rounded-full bg-surface-elevated px-2 py-0.5 text-xs text-text-tertiary">{item.shortcut}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CommandPalette
