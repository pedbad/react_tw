import { Section, ExampleCard } from '../components/Section.jsx'

function AccordionCollapseDemo() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {[1, 2, 3].map((item) => (
          <div key={item} className="collapse collapse-arrow border border-base-300 bg-base-100">
            <input type="radio" name="daisy-accordion" defaultChecked={item === 1} />
            <div className="collapse-title font-semibold">Accordion item {item}</div>
            <div className="collapse-content text-sm text-base-content/80">
              DaisyUI ships both accordion and collapse styles.
            </div>
          </div>
        ))}
      </div>
      <div tabIndex={0} className="collapse border border-dashed border-base-300 bg-base-200">
        <div className="collapse-title">Collapse component</div>
        <div className="collapse-content text-sm">Use collapse for single disclosure panels.</div>
      </div>
    </div>
  )
}

function MenuBreadcrumbDemo() {
  return (
    <div className="space-y-4">
      <div className="breadcrumbs text-sm">
        <ul>
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Courses</a>
          </li>
          <li>Create</li>
        </ul>
      </div>
      <ul className="menu rounded-box border border-base-300 bg-base-100">
        <li className="menu-title">Menu</li>
        <li>
          <a className="active">Overview</a>
        </li>
        <li>
          <a>Modules</a>
        </li>
        <li>
          <a>Analytics</a>
        </li>
      </ul>
    </div>
  )
}

function DropdownIndicatorDemo() {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Choose topic
        </div>
        <ul tabIndex={-1} className="dropdown-content menu rounded-box bg-base-100 p-2 shadow">
          <li>
            <a>Design systems</a>
          </li>
          <li>
            <a>Accessibility</a>
          </li>
        </ul>
      </div>
      <div className="indicator">
        <span className="indicator-item status status-success" aria-label="online"></span>
        <div className="badge badge-outline">Indicator</div>
      </div>
    </div>
  )
}

function TabsStepsPaginationDemo() {
  return (
    <div className="space-y-4">
      <div role="tablist" className="tabs tabs-bordered">
        <a role="tab" className="tab tab-active">
          Lessons
        </a>
        <a role="tab" className="tab">
          Assets
        </a>
        <a role="tab" className="tab">
          Community
        </a>
      </div>
      <ul className="steps steps-horizontal">
        <li className="step step-primary">Plan</li>
        <li className="step step-primary">Build</li>
        <li className="step">Ship</li>
        <li className="step">Review</li>
      </ul>
      <div className="join">
        <button className="btn join-item">1</button>
        <button className="btn join-item btn-active">2</button>
        <button className="btn join-item">3</button>
        <button className="btn join-item">4</button>
      </div>
    </div>
  )
}

function TimelineDividerDemo() {
  return (
    <div className="space-y-4">
      <ul className="timeline timeline-vertical">
        {['Kickoff', 'Wireframes', 'Review', 'Launch'].map((label, index) => (
          <li key={label}>
            {index !== 0 && <hr />}
            <div className="timeline-start">{2024 + index}</div>
            <div className="timeline-middle">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.2-8.8a.75.75 0 00-1.4-.4l-2.4 3.6-1.3-1.3a.75.75 0 10-1.1 1.06l1.8 1.8a.75.75 0 001.2-.1l3-4.1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box">{label}</div>
            {index !== 3 && <hr />}
          </li>
        ))}
      </ul>
      <div className="divider">OR</div>
    </div>
  )
}

function TableListDemo() {
  return (
    <div className="space-y-4">
      <div className="overflow-x-auto rounded-box border border-base-300">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Role</th>
              <th>Favorite color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            <tr>
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Support Technician</td>
              <td>Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ul className="list rounded-box border border-base-300 bg-base-100">
        <li className="list-row">
          <div className="font-semibold">Lo-fi beats</div>
          <div className="text-xs opacity-60">Playlist</div>
          <button type="button" className="btn btn-ghost btn-sm">
            Play
          </button>
        </li>
        <li className="list-row">
          <div className="font-semibold">Focus session</div>
          <div className="text-xs opacity-60">Timer</div>
          <button type="button" className="btn btn-ghost btn-sm">
            Join
          </button>
        </li>
      </ul>
    </div>
  )
}

function AnimatedNavDemo() {
  return (
    <div className="space-y-4">
      <div className="join">
        <button className="btn join-item btn-sm">Outline</button>
        <button className="btn join-item btn-sm btn-active">
          Draft
        </button>
        <button className="btn join-item btn-sm">Published</button>
      </div>
      <span className="text-rotate text-3xl font-bold">
        <span>
          <span>Researchers</span>
          <span>Designers</span>
          <span>Developers</span>
        </span>
      </span>
    </div>
  )
}

function NavigationSection() {
  const demos = [
    { title: 'Accordion & collapse', description: 'accordion, collapse', Component: AccordionCollapseDemo },
    { title: 'Menu & breadcrumbs', description: 'menu, breadcrumbs', Component: MenuBreadcrumbDemo },
    { title: 'Dropdown indicators', description: 'dropdown, indicator', Component: DropdownIndicatorDemo },
    { title: 'Tabs, steps, pagination', description: 'tab, steps, pagination, join', Component: TabsStepsPaginationDemo },
    { title: 'Timeline & dividers', description: 'timeline, divider', Component: TimelineDividerDemo },
    { title: 'Tables & lists', description: 'table, list', Component: TableListDemo },
    { title: 'Animated labels', description: 'join, text-rotate', Component: AnimatedNavDemo },
  ]

  return (
    <Section
      eyebrow="Navigation"
      title="Information architecture"
      description="Menus, dropdowns, accordions, and list-heavy components for structuring large experiences."
    >
      {demos.map((demo) => (
        <ExampleCard key={demo.title} title={demo.title} description={demo.description}>
          <demo.Component />
        </ExampleCard>
      ))}
    </Section>
  )
}

export default NavigationSection
