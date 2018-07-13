// Returns the first character of the string str
function firstCharacter(str) {
  return str.slice(0, 1);
}

// Returns the last character of a string str
function lastCharacter(str) {
  return str.slice(-1);
}

// Returns the string that results from removing the first
//  and last characters from str
function middleCharacters(str) {
  return str.slice(1, -1);
}

function isPalindrome(str) {
  // if the string is 1 or less characters return true
  if (str.length <= 1) {
    return true;
  }
  // if the first and last letters don't match, immediately return false
  if (firstCharacter(str) !== lastCharacter(str)) {
    return false;
  }
  return isPalindrome(middleCharacters(str));
}

module.exports = isPalindrome;
