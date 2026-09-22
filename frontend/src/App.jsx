import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import QuizPage from './pages/QuizPage'

function App() {
  const [page, setPage] = useState('landing')
  const [selectedCategory, setSelectedCategory] = useState(null)

  if (page === 'landing') {
    return <LandingPage onEnter={() => setPage('home')} />
  }

  if (page === 'quiz' && selectedCategory) {
    return (
      <QuizPage
        category={selectedCategory}
        onBack={() => {
          setSelectedCategory(null)
          setPage('home')
        }}
      />
    )
  }

  return (
    <HomePage
      onSelectCategory={(category) => {
        setSelectedCategory(category)
        setPage('quiz')
      }}
      onBack={() => setPage('landing')}
    />
  )
}

export default App
