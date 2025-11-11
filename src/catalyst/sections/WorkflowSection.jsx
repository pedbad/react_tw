import WorkflowStepper from '../components/WorkflowStepper.jsx'
import { workflowSteps } from '../data/workflows.js'

function WorkflowSection() {
  return (
    <section className="card">
      <div className="card-header">
        <span className="caption text-text-tertiary">Workflow builder</span>
        <h2 className="heading-sm">Drag, assign, launch</h2>
        <p className="body-sm">Catalyst keeps assignments, owners, and launch windows synced across teams.</p>
      </div>
      <div className="card-body">
        <WorkflowStepper steps={workflowSteps} />
      </div>
    </section>
  )
}

export default WorkflowSection
