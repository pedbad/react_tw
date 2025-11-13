import { IntroSection, InteractionsSection, FormsSection, DataSection, FeedbackSection } from './sections'
import { Icon } from '../icons'

function ShadcnDemo() {
  return (
    <div className="space-y-10">
      <IntroSection />
      <div className="divider" aria-hidden="true" />
      <InteractionsSection />
      <div className="divider" aria-hidden="true" />
      <FormsSection />
      <div className="divider" aria-hidden="true" />
      <DataSection />
      <div className="divider" aria-hidden="true" />
      <FeedbackSection />
      <div className="flex justify-end">
        <button
          type="button"
          className="btn btn-md btn-primary-outline gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top
          <Icon name="arrowUp" className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default ShadcnDemo
