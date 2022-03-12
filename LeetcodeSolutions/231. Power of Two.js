/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n, value = 1) {
  //recursion
  if (value > n) return false;
  else if (value === n) return true;
  return isPowerOfTwo(n, value * 2);
};

var isPowerOfTwo = function (n) {
  //looping
  let value = 1;
  while (value <= n) {
    if (value === n) return true;
    value *= 2;
  }
  return false;
};

isPowerOfTwo(256);
