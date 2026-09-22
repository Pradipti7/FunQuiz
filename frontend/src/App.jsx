import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'

function App() {
  const [page, setPage] = useState('landing')

  if (page === 'landing') {
    return <LandingPage onEnter={() => setPage('home')} />
  }

  return <HomePage />
}

export default App
