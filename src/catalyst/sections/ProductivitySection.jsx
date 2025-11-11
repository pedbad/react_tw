import CommandPalette from '../components/CommandPalette.jsx'
import FilterSidebar from '../components/FilterSidebar.jsx'
import { commandPalette, quickFilters } from '../data/actions.js'

function ProductivitySection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr,320px]">
      <CommandPalette items={commandPalette} />
      <FilterSidebar filters={quickFilters} />
    </section>
  )
}

export default ProductivitySection
