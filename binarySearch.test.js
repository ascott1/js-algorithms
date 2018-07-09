const search = require('./binary-search');

const primes = [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71,
  73,
  79,
  83,
  89,
  97
];

names = ['Abbey', 'Adam', 'Harlow', 'Harrison', 'Riley'];

test('finds the location of a number in an array', () => {
  expect(search(primes, 73)).toBe(20);
  expect(search(primes, 11)).toBe(4);
  expect(search(primes, 2)).toBe(0);
  expect(search(primes, 97)).toBe(24);
});

test('finds the location of a name in an array', () => {
  expect(search(names, 'Adam')).toBe(1);
  expect(search(names, 'Riley')).toBe(4);
});
