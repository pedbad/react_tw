import HeroBanner from '../components/HeroBanner.jsx'

function HeroSection() {
  return (
    <HeroBanner
      eyebrow="Catalyst UI kit"
      title="Sample Catalyst UI components"
      description="Catalyst ships the command centers, dashboards, and workflows you need to keep multi-layered education programs on track."
      primaryAction="Launch workspace"
      secondaryAction="View docs"
      meta={{ label: 'Next release', value: 'v0.7 Polaris', helper: 'Shipping Friday • 14 components' }}
    />
  )
}

export default HeroSection
