import { Section, ExampleCard } from '../components/Section.jsx'
import { useState } from 'react'

function InputsDemo() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium text-text-primary">Course title</label>
        <input
          type="text"
          placeholder="Leadership 201"
          className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium text-text-primary">Description</label>
        <textarea
          rows="3"
          placeholder="Enter a short summary"
          className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-primary">Category</label>
          <select className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
            <option>Product</option>
            <option>Design</option>
            <option>Engineering</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-text-primary">Level</label>
          <input
            type="number"
            min="1"
            max="5"
            defaultValue="3"
            className="w-full rounded-md border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-900 focus:outline-none dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
          />
        </div>
      </div>
    </form>
  )
}

function TogglesDemo() {
  const [notify, setNotify] = useState(true)
  return (
    <div className="space-y-4">
      <label className="flex items-center justify-between rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
        <div>
          <p className="text-sm font-medium text-text-primary">Email notifications</p>
          <p className="text-xs text-text-secondary">Send updates about course activity</p>
        </div>
        <button
          type="button"
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${notify ? 'bg-slate-900' : 'bg-slate-300 dark:bg-slate-700'}`}
          onClick={() => setNotify((value) => !value)}
        >
          <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${notify ? 'translate-x-5' : 'translate-x-1'}`} />
        </button>
      </label>

      <div className="flex flex-wrap gap-6">
        <label className="inline-flex items-center gap-2 text-sm text-text-primary">
          <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" defaultChecked />
          Draft mode
        </label>
        <label className="inline-flex items-center gap-2 text-sm text-text-primary">
          <input type="radio" name="visibility" className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-900" defaultChecked />
          Public
        </label>
        <label className="inline-flex items-center gap-2 text-sm text-text-primary">
          <input type="radio" name="visibility" className="h-4 w-4 border-slate-300 text-slate-900 focus:ring-slate-900" />
          Private
        </label>
      </div>
    </div>
  )
}

function SliderDemo() {
  const [value, setValue] = useState(45)
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-text-primary">Progress ({value}%)</p>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(event) => setValue(Number(event.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-slate-900 dark:bg-slate-700"
      />
      <div className="flex items-center justify-between text-xs text-text-secondary">
        <span>0%</span>
        <span>100%</span>
      </div>
    </div>
  )
}

function FormsSection() {
  const demos = [
    { title: 'Inputs & textarea', description: 'Text, textarea, and selects', Component: InputsDemo },
    { title: 'Toggles & radios', description: 'Switch + checkbox + radio', Component: TogglesDemo },
    { title: 'Slider', description: 'Range input feedback', Component: SliderDemo },
  ]

  return (
    <Section eyebrow="Forms" title="shadcn/ui form primitives" description="Filled inputs, toggles, radios, and sliders built with Tailwind.">
      {demos.map((demo) => (
        <ExampleCard key={demo.title} title={demo.title} description={demo.description}>
          <demo.Component />
        </ExampleCard>
      ))}
    </Section>
  )
}

export default FormsSection
