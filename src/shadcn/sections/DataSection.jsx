import { Section, ExampleCard } from '../components/Section.jsx'

function CardDemo() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {[1, 2].map((card) => (
        <article key={card} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-slate-500">Module {card}</p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Strategic Thinking</h3>
            </div>
            <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200">
              Live
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Dive into frameworks for product discovery, facilitation, and alignment across distributed teams.
          </p>
          <div className="mt-4 flex items-center gap-3 text-xs text-slate-500">
            <span className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-2 py-1 dark:border-slate-700">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              32 lessons
            </span>
            <span>•</span>
            <span>4h 20m</span>
          </div>
        </article>
      ))}
    </div>
  )
}

function TableDemo() {
  const rows = [
    { name: 'Ruby Lang', status: 'In progress', progress: 62 },
    { name: 'Ken Adams', status: 'Complete', progress: 100 },
    { name: 'Reina Park', status: 'Invited', progress: 0 },
  ]

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <table className="min-w-full divide-y divide-slate-200 text-sm dark:divide-slate-800">
        <thead className="bg-slate-50 text-left text-xs font-medium uppercase tracking-wide text-slate-500 dark:bg-slate-800">
          <tr>
            <th className="px-4 py-3">Learner</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Progress</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
          {rows.map((row) => (
            <tr key={row.name}>
              <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{row.name}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                    row.status === 'Complete'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-400/20 dark:text-emerald-200'
                      : row.status === 'In progress'
                        ? 'bg-amber-100 text-amber-800 dark:bg-amber-400/20 dark:text-amber-200'
                        : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200'
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="h-2 flex-1 rounded-full bg-slate-200 dark:bg-slate-800">
                    <div
                      className={`h-2 rounded-full ${
                        row.progress === 100 ? 'bg-emerald-500' : 'bg-slate-900 dark:bg-white'
                      }`}
                      style={{ width: `${row.progress}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-500">{row.progress}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function AvatarStackDemo() {
  const avatars = [
    'https://i.pravatar.cc/64?img=1',
    'https://i.pravatar.cc/64?img=2',
    'https://i.pravatar.cc/64?img=3',
    'https://i.pravatar.cc/64?img=4',
  ]
  return (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex -space-x-3">
        {avatars.map((src, index) => (
          <img key={src} src={src} alt={`Avatar ${index + 1}`} className="h-10 w-10 rounded-full border-2 border-white dark:border-slate-900" />
        ))}
      </div>
      <div>
        <p className="text-sm font-medium text-text-primary">Product leadership cohort</p>
        <p className="text-xs text-text-secondary">24 members · Weekly syncs</p>
      </div>
    </div>
  )
}

function DataSection() {
  const demos = [
    { title: 'Content cards', description: 'Course and module cards', Component: CardDemo },
    { title: 'Learner table', description: 'Striped table + progress', Component: TableDemo },
    { title: 'Avatar stack', description: 'Overlapped avatars', Component: AvatarStackDemo },
  ]

  return (
    <Section eyebrow="Data" title="Structured layouts" description="Card grids, tables, and avatar stacks styled like shadcn/ui.">
      {demos.map((demo) => (
        <ExampleCard key={demo.title} title={demo.title} description={demo.description}>
          <demo.Component />
        </ExampleCard>
      ))}
    </Section>
  )
}

export default DataSection
