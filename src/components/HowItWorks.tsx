import { ArrowUpRight } from 'lucide-react'
import { Badge } from './Badge'
import { HLSVideo } from './HLSVideo'

export function HowItWorks() {
  return (
    <section id="process" className="relative overflow-hidden" style={{ minHeight: 700 }}>
      {/* Background HLS video */}
      <HLSVideo
        src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Fades */}
      <div className="video-fade-top" />
      <div className="video-fade-bottom" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-16 lg:px-24" style={{ minHeight: 700, paddingTop: '8rem', paddingBottom: '8rem' }}>
        <Badge>How It Works</Badge>
        <h2
          className="mt-2"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            color: '#fff',
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            letterSpacing: '-0.025em',
            lineHeight: 0.9,
          }}
        >
          You dream it. We ship it.
        </h2>
        <p
          className="mt-6 max-w-xl"
          style={{
            fontFamily: "'Barlow', sans-serif",
            fontWeight: 300,
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.875rem',
            lineHeight: 1.6,
          }}
        >
          Share your vision. Our AI handles the rest—wireframes, design, code,
          launch. All in days, not quarters.
        </p>
        <button
          className="liquid-glass-strong rounded-full px-6 py-3 text-sm font-medium text-white flex items-center gap-2 mt-8 hover:bg-white/10 transition-colors cursor-pointer"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Get Started
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  )
}
