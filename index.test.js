const TennisGameScore = require('./index')

test.each([
  [0, 0, 'love-all'],
  [1, 0, '15-love'],
  [3, 0, '40-love'],
  [0, 3, 'love-40'],
  [4, 0, 'A win.'],
  [0, 4, 'B win.'],
])('比數是 %d:%d 的時候應該顯示 %s', (pa, pb, expected) => {
  expect(TennisGameScore.score(pa, pb)).toEqual(expected)
})