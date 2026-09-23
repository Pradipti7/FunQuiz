import { useState, useMemo } from 'react'
import { quizQuestions } from '../data/questions'

function shuffle(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export default function QuizPage({ category, topic, difficulty, onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [answers, setAnswers] = useState([])

  const questions = useMemo(() => {
    const q = quizQuestions[topic.id]?.[difficulty?.id] || []
    return shuffle(q).map((item) => {
      const correctOption = item.options[item.correct]
      const shuffledOptions = shuffle(item.options)
      return {
        ...item,
        options: shuffledOptions,
        correct: shuffledOptions.indexOf(correctOption),
      }
    })
  }, [topic.id, difficulty?.id])

  if (questions.length === 0) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.2),transparent_50%)]" />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          <button
            onClick={onBack}
            className="absolute top-6 left-6 flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <div className="text-center">
            <span className="text-6xl block mb-4">{topic.emoji}</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">{topic.name}</h1>
            <p className="text-white/50 text-lg mb-2">{topic.description}</p>
            <p className="text-white/30 text-sm mt-4">{category.emoji} {category.name}</p>
            {difficulty && <p className="text-white/30 text-sm">{difficulty.emoji} {difficulty.name}</p>}
            <p className="text-white/40 text-sm mt-8">No questions available yet for this topic</p>
          </div>
        </div>
      </div>
    )
  }

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correct
  const totalQuestions = questions.length

  const handleAnswer = (index) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    setAnswers([...answers, { question: currentQuestion, selected: index, correct: question.correct }])
    if (index === question.correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setShowResult(true)
    }
  }

  const getPercentage = () => Math.round((score / totalQuestions) * 100)

  const getMessage = () => {
    const pct = getPercentage()
    if (pct === 100) return 'Perfect! You are a true stan!'
    if (pct >= 80) return 'Amazing! You know your stuff!'
    if (pct >= 60) return 'Good job! Keep learning!'
    if (pct >= 40) return 'Not bad! Room to improve!'
    return 'Keep studying! You\'ll get there!'
  }

  if (showResult) {
    return (
      <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.2),transparent_50%)]" />

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-md w-full">
            <span className="text-6xl block mb-4">{getPercentage() >= 80 ? '🏆' : getPercentage() >= 50 ? '👍' : '💪'}</span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">Quiz Complete!</h1>
            <p className="text-white/50 text-lg mb-6">{topic.emoji} {topic.name}</p>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 border border-white/10">
              <div className="text-6xl font-extrabold text-white mb-2">{score}/{totalQuestions}</div>
              <p className="text-white/60 text-lg">{getPercentage()}% correct</p>
              <p className="text-white/80 mt-3">{getMessage()}</p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => {
                  setCurrentQuestion(0)
                  setSelectedAnswer(null)
                  setScore(0)
                  setShowResult(false)
                  setAnswers([])
                }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-full transition-all cursor-pointer"
              >
                Try Again
              </button>
              <button
                onClick={onBack}
                className="bg-white text-purple-800 font-bold py-3 px-6 rounded-full hover:bg-purple-100 transition-all cursor-pointer"
              >
                Back to Topics
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.2),transparent_50%)]" />

      <div className="relative z-10 min-h-screen flex flex-col items-center px-4 py-8">
        {/* Header */}
        <div className="w-full max-w-xl mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mb-6 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          {/* Progress bar */}
          <div className="flex items-center justify-between text-white/50 text-sm mb-2">
            <span>{topic.emoji} {topic.name}</span>
            <span>{currentQuestion + 1} / {totalQuestions}</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="w-full max-w-xl flex-1 flex flex-col justify-center">
          <h2 className="text-white text-xl sm:text-2xl font-bold mb-6 leading-relaxed">
            {question.question}
          </h2>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {question.options.map((option, index) => {
              let style = 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
              if (selectedAnswer !== null) {
                if (index === question.correct) {
                  style = 'bg-emerald-500/20 border-emerald-500/50'
                } else if (index === selectedAnswer && index !== question.correct) {
                  style = 'bg-red-500/20 border-red-500/50'
                } else {
                  style = 'bg-white/5 border-white/10 opacity-50'
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={selectedAnswer !== null}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${style} ${
                    selectedAnswer !== null ? 'cursor-default' : ''
                  }`}
                >
                  <span className="text-white/80">
                    <span className="text-white/40 mr-2">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Next button */}
          {selectedAnswer !== null && (
            <button
              onClick={handleNext}
              className="mt-6 w-full bg-white text-purple-800 font-bold py-3 rounded-full hover:bg-purple-100 transition-all cursor-pointer"
            >
              {currentQuestion < totalQuestions - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
