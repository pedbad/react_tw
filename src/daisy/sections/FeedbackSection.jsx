import { Section, ExampleCard } from '../components/Section.jsx'

function AlertsBadgesDemo() {
  return (
    <div className="space-y-3">
      <div role="alert" className="alert alert-info">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 110 20 10 10 0 010-20z" />
        </svg>
        <span>New schedule available.</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="badge badge-secondary">Badge</span>
        <span className="tooltip" data-tip="Tooltips wrap any element.">
          <button type="button" className="btn btn-sm btn-outline">
            Hover me
          </button>
        </span>
      </div>
    </div>
  )
}

function AvatarsMaskDemo() {
  return (
    <div className="flex items-center gap-4">
      <div className="avatar">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/profile/demo/pewdiepie.png" alt="Profile avatar" />
        </div>
      </div>
      <img
        className="mask mask-squircle w-24"
        src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
        alt="Masked illustration"
      />
    </div>
  )
}

function ChatToastDemo() {
  return (
    <div className="space-y-4">
      <div>
        <div className="chat chat-start">
          <div className="chat-bubble">Remember to add transcripts.</div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-primary">On it!</div>
        </div>
      </div>
      <div className="toast static">
        <div className="alert alert-success">
          <span>Toast: lesson published.</span>
        </div>
      </div>
    </div>
  )
}

function ProgressStatsDemo() {
  return (
    <div className="space-y-4">
      <progress className="progress progress-primary w-full" value="60" max="100"></progress>
      <div className="radial-progress text-primary" style={{ '--value': 72 }} role="progressbar" aria-valuenow="72">
        72%
      </div>
      <div className="stats bg-base-200 shadow-sm">
        <div className="stat">
          <div className="stat-title">Completion</div>
          <div className="stat-value text-primary">89%</div>
          <div className="stat-desc">12% more than last week</div>
        </div>
      </div>
    </div>
  )
}

function StatusStackDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <span className="status status-success"></span>
      <span className="status status-warning"></span>
      <div className="stack h-20 w-24">
        <div className="bg-primary text-primary-content grid place-content-center rounded-box">1</div>
        <div className="bg-secondary text-secondary-content grid place-content-center rounded-box">2</div>
        <div className="bg-accent text-accent-content grid place-content-center rounded-box">3</div>
      </div>
    </div>
  )
}

function CountdownDiffDemo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="flex gap-2">
        <span>Countdown</span>
        <span className="countdown text-4xl">
          <span style={{ '--value': 0 }}>00</span>:
          <span style={{ '--value': 42 }}>42</span>:
          <span style={{ '--value': 18 }}>18</span>
        </span>
      </div>
      <figure className="diff aspect-16/9" tabIndex={0}>
        <div className="diff-item-1" role="img">
          <img src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" alt="Before" />
        </div>
        <div className="diff-item-2" role="img">
          <img src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" alt="After" />
        </div>
        <div className="diff-resizer"></div>
      </figure>
    </div>
  )
}

function SkeletonLoadingDemo() {
  return (
    <div className="space-y-4">
      <div className="skeleton h-6 w-1/2"></div>
      <div className="skeleton h-6 w-2/3"></div>
      <div className="flex flex-wrap gap-2">
        {['xs', 'sm', 'md', 'lg'].map((size) => (
          <span key={size} className={`loading loading-spinner loading-${size}`}></span>
        ))}
      </div>
    </div>
  )
}

function FeedbackSection() {
  const demos = [
    { title: 'Alerts & badges', description: 'alert, badge, tooltip', Component: AlertsBadgesDemo },
    { title: 'Avatars & masks', description: 'avatar, mask', Component: AvatarsMaskDemo },
    { title: 'Chat & toast', description: 'chat, toast', Component: ChatToastDemo },
    { title: 'Progress & stat blocks', description: 'progress, radial-progress, stat', Component: ProgressStatsDemo },
    { title: 'Statuses & stacks', description: 'status, stack', Component: StatusStackDemo },
    { title: 'Countdowns & image diff', description: 'countdown, diff', Component: CountdownDiffDemo, span: 2 },
    { title: 'Skeletons & loaders', description: 'skeleton, loading', Component: SkeletonLoadingDemo },
  ]

  return (
    <Section
      eyebrow="Feedback"
      title="Communicate state and progress"
      description="Alerts, badges, toast notifications, stats, skeletons, countdowns, and diff sliders."
      columns="lg:grid-cols-2"
    >
      {demos.map((demo) => (
        <ExampleCard key={demo.title} title={demo.title} description={demo.description} span={demo.span}>
          <demo.Component />
        </ExampleCard>
      ))}
    </Section>
  )
}

export default FeedbackSection
