import { useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {

  return (
    <main>
      <Navbar>
        <Home />
      </Navbar>
    </main>
  )
}

export default App
