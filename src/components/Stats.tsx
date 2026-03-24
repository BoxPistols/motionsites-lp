import { motion } from 'motion/react'
import { HLSVideo } from './HLSVideo'

const stats = [
  { value: '200+', label: 'Sites launched' },
  { value: '98%', label: 'Client satisfaction' },
  { value: '3.2x', label: 'More conversions' },
  { value: '5 days', label: 'Average delivery' },
]

export function Stats() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      {/* Background HLS video */}
      <HLSVideo
        src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{ filter: 'saturate(0)' }}
      />

      {/* Fades */}
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative z-10 liquid-glass rounded-3xl mx-6 md:mx-16 lg:mx-24 max-w-5xl"
        style={{ margin: '0 auto', padding: 'clamp(2rem, 5vw, 4rem)' }}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  color: '#fff',
                  fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
                }}
              >
                {stat.value}
              </div>
              <div
                className="mt-2"
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 300,
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.875rem',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
