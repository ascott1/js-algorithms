const selectionSort = require('./selection-sort');

let testArray1 = [3, 2, 1];
let testArray2 = [22, 11, 99, 88, 9, 7, 42];

test('sorts an array', () => {
  expect(selectionSort(testArray1)).toEqual([1, 2, 3]);
  expect(selectionSort(testArray2)).toEqual([7, 9, 11, 22, 42, 88, 99]);
});
