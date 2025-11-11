import DataTable from '../components/DataTable.jsx'
import KanbanPreview from '../components/KanbanPreview.jsx'
import CalendarCard from '../components/CalendarCard.jsx'
import { tableRows, kanbanColumns, calendarEvents } from '../data/views.js'

function DataViewsSection() {
  return (
    <section className="space-y-6">
      <div>
        <p className="caption text-text-tertiary">Data surfaces</p>
        <h2 className="heading-sm">Switch between table, kanban, and calendar</h2>
      </div>
      <div className="grid gap-6 xl:grid-cols-[1.4fr,0.6fr]">
        <DataTable rows={tableRows} />
        <div className="space-y-4">
          <KanbanPreview columns={kanbanColumns} />
          <CalendarCard events={calendarEvents} />
        </div>
      </div>
    </section>
  )
}

export default DataViewsSection
