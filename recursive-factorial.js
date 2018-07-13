// calculate a factorial using recursion
// assumes n is a positive number
function factorial(n) {
  if (n === 0) {
    return 1;
  }

  return factorial(n - 1) * n;
}

module.exports = factorial;
