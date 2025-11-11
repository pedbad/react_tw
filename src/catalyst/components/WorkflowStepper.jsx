function WorkflowStepper({ steps = [] }) {
  return (
    <ol className="space-y-3">
      {steps.map((step) => (
        <li key={step.id} className="flex items-center gap-4 rounded-2xl border border-border-subtle bg-surface-base px-4 py-3">
          <div className="h-11 w-11 rounded-2xl bg-primary/10 text-primary font-semibold grid place-items-center">{step.id}</div>
          <div className="flex-1">
            <p className="font-semibold text-text-primary">{step.title}</p>
            <p className="body-sm">Owned by {step.owner}</p>
          </div>
          <div className="text-right">
            <p className="badge badge-primary capitalize">{step.status}</p>
            <p className="caption text-text-secondary normal-case">{step.eta}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default WorkflowStepper
