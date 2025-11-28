import { useState } from 'react'
import './App.css'
import Nav from './compoonents/nav'
import Hero from './compoonents/hero'
import LiquidEther from './compoonents/LiquidEther'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <div className="mt-4">
        <Hero />
      </div>
      <LiquidEther />
    </>
  )
}

export default App
