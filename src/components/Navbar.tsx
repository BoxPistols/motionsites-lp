import { ArrowUpRight } from 'lucide-react'

const navLinks = ['Home', 'Services', 'Work', 'Process', 'Pricing']

export function Navbar() {
  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center" style={{ backdropFilter: 'blur(10px)' }}>
          <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: '#fff', fontSize: '1.25rem' }}>M</span>
        </div>

        {/* Nav pill */}
        <div className="hidden md:flex liquid-glass rounded-full px-6 py-2.5 gap-6">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium hover:text-white transition-colors"
              style={{ fontFamily: "'Barlow', sans-serif", color: 'rgba(255,255,255,0.9)' }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <button
          className="bg-white text-black rounded-full px-5 py-2.5 text-sm font-medium flex items-center gap-1.5 hover:bg-white/90 transition-colors cursor-pointer"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          Get in Touch
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </nav>
  )
}
