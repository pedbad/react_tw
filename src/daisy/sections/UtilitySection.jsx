import { Section, ExampleCard } from '../components/Section.jsx'

function HoverEffectsDemo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="hover-3d">
        <div className="card bg-base-100 p-6 shadow-md">
          <p className="badge badge-outline mb-2">hover-3d</p>
          <h3 className="text-lg font-semibold">Move around the card</h3>
          <p className="text-sm text-base-content/70">Hover zones update the 3D tilt and shine.</p>
        </div>
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} aria-hidden="true"></span>
        ))}
      </div>
      <figure className="hover-gallery max-w-xs">
        {[1, 2, 3, 4].map((id) => (
          <img key={id} src={`https://img.daisyui.com/images/stock/daisyui-hat-${id}.webp`} alt={`Gallery ${id}`} />
        ))}
      </figure>
    </div>
  )
}

function LinksShortcutsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a className="link link-primary">Inline link</a>
      <a className="link link-secondary link-hover">Hover link</a>
      <kbd className="kbd">⌘</kbd>
      <kbd className="kbd">K</kbd>
      <span className="text-sm text-base-content/70">Press to open the command palette.</span>
    </div>
  )
}

function UtilitySection() {
  const demos = [
    { title: 'Interactive hover effects', description: 'hover-3d, hover-gallery', Component: HoverEffectsDemo, span: 2 },
    { title: 'Links & keyboard hints', description: 'link, kbd', Component: LinksShortcutsDemo },
  ]

  return (
    <Section
      eyebrow="Utilities"
      title="Micro interactions & helpers"
      description="Showcase the smaller building blocks like hover galleries, 3D hover tiles, and link/kbd treatments."
    >
      {demos.map((demo) => (
        <ExampleCard key={demo.title} title={demo.title} description={demo.description} span={demo.span}>
          <demo.Component />
        </ExampleCard>
      ))}
    </Section>
  )
}

export default UtilitySection
