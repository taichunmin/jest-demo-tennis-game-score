const TennisGameScore = require('./index')

test.each([
  [0, 0, 'love-all']
])('Point 是 %d:%d 的時候 Score 應該是 %s', (pa, pb, expected) => {
  expect(TennisGameScore.score(pa, pb)).toEqual(expected)
})