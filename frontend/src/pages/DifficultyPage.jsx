const difficulties = [
  {
    id: 'beginner',
    emoji: '🌱',
    name: 'Beginner',
    description: 'Just getting started',
    color: 'from-emerald-500 to-teal-500',
    tagline: 'How well do you know them?',
  },
  {
    id: 'intermediate',
    emoji: '🔥',
    name: 'Intermediate',
    description: 'Know the basics & more',
    color: 'from-amber-500 to-orange-500',
    tagline: 'Ready for a challenge?',
  },
  {
    id: 'pro',
    emoji: '👑',
    name: 'Pro',
    description: 'True stan level',
    color: 'from-pink-500 to-rose-500',
    tagline: 'Think you know everything?',
  },
]

export default function DifficultyPage({ category, topic, onSelectDifficulty, onBack }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.2),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.15),transparent_50%)]" />

      <div className="relative z-10 min-h-screen px-4 py-8 sm:py-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-10">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/50 hover:text-white/80 transition-colors mb-8 cursor-pointer"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>

          <div className="flex items-center gap-4 mb-3">
            <span className="text-4xl sm:text-5xl">{topic.emoji}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                {topic.name}
              </h1>
              <p className="text-white/50 text-sm">{category.emoji} {category.name}</p>
            </div>
          </div>
          <p className="text-white/40 text-sm mt-4">
            How well do you know them?
          </p>
        </div>

        {/* Difficulty Cards */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {difficulties.map((diff) => (
            <button
              key={diff.id}
              onClick={() => onSelectDifficulty(diff)}
              className={`group relative bg-gradient-to-br ${diff.color} rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl active:scale-[0.97] cursor-pointer overflow-hidden`}
            >
              {/* Shine overlay */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />

              <div className="relative z-10">
                <span className="text-4xl sm:text-5xl block mb-4">{diff.emoji}</span>
                <h2 className="text-white text-xl sm:text-2xl font-bold mb-1">{diff.name}</h2>
                <p className="text-white/70 text-sm mb-2">{diff.description}</p>
                <p className="text-white/50 text-xs italic">{diff.tagline}</p>
              </div>

              {/* Arrow on hover */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <svg className="w-5 h-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Footer hint */}
        <div className="max-w-2xl mx-auto mt-10 text-center">
          <p className="text-white/30 text-sm">
            Higher difficulty = tougher questions
          </p>
        </div>
      </div>
    </div>
  )
}
