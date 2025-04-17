const Add = require('./StringCalculator');

test('returns 0 for empty string', () => {
  expect(Add("")).toBe(0);
});
