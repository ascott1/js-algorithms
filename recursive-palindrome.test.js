let isPalindrome = require('./recursive-palindrome');

test('identifies a palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('pullup')).toBe(true);
  expect(isPalindrome('a')).toBe(true);
  expect(isPalindrome('')).toBe(true);
  expect(isPalindrome('adam')).toBe(false);
  expect(isPalindrome('hello')).toBe(false);
});
