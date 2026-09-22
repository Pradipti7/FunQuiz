export default function QuizPage({ category, topic, onBack }) {
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
          <p className="text-white/30 text-sm">{category.emoji} {category.name}</p>
          <p className="text-white/20 text-sm mt-8">Quiz coming soon...</p>
        </div>
      </div>
    </div>
  )
}
