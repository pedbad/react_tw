function DataTable({ rows = [] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border-subtle">
      <table className="w-full text-left text-sm">
        <thead className="bg-surface-elevated text-text-secondary">
          <tr>
            <th className="px-4 py-3 font-semibold">Module</th>
            <th className="px-4 py-3 font-semibold">Owner</th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="px-4 py-3 font-semibold text-right">Learners</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-subtle bg-surface-base">
          {rows.map((row) => (
            <tr key={row.id} className="transition-base hover:bg-primary/5">
              <td className="px-4 py-3 text-text-primary">{row.title}</td>
              <td className="px-4 py-3 text-text-secondary">{row.owner}</td>
              <td className="px-4 py-3">
                <span className="badge badge-secondary">{row.status}</span>
              </td>
              <td className="px-4 py-3 text-right font-semibold text-text-primary">{row.learners.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable
