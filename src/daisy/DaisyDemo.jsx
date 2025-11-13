import { IntroSection, LayoutSection, NavigationSection, FormsSection, FeedbackSection, UtilitySection } from './sections'
import { Icon } from '../icons'

function DaisyDemo() {
  return (
    <div className="space-y-10">
      <IntroSection />
      <div className="divider" aria-hidden="true" />
      <LayoutSection />
      <div className="divider" aria-hidden="true" />
      <NavigationSection />
      <div className="divider" aria-hidden="true" />
      <FormsSection />
      <div className="divider" aria-hidden="true" />
      <FeedbackSection />
      <div className="divider" aria-hidden="true" />
      <UtilitySection />
      <div className="flex justify-end">
        <button
          type="button"
          className="btn btn-outline btn-primary gap-2"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top
          <Icon name="arrowUp" className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default DaisyDemo
