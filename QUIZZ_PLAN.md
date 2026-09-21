# Qizz - Fun Quiz Website

## Tech Stack

- **Frontend:** React 19 + Vite 8
- **Styling:** Tailwind CSS v4
- **Routing:** React Router DOM
- **Data Storage:** localStorage (no backend)

---

## Features List

### Core Quiz Features

1. **Category Selection Page** - Grid/cards for K-pop, BL, Anime, etc. with icons/illustrations
2. **Multiple Quiz Categories** - K-pop, BL, Anime, Bollywood, Harry Potter, Gaming, K-Drama, etc.
3. **Question Types** - Multiple choice, true/false, image-based ("guess the idol/character"), audio-based
4. **Timer per Question** - Countdown with visual progress bar for urgency
5. **Score Tracking** - Real-time score display during the quiz
6. **Difficulty Levels** - Easy / Medium / Hard per category
7. **Randomized Questions** - Shuffle questions and options each playthrough

### Results & Feedback

8. **Result Screen** - Score summary with grade/rank (e.g., "Ultimate K-pop Stan", "Anime Noob")
9. **Answer Review** - Show correct/incorrect answers after finishing
10. **Shareable Results Card** - Generate a visual card to screenshot/share
11. **Fun Personality Results** - "Which BTS member are you?" style quizzes

### Engagement & Fun

12. **Streak Bonus** - Consecutive correct answers multiply points
13. **Lifelines / Hints** - 50-50 (remove 2 wrong), skip question, extra time
14. **Sound Effects** - Correct/wrong buzz, timer tick (via Web Audio API)
15. **Animations** - Confetti on perfect score, shake on wrong answer (Framer Motion or CSS)
16. **Progress Bar** - Visual indicator of how far through the quiz you are
17. **Leaderboard** - Local leaderboard stored in localStorage

### Navigation & UX

18. **Landing Page** - Hero section with categories
19. **Quiz History** - Track past attempts per category in localStorage
20. **Dark/Light Mode Toggle** - Theme switcher
21. **Responsive Design** - Mobile-first layout
22. **Routing** - React Router for Home, Category, Quiz, Results pages

### Data (All Client-Side)

23. **JSON Quiz Data Files** - Static quizzes/ folder with question banks per category
24. **Easy to Add New Categories** - Just drop in a new JSON file
25. **Search/Filter Categories** - Search bar on home page

### Nice-to-Haves (Future)

26. **Multiplayer Mode** - Create room codes, share URL with friend
27. **Daily Challenge** - One quiz per day based on date seed
28. **Badges/Achievements** - Unlock based on performance (stored in localStorage)
29. **Quiz Creation Tool** - Let users create & share custom quizzes
30. **Image Round** - "Guess the anime character from the silhouette"

---

## Project Structure

```
src/
  components/
    CategoryCard.jsx
    QuizQuestion.jsx
    ProgressBar.jsx
    Timer.jsx
    ScoreDisplay.jsx
    ResultCard.jsx
    ShareCard.jsx
  pages/
    HomePage.jsx
    QuizPage.jsx
    ResultsPage.jsx
  data/
    kpop.js
    bl.js
    anime.js
    bollywood.js
    kpopGroups.js
  context/
    QuizContext.jsx
  utils/
    localStorage.js
    shuffle.js
  App.jsx
  main.jsx
  index.css
```

---

## Data Format

Each quiz category file exports an array of question objects:

```js
{
  id: 1,
  question: "Who is the leader of BTS?",
  options: ["Jungkook", "RM", "V", "Jin"],
  correctIndex: 1,
  image: "/images/rm.jpg",       // optional
  difficulty: "easy",            // easy | medium | hard
  explanation: "RM has been the leader since debut in 2013."
}
```

---

## Routing

| Route                | Page        | Description                    |
|----------------------|-------------|--------------------------------|
| `/`                  | HomePage    | Landing page with categories   |
| `/category/:id`      | QuizPage    | Quiz engine for a category     |
| `/results`           | ResultsPage | Score summary and review       |

---

## Scoring System

- **Base points:** 10 per correct answer
- **Streak bonus:** +5 points per consecutive correct answer
- **Timer bonus:** Extra points for fast answers (e.g., answer in < 5s = +3 bonus)
- **No penalty** for wrong answers

---

## Ranking System (by score %)

| Score %  | Rank Title            |
|----------|-----------------------|
| 90-100%  | Stan Legend           |
| 70-89%   | True Fan             |
| 50-69%   | Casual Enthusiast    |
| 30-49%   | Getting There        |
| 0-29%    | Total Newbie         |

---

## localStorage Schema

```js
// Quiz History
"quizHistory": [
  {
    category: "kpop",
    score: 85,
    totalQuestions: 10,
    rank: "True Fan",
    date: "2026-09-21"
  }
]

// Leaderboard (top scores per category)
"leaderboard": {
  "kpop": [
    { score: 95, rank: "Stan Legend", date: "2026-09-21" },
    { score: 80, rank: "True Fan", date: "2026-09-20" }
  ]
}
```

---

## UI/UX Details

- **Tailwind animations** - Card hover effects, page transitions, wrong-answer shake
- **Responsive** - Mobile-first grid layout
- **Dark mode** - Using Tailwind's `dark:` variants with a toggle
- **Color theme per category** - K-pop = pink/purple, Anime = red/orange, BL = blue/teal
