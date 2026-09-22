import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import TopicSelectionPage from './pages/TopicSelectionPage'
import QuizPage from './pages/QuizPage'

function App() {
  const [page, setPage] = useState('landing')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedTopic, setSelectedTopic] = useState(null)

  if (page === 'landing') {
    return <LandingPage onEnter={() => setPage('home')} />
  }

  if (page === 'quiz' && selectedCategory && selectedTopic) {
    return (
      <QuizPage
        category={selectedCategory}
        topic={selectedTopic}
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
          setPage('quiz')
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
