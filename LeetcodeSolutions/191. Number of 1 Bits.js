/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 2;
  }
  return count;
};
hammingWeight(111111111111101);
