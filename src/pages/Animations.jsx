import { useMemo } from 'react'

const animationVariants = [
  {
    name: 'tilt',
    title: '3D tilt reveal',
    description: 'Showcase depth with perspective and layered overlays.',
  },
  {
    name: 'fade',
    title: 'Soft fade',
    description: 'Blend imagery and copy using subtle opacity shifts.',
  },
  {
    name: 'zoom',
    title: 'Hero zoom',
    description: 'Push photography to the forefront with aggressive scaling.',
  },
  {
    name: 'slide',
    title: 'Slide-up content',
    description: 'Slide cards upward to hint at interactive drawers.',
  },
  {
    name: 'glow',
    title: 'Neon glow',
    description: 'Pair gradients and glow for premium highlight moments.',
  },
  {
    name: 'flip',
    title: 'Flip perspective',
    description: 'Simulate card flipping with opposing rotations.',
  },
  {
    name: 'blur',
    title: 'Focus blur',
    description: 'Defocus photography to emphasize accompanying copy.',
  },
  {
    name: 'pulse',
    title: 'Pulse highlight',
    description: 'Use pulsing overlays to draw attention to hero cards.',
  },
]

function Animations() {
  const cards = useMemo(
    () =>
      Array.from({ length: 20 }, (_, index) => {
        const variant = animationVariants[index % animationVariants.length]
        return {
          id: index + 1,
          title: `${variant.title}`,
          description: variant.description,
          image: `https://picsum.photos/seed/tw-${index}/600/400`,
          variant: variant.name,
        }
      }),
    [],
  )

  return (
    <section className="animations-grid">
      {cards.map((card) => (
        <article key={card.id} className={`animation-card animation-card--${card.variant}`}>
          <div className="animation-card-inner group">
            <div className="animation-card-media">
              <img src={card.image} alt={card.title} loading="lazy" />
              <span className="animation-card-overlay" />
            </div>
            <div className="animation-card-body">
              <p className="caption">Showcase #{card.id}</p>
              <h3 className="animation-card-title">{card.title}</h3>
              <p className="body-sm">{card.description}</p>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Animations
