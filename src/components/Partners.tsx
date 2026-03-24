import { Badge } from './Badge'

const partners = ['Stripe', 'Vercel', 'Linear', 'Notion', 'Figma']

export function Partners() {
  return (
    <section className="flex flex-col items-center py-20 px-6" style={{ background: '#000' }}>
      <Badge>Trusted by the teams behind</Badge>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mt-6">
        {partners.map((name) => (
          <span
            key={name}
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              color: '#fff',
              fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
            }}
          >
            {name}
          </span>
        ))}
      </div>
    </section>
  )
}
