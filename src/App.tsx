import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Partners } from './components/Partners'
import { HowItWorks } from './components/HowItWorks'
import { FeaturesChess } from './components/FeaturesChess'
import { FeaturesGrid } from './components/FeaturesGrid'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { CTAFooter } from './components/CTAFooter'

function App() {
  return (
    <div className="bg-black overflow-visible">
      <Navbar />
      <Hero />
      <Partners />
      <HowItWorks />
      <FeaturesChess />
      <FeaturesGrid />
      <Stats />
      <Testimonials />
      <CTAFooter />
    </div>
  )
}

export default App
