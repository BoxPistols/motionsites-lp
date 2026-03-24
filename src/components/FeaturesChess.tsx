import { motion } from 'motion/react'
import { Badge } from './Badge'

const rows = [
  {
    title: 'Designed to convert. Built to perform.',
    description:
      'Every pixel is intentional. Our AI studies what works across thousands of top sites—then builds yours to outperform them all.',
    button: 'Learn more',
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
    reverse: false,
  },
  {
    title: 'It gets smarter. Automatically.',
    description:
      'Your site evolves on its own. AI monitors every click, scroll, and conversion—then optimizes in real time. No manual updates. Ever.',
    button: 'See how it works',
    imageUrl:
      'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=600&h=400&fit=crop',
    reverse: true,
  },
]

export function FeaturesChess() {
  return (
    <section id="services" className="py-24 px-6 md:px-16 lg:px-24" style={{ background: '#000' }}>
      <div className="text-center mb-16">
        <Badge>Capabilities</Badge>
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
          Pro features. Zero complexity.
        </h2>
      </div>

      <div className="flex flex-col gap-20 max-w-6xl mx-auto">
        {rows.map((row, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col gap-12 items-center ${
              row.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
            }`}
          >
            {/* Text */}
            <div className="flex-1" style={{ textAlign: 'left' }}>
              <h3
                className="mb-4"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  color: '#fff',
                  fontSize: 'clamp(1.5rem, 3vw, 1.875rem)',
                  letterSpacing: '-0.025em',
                  lineHeight: 0.9,
                }}
              >
                {row.title}
              </h3>
              <p
                className="mb-6"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                }}
              >
                {row.description}
              </p>
              <button
                className="liquid-glass-strong rounded-full px-5 py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
                style={{ fontFamily: "'Barlow', sans-serif" }}
              >
                {row.button}
              </button>
            </div>

            {/* Image */}
            <div className="flex-1 w-full liquid-glass rounded-2xl overflow-hidden">
              <img
                src={row.imageUrl}
                alt={row.title}
                className="w-full h-auto object-cover"
                style={{ display: 'block' }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
