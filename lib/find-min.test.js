const findMin = require('./find-min');

const testArray = [1, 18, 6, 66, 44, 9, 1, 22, 14, 67, 99];

test('finds the index of the lowest value in a subarray', () => {
  expect(findMin(testArray, 1)).toBe(6);
  expect(findMin(testArray, 4)).toBe(6);
  expect(findMin(testArray, 7)).toBe(8);
});

test('finds the location of the first occurence when duplicates are present', () => {
  expect(findMin(testArray, 0)).toBe(0);
});
