const factorial = require('./recursive-factorial');

test('calculates n! factorial recursively', () => {
  expect(factorial(0)).toEqual(1);
  expect(factorial(5)).toEqual(120);
  expect(factorial(10)).toEqual(3628800);
});
