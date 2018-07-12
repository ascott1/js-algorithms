const findMin = require('./lib/find-min');
const swap = require('./lib/swap');

// simple implementation of Array.prototype.sort()
function selectionSort(array) {
  let tempIndex;
  for (let i = 0; i < array.length; i++) {
    tempIndex = findMin(array, i);
    swap(array, i, tempIndex);
  }
  return array;
}

module.exports = selectionSort;
