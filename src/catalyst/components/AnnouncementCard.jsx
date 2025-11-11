function AnnouncementCard({ title, body, tone = 'info' }) {
  const toneClass =
    tone === 'success'
      ? 'toast-success'
      : tone === 'warning'
        ? 'toast-warning'
        : 'toast-info'

  return (
    <div className={`toast ${toneClass}`}>
      <div className="toast-body">
        <p className="toast-title">{title}</p>
        <p className="toast-message">{body}</p>
      </div>
      <button type="button" className="btn btn-xs btn-primary-outline">
        View
      </button>
    </div>
  )
}

export default AnnouncementCard
