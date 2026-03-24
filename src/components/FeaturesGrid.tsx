import { Zap, Palette, BarChart3, Shield } from 'lucide-react'
import { motion } from 'motion/react'
import { Badge } from './Badge'

const features = [
  {
    icon: Zap,
    title: 'Days, Not Months',
    description: 'Concept to launch at a pace that redefines fast.',
  },
  {
    icon: Palette,
    title: 'Obsessively Crafted',
    description: 'Every detail considered. Every element refined.',
  },
  {
    icon: BarChart3,
    title: 'Built to Convert',
    description: 'Layouts informed by data. Decisions backed by performance.',
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    description: 'Enterprise-grade protection comes standard.',
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24" style={{ background: '#000' }}>
      <div className="text-center mb-16">
        <Badge>Why Us</Badge>
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
          The difference is everything.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="liquid-glass rounded-2xl p-6"
          >
            <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-4">
              <feature.icon className="w-5 h-5 text-white" />
            </div>
            <h3
              className="mb-2"
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: 'italic',
                color: '#fff',
                fontSize: '1.125rem',
              }}
            >
              {feature.title}
            </h3>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontWeight: 300,
                color: 'rgba(255,255,255,0.6)',
                fontSize: '0.875rem',
              }}
            >
              {feature.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
