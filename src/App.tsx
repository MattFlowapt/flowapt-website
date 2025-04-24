import React from 'react'
import { Hero } from './components/Hero'
import { Connect } from './components/Connect'
import { Navbar } from './components/Navbar'
import { AnimatedTestimonialsBasic } from './components/blocks/demo-testimonials'
import { FeaturesSectionWithHoverEffectsDemo } from './components/blocks/features-section-demo'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AnimatedTestimonialsBasic />
      <FeaturesSectionWithHoverEffectsDemo />
      <Connect />
    </main>
  )
}

export default App
