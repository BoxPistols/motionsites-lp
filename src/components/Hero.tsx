import { ArrowUpRight, Play } from 'lucide-react'
import { motion } from 'motion/react'
import { BlurText } from './BlurText'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', background: '#000' }}
    >
      {/* Animated gradient orbs */}
      <div className="hero-orb hero-orb-1" />
      <div className="hero-orb hero-orb-2" />
      <div className="hero-orb hero-orb-3" />

      {/* Subtle grid */}
      <div className="hero-grid" />

      {/* Background video (fallback behind orbs) */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        style={{ zIndex: 0, mixBlendMode: 'screen' }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_ebc0f10e-7298-4a88-a498-2e90960e2803/hf_20260307_f38c22bf_0.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Bottom gradient fade to black */}
      <div className="video-fade-bottom" style={{ height: 400 }} />

      {/* Heading glow */}
      <div className="hero-glow" />

      {/* Content */}
      <div
        className="relative flex flex-col items-center text-center px-6"
        style={{ zIndex: 10, paddingTop: '20vh', paddingBottom: '15vh' }}
      >
        {/* Badge pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 mb-10"
        >
          <span
            className="text-xs font-medium px-2.5 py-0.5 rounded-full"
            style={{ fontFamily: "'Barlow', sans-serif", background: '#fff', color: '#000' }}
          >
            New
          </span>
          <span className="text-sm" style={{ fontFamily: "'Barlow', sans-serif", color: 'rgba(255,255,255,0.8)' }}>
            Introducing AI-powered web design.
          </span>
        </motion.div>

        {/* Heading */}
        <h1
          className="max-w-5xl relative"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            color: '#fff',
            lineHeight: 0.88,
            letterSpacing: '-3px',
            fontSize: 'clamp(3.5rem, 9vw, 7rem)',
          }}
        >
          <BlurText text="The Website Your Brand Deserves" delay={80} />
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 max-w-xl"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            color: 'rgba(255,255,255,0.55)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
          }}
        >
          Stunning design. Blazing performance. Built by AI, refined by experts.
          This is web design, wildly reimagined.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="flex items-center gap-5 mt-10"
        >
          <button
            className="liquid-glass-strong rounded-full px-7 py-3.5 text-sm font-medium text-white flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            className="text-sm font-medium flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
            style={{ fontFamily: "'Barlow', sans-serif", color: 'rgba(255,255,255,0.7)' }}
          >
            Watch the Film
            <Play className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
