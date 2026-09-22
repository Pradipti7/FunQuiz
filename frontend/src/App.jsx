import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import TopicSelectionPage from './pages/TopicSelectionPage'
import DifficultyPage from './pages/DifficultyPage'
import QuizPage from './pages/QuizPage'

function App() {
  const [page, setPage] = useState('landing')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)
  const [selectedDifficulty, setSelectedDifficulty] = useState(null)

  const isKpop = selectedCategory?.id === 'kpop'

  if (page === 'landing') {
    return <LandingPage onEnter={() => setPage('home')} />
  }

  if (page === 'quiz' && selectedCategory && selectedTopic) {
    return (
      <QuizPage
        category={selectedCategory}
        topic={selectedTopic}
        difficulty={selectedDifficulty}
        onBack={() => {
          if (isKpop) {
            setSelectedDifficulty(null)
            setPage('difficulty')
          } else {
            setSelectedTopic(null)
            setPage('topic')
          }
        }}
      />
    )
  }

  if (page === 'difficulty' && isKpop && selectedCategory && selectedTopic) {
    return (
      <DifficultyPage
        category={selectedCategory}
        topic={selectedTopic}
        onSelectDifficulty={(difficulty) => {
          setSelectedDifficulty(difficulty)
          setPage('quiz')
        }}
        onBack={() => {
          setSelectedTopic(null)
          setPage('topic')
        }}
      />
    )
  }

  if (page === 'topic' && selectedCategory) {
    return (
      <TopicSelectionPage
        category={selectedCategory}
        onSelectTopic={(topic) => {
          setSelectedTopic(topic)
          if (isKpop) {
            setPage('difficulty')
          } else {
            setPage('quiz')
          }
        }}
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
        setPage('topic')
      }}
      onBack={() => setPage('landing')}
    />
  )
}

export default App
