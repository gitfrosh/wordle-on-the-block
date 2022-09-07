const gameStateKey = 'gameState'

export const saveGameStateToLocalStorage = (gameState) => {
  localStorage.setItem(gameStateKey, JSON.stringify(gameState))
}

export const loadGameStateFromLocalStorage = () => {
  const state = localStorage.getItem(gameStateKey)
  return state ? (JSON.parse(state)) : null
}

const gameStatKey = 'gameStats';

// export type GameStats = {
//   winDistribution: number[]
//   gamesFailed: number
//   currentStreak: number
//   bestStreak: number
//   totalGames: number
//   successRate: number
// }

export const saveStatsToLocalStorage = (gameStats) => {
  localStorage.setItem(gameStatKey, JSON.stringify(gameStats))
}

export const loadStatsFromLocalStorage = () => {
  const stats = localStorage.getItem(gameStatKey)
  return stats ? (JSON.parse(stats)) : null
}
