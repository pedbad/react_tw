import { HeroSection, NavSection, KpiSection, WorkflowSection, ProductivitySection, DataViewsSection, MicroInteractionsSection, AccordionSection } from './sections'
import { Icon } from '../icons'

function CatalystDemo() {
  return (
    <div className="space-y-10">
      <HeroSection />
      <div className="divider" aria-hidden="true" />
      <NavSection />
      <div className="divider" aria-hidden="true" />
      <AccordionSection />
      <div className="flex justify-end">
        <button
          type="button"
          className="btn btn-md btn-primary-outline gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span>Back to top</span>
          <Icon name="arrowUp" className="h-4 w-4" />
        </button>
      </div>
      <div className="divider" aria-hidden="true" />
      <KpiSection />
      <div className="divider" aria-hidden="true" />
      <WorkflowSection />
      <div className="divider" aria-hidden="true" />
      <ProductivitySection />
      <div className="divider" aria-hidden="true" />
      <DataViewsSection />
      <div className="divider" aria-hidden="true" />
      <MicroInteractionsSection />
    </div>
  )
}

export default CatalystDemo
