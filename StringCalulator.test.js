const Add = require('./StringCalculator');

test('returns 0 for empty string', () => {
  expect(Add("")).toBe(0);
});

test('return number when only number is provided', () => {
    expect(Add("1")).toBe(1);
})

test('return sum of number when numbers are comma-seperated', () => {
  expect(Add("1,2")).toBe(3);
})

test('return sum of numbers when multiple numbers are comma-seperated', () => {
  expect(Add("1,2,3,4,5,6,7,8,9,0")).toBe(45);
})

test('return sum of numbers when multiple numbers are with new line', () => {
  expect(Add("1\n2\n3")).toBe(6);
})

test('return sum of numbers when multiple numbers are with new line and comma-sepearted', () => {
  expect(Add("1,2\n3")).toBe(6);
})

test('return 0 when only new line is passed', () => {
  expect(Add("\n")).toBe(0);
})

test('return 0 when only comma is passed', () => {
  expect(Add(",")).toBe(0);
})