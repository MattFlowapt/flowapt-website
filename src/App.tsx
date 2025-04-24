import React from 'react'
import { Hero } from './components/Hero'
import { Connect } from './components/Connect'
import { Navbar } from './components/Navbar'
import { AnimatedTestimonialsBasic } from './components/blocks/demo-testimonials'

function App() {
  return (
    <main className="min-h-screen overflow-x-hidden [&>*]:mb-0">
      <Navbar />
      <Hero />
      <AnimatedTestimonialsBasic />
      <Connect />
    </main>
  )
}

export default App
