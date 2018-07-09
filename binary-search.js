function binarySearch(list, target) {
  let min = 0;
  let max = list.length - 1;

  while (max >= min) {
    // find the midpoint and round down
    let guess = Math.floor((min + max) / 2);

    if (list[guess] === target) {
      // return the 'guess' when it matches the target value
      return guess;
    } else if (list[guess] < target) {
      // if the guess is less than the target set the min to guess + 1
      min = guess + 1;
    } else if (list[guess] > target) {
      // if the guess is more than the target set the max to guess - 1
      max = guess - 1;
    }
  }

  return -1; // if target is not present in array return -1.
}

module.exports = binarySearch;
