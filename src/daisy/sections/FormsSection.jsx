import { Section, ExampleCard } from '../components/Section.jsx'

function ButtonsDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <button type="button" className="btn">
        Default
      </button>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
      <button type="button" className="btn btn-secondary btn-outline">
        Outline
      </button>
      <button type="button" className="btn btn-accent btn-sm">
        Small
      </button>
      <button type="button" className="btn btn-link text-info">Link</button>
    </div>
  )
}

function InputsDemo() {
  return (
    <div className="space-y-4">
      <label className="input input-bordered flex items-center gap-2">
        <span className="label-text text-xs uppercase tracking-wide">URL</span>
        <input type="text" className="grow" placeholder="https://learn.dev" />
      </label>
      <input type="email" className="input input-bordered validator w-full" required placeholder="[email protected]" />
      <textarea className="textarea textarea-bordered" rows="3" placeholder="Share project notes"></textarea>
    </div>
  )
}

function SelectorsDemo() {
  return (
    <div className="grid gap-4 lg:grid-cols-2">
      <div className="space-y-2">
        <select className="select select-bordered w-full">
          <option disabled>Select a color</option>
          <option>Crimson</option>
          <option>Amber</option>
          <option>Velvet</option>
        </select>
        <input type="date" className="input input-bordered w-full" />
        <input type="file" className="file-input file-input-bordered w-full" />
      </div>
      <form className="filter justify-end">
        <input className="btn btn-square" type="reset" value="×" aria-label="Clear filter" />
        <input className="btn" type="radio" name="stack" aria-label="Svelte" />
        <input className="btn" type="radio" name="stack" aria-label="Vue" />
        <input className="btn" type="radio" name="stack" aria-label="React" defaultChecked />
      </form>
    </div>
  )
}

function BinaryControlsDemo() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <label className="cursor-pointer space-x-2">
        <span>Checkbox</span>
        <input type="checkbox" className="checkbox" defaultChecked />
      </label>
      <label className="flex items-center gap-2">
        <input type="radio" name="demo-radio" className="radio radio-primary" defaultChecked />
        <span>Radio</span>
      </label>
      <label className="flex items-center gap-2">
        <span>Toggle</span>
        <input type="checkbox" className="toggle toggle-primary" defaultChecked />
      </label>
      <label className="swap">
        <input type="checkbox" />
        <div className="swap-on">ON</div>
        <div className="swap-off">OFF</div>
      </label>
    </div>
  )
}

function RangeRatingDemo() {
  return (
    <div className="space-y-4">
      <input type="range" min="0" max="100" defaultValue="40" className="range range-primary" />
      <div className="rating rating-md">
        {[1, 2, 3, 4, 5].map((value) => (
          <input
            key={value}
            type="radio"
            name="rating-demo"
            className="mask mask-star-2 bg-orange-400"
            defaultChecked={value === 4}
          />
        ))}
      </div>
    </div>
  )
}

function FieldsetThemeDemo() {
  return (
    <div className="space-y-4">
      <fieldset className="fieldset">
        <legend className="fieldset-legend">Course title</legend>
        <input type="text" className="input input-bordered" placeholder="Product analytics fundamentals" />
        <p className="label">You can update this later.</p>
      </fieldset>
      <div className="flex flex-wrap gap-2">
        {['light', 'dark', 'cupcake'].map((theme) => (
          <label key={theme} className="btn btn-sm btn-outline">
            <input
              type="radio"
              name="theme-controller-demo"
              value={theme}
              className="theme-controller"
              aria-label={theme}
              defaultChecked={theme === 'light'}
            />
            {theme}
          </label>
        ))}
      </div>
    </div>
  )
}

function FormsSection() {
  const demos = [
    { title: 'Buttons', description: 'button', Component: ButtonsDemo },
    { title: 'Inputs & validator', description: 'label, input, textarea, validator', Component: InputsDemo },
    { title: 'Selectors', description: 'select, calendar, file-input, filter', Component: SelectorsDemo },
    { title: 'Binary controls', description: 'checkbox, radio, toggle, swap', Component: BinaryControlsDemo },
    { title: 'Range & rating', description: 'range, rating', Component: RangeRatingDemo },
    { title: 'Fieldset & theme controller', description: 'fieldset, theme-controller', Component: FieldsetThemeDemo },
  ]

  return (
    <Section
      eyebrow="Forms"
      title="Inputs, selectors, and toggles"
      description="Everything from buttons to validators, calendars, filters, and DaisyUI's theme-controller radios."
    >
      {demos.map((demo) => (
        <ExampleCard key={demo.title} title={demo.title} description={demo.description}>
          <demo.Component />
        </ExampleCard>
      ))}
    </Section>
  )
}

export default FormsSection
