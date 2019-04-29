const TennisGameScore = require('./index')

test.each([
  [0, 0, 'love-all'],
  [1, 0, '15-love'],
  [3, 0, '40-love'],
  [0, 3, 'love-40'],
  [4, 0, 'A win.'],
  [0, 4, 'B win.'],
  [4, 3, 'A advantage.'],
  [3, 4, 'B advantage.'],
  [3, 3, 'Deuce.'],
])('比數是 %d:%d 的時候應該顯示 %s', (pa, pb, expected) => {
  expect(TennisGameScore.score(pa, pb)).toEqual(expected)
})