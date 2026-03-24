import { motion } from 'motion/react'
import { Badge } from './Badge'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, Luminary',
    quote:
      'A complete rebuild in five days. Our new site converts 3x better and looks like it cost ten times what we paid.',
  },
  {
    name: 'Marcus Webb',
    role: 'Head of Growth, Arcline',
    quote:
      "Conversions up 4x in the first month. The AI-driven optimization is unlike anything we've seen.",
  },
  {
    name: 'Elena Voss',
    role: 'Brand Director, Helix',
    quote:
      "They didn't just design our site—they understood our brand better than we did. The result is stunning.",
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24" style={{ background: '#000' }}>
      <div className="text-center mb-16">
        <Badge>What They Say</Badge>
        <h2
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            color: '#fff',
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
          }}
        >
          Don't take our word for it.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="liquid-glass rounded-2xl p-8"
          >
            <p
              className="mb-6"
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                color: 'rgba(255,255,255,0.8)',
                fontSize: '0.875rem',
                fontStyle: 'italic',
                lineHeight: 1.6,
              }}
            >
              &ldquo;{t.quote}&rdquo;
            </p>
            <div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 500,
                  color: '#fff',
                  fontSize: '0.875rem',
                }}
              >
                {t.name}
              </div>
              <div
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.75rem',
                }}
              >
                {t.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
