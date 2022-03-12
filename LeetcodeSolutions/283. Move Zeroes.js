/**
 * @param {number[]} num
 * @return {void} Do not return anything, modify num in-place instead.
 */
var moveZeroes = function (num) {
  let nonZero = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] !== 0) {
      num[nonZero++] = num[i];
    }
  }
  while (nonZero !== num.length) {
    num[nonZero] = 0;
    nonZero++;
  }
};

moveZeroes([0]);
