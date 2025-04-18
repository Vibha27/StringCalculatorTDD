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

test('return sum of numbers when numbers are with ; delimeter', () => {
  expect(Add("1;2;3")).toBe(6);
})

test('return sum of numbers when numbers are with \n , ; delimeters', () => {
  expect(Add("1;2;\n,3")).toBe(6);
})

test('return sum of numbers when numbers are with // \n , ; delimeters', () => {
  expect(Add("//;\n1;2")).toBe(3);
})

test('throws error with message when negative numbers are present', () => {
  expect(() => Add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
});

test('numbers bigger than 1000 should be ignored', () => {
  expect(Add("2,1001")).toBe(2);
});

test('delimiters can be of any length', () => {
  expect(Add("//[***]\n1***2***3")).toBe(6);
});