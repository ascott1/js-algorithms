// finds the index of the lowest value in a subarray
function findMin(array, startIndex) {
  let minIndex = startIndex;
  let minValue = array[startIndex];

  // loop over array starting with startIndex,
  // update minValue and minIndex as needed:
  for (let i = minIndex; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
      minIndex = i;
    }
  }

  return minIndex;
}

const testArray = [1, 18, 6, 66, 44, 9, 22, 1, 14, 67, 99];

module.exports = findMin;
