const swap = require('./swap');

let testArray = [7, 9, 4];

test('swaps two values in an array given their indexes', () => {
  expect(swap(testArray, 0, 1)).toEqual([9, 7, 4]);
  expect(swap(testArray, 2, 0)).toEqual([4, 7, 9]);
});
