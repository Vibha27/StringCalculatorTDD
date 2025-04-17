const Add = require('./StringCalculator');

test('returns 0 for empty string', () => {
  expect(Add("")).toBe(0);
});

test('return number when only number is provided', () => {
    expect(Add("1")).toBe(1);
})
