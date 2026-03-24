import { motion } from 'motion/react'
import { HLSVideo } from './HLSVideo'

export function CTAFooter() {
  return (
    <section id="pricing" className="relative overflow-hidden" style={{ paddingTop: '8rem', paddingBottom: '8rem' }}>
      {/* Background HLS video */}
      <HLSVideo
        src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Fades */}
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-16 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            color: '#fff',
            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
          }}
        >
          Your next website starts here.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-md"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.875rem',
          }}
        >
          Book a free strategy call. See what AI-powered design can do.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center gap-4 mt-8"
        >
          <button
            className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors cursor-pointer"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Book a Call
          </button>
          <button
            className="bg-white text-black rounded-full px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors cursor-pointer"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            View Pricing
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <div
        className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 lg:px-24"
        style={{ marginTop: '8rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}
      >
        <span style={{ fontFamily: "'Barlow', sans-serif", color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
          &copy; 2026 Studio
        </span>
        <div className="flex gap-6 mt-4 md:mt-0">
          {['Privacy', 'Terms', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-white/60 transition-colors"
              style={{ fontFamily: "'Barlow', sans-serif", color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
