import React from 'react'
import { Hero } from './components/Hero'
import { Connect } from './components/Connect'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Connect />
    </main>
  )
}

export default App
