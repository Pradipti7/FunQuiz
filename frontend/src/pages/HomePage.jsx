import { categories } from '../data/categories'

export default function HomePage({ onSelectCategory, onBack }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950 overflow-hidden">
      {/* Radial glow overlays */}
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

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">
            Pick a Category
          </h1>
          <p className="text-white/50 text-lg">
            Choose your fandom and test your knowledge
          </p>
        </div>

        {/* Category Grid */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat)}
              className={`group relative bg-gradient-to-br ${cat.color} rounded-2xl p-6 text-left transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl active:scale-[0.98] cursor-pointer overflow-hidden`}
            >
              {/* Shine overlay on hover */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />

              <div className="relative z-10">
                <span className="text-4xl block mb-3">{cat.emoji}</span>
                <h2 className="text-white text-xl font-bold mb-1">{cat.name}</h2>
                <p className="text-white/70 text-sm">{cat.description}</p>
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
        <div className="max-w-3xl mx-auto mt-10 text-center">
          <p className="text-white/30 text-sm">
            {categories.length} categories available
          </p>
        </div>
      </div>
    </div>
  )
}
