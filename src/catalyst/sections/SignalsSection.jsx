import AnnouncementCard from '../components/AnnouncementCard.jsx'
import { announcements } from '../data/views.js'

function SignalsSection() {
  return (
    <section className="card">
      <div className="card-header">
        <span className="caption text-text-tertiary">Signal center</span>
        <h2 className="heading-sm">Actionable notifications</h2>
        <p className="body-sm">Pair Catalyst toasts with inline actions so ops teams can act fast.</p>
      </div>
      <div className="card-body space-y-4">
        {announcements.map((announcement) => (
          <AnnouncementCard key={announcement.id} {...announcement} />
        ))}
      </div>
    </section>
  )
}

export default SignalsSection
