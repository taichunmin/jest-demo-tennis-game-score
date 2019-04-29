
const SCORE_STR = ['love', '15', '30', '40']

exports.score = (pa, pb) => {
  if (exports.isWin(pa, pb)) return 'A win.'
  if (exports.isWin(pb, pa)) return 'B win.'

  if (exports.isSameScore(pa, pb)) return `${SCORE_STR[pa]}-all`
  return `${SCORE_STR[pa]}-${SCORE_STR[pb]}`
}

exports.isWin = (pa, pb) => pa >= 4 && pa >= pb + 2

exports.isSameScore = (pa, pb) => pa === pb