import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl border border-white/20 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          React + Vite + Tailwind
        </h1>
        <p className="text-white/80 text-lg mb-8">
          Edit <code className="bg-white/20 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
        </p>
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
        >
          Count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
