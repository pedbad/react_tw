import KpiCard from '../components/KpiCard.jsx'
import MiniMetric from '../components/MiniMetric.jsx'
import { kpiCards, miniMetrics } from '../data/kpis.js'
import { Icon } from '../../icons'
import { TabsShowcase } from '../components'
import SignalsSection from './SignalsSection.jsx'

function KpiSection() {
  return (
    <section className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="caption text-text-tertiary">Performance pulses</p>
          <h2 className="heading-sm">Example tab navigation</h2>
        </div>
        <button
          type="button"
          className="btn btn-icon btn-primary-outline"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <Icon name="arrowUp" className="h-5 w-5" />
        </button>
      </div>
      <TabsShowcase />
      <SignalsSection />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {kpiCards.map((card) => (
          <KpiCard key={card.id} {...card} />
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {miniMetrics.map((metric) => (
          <MiniMetric key={metric.id} {...metric} />
        ))}
      </div>
    </section>
  )
}

export default KpiSection
