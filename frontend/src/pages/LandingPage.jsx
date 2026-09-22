const floatingEmojis = [
  { emoji: '🎵', left: '5%', delay: '0s', duration: '12s', size: '2rem' },
  { emoji: '🎬', left: '15%', delay: '2s', duration: '15s', size: '2.5rem' },
  { emoji: '⚡', left: '25%', delay: '5s', duration: '11s', size: '1.8rem' },
  { emoji: '🎮', left: '35%', delay: '1s', duration: '14s', size: '2.2rem' },
  { emoji: '🌟', left: '45%', delay: '3s', duration: '13s', size: '2rem' },
  { emoji: '🎭', left: '55%', delay: '7s', duration: '16s', size: '2.4rem' },
  { emoji: '🎶', left: '65%', delay: '4s', duration: '10s', size: '1.9rem' },
  { emoji: '✨', left: '75%', delay: '6s', duration: '12s', size: '2.1rem' },
  { emoji: '🏆', left: '85%', delay: '2s', duration: '14s', size: '2.3rem' },
  { emoji: '🎤', left: '92%', delay: '8s', duration: '11s', size: '2rem' },
  { emoji: '💫', left: '10%', delay: '9s', duration: '15s', size: '1.7rem' },
  { emoji: '🎵', left: '50%', delay: '11s', duration: '13s', size: '2.2rem' },
  { emoji: '⚔️', left: '70%', delay: '3s', duration: '12s', size: '1.6rem' },
  { emoji: '🌸', left: '30%', delay: '6s', duration: '14s', size: '2rem' },
  { emoji: '🎬', left: '80%', delay: '10s', duration: '11s', size: '2.1rem' },
]

import { categories } from '../data/categories'

export default function LandingPage({ onEnter }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-950 overflow-hidden">
      {/* Radial glow overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.3),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.25),transparent_50%)]" />

      {/* Floating emojis */}
      {floatingEmojis.map((item, i) => (
        <div
          key={i}
          className="floating-emoji opacity-0"
          style={{
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
            fontSize: item.size,
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-6xl sm:text-8xl font-extrabold text-white mb-4 tracking-tight">
            <span className="shimmer-text">Qizz</span>
          </h1>
          <p className="text-white/70 text-lg sm:text-2xl max-w-md mx-auto leading-relaxed">
            How well do you <span className="text-pink-400 font-semibold">really</span> know your{' '}
            <span className="text-purple-400 font-semibold">fandoms</span>?
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-white/40 text-sm">
            <span>K-pop</span>
            <span>•</span>
            <span>BL</span>
            <span>•</span>
            <span>Anime</span>
            <span>•</span>
            <span>Bollywood</span>
            <span>•</span>
            <span>Harry Potter</span>
            <span>•</span>
            <span>Gaming</span>
            <span>•</span>
            <span>K-Drama</span>
          </div>
        </div>

        {/* Category preview cards */}
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-4 mb-12 max-w-3xl w-full">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="glow-card bg-white/10 backdrop-blur-sm rounded-2xl p-3 sm:p-4 flex flex-col items-center gap-2 border border-white/10 hover:border-white/25 transition-all duration-300 hover:scale-105 hover:bg-white/15 cursor-default"
            >
              <span className="text-2xl sm:text-3xl">{cat.emoji}</span>
              <span className="text-white/80 text-xs sm:text-sm font-medium">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={onEnter}
          className="group relative bg-white text-purple-800 font-bold text-lg sm:text-xl px-12 py-4 rounded-full shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Start Quiz
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </button>

        {/* Bottom hint */}
        <p className="text-white/30 text-sm mt-8">
          7 categories • Endless fun
        </p>
      </div>
    </div>
  )
}
