import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import Features from './Features.jsx'
import Workflow from './Workflow.jsx'
import Pricing from './Pricing.jsx'
import Footer from './Footer.jsx'
import Particles from './Particles.jsx'
import { useScrollProgress } from './hooks.js'

export default function App() {
  const progress = useScrollProgress()

  return (
    <div className="app">
      <Particles />
      <div className="scrollbar" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
