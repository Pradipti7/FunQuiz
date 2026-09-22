import { topics } from '../data/topics'

export default function TopicSelectionPage({ category, onSelectTopic, onBack }) {
  const categoryTopics = topics[category.id] || []

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
            <span className="text-4xl sm:text-5xl">{category.emoji}</span>
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
                {category.name}
              </h1>
              <p className="text-white/50 text-lg">{category.description}</p>
            </div>
          </div>
          <p className="text-white/40 text-sm mt-4">
            Pick a topic to be quizzed on
          </p>
        </div>

        {/* Topic Grid */}
        <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {categoryTopics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-5 text-left border border-white/10 hover:border-white/25 hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer overflow-hidden"
            >
              {/* Shine overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/0 transition-all duration-300" />

              <div className="relative z-10">
                <span className="text-3xl block mb-2">{topic.emoji}</span>
                <h3 className="text-white font-bold text-base mb-0.5">{topic.name}</h3>
                <p className="text-white/50 text-xs">{topic.description}</p>
              </div>

              {/* Arrow on hover */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <svg className="w-4 h-4 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Footer hint */}
        <div className="max-w-3xl mx-auto mt-10 text-center">
          <p className="text-white/30 text-sm">
            {categoryTopics.length} topics available
          </p>
        </div>
      </div>
    </div>
  )
}
