
const SCORE_STR = ['love', '15', '30', '40', 'game']

exports.score = (pa, pb) => {
  if (exports.isSameScore(pa, pb)) return `${SCORE_STR[pa]}-all`
  return `${SCORE_STR[pa]}-${SCORE_STR[pb]}`
}

exports.isSameScore = (pa, pb) => pa === pb