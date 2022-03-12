/**
 * @param {number[]} num
 * @return {number[][]}
 */
var permute = function (num) {
  let result = [];
  let l = 0;
  let r = num.length;
  function helper(num, l, r) {
    if (l === r) {
      result.push(num.slice());
      return;
    }
    for (let i = l; i < r; i++) {
      swap(num, l, i);
      helper(num, l + 1, r);
      //Step to backtrack
      swap(num, i, l);
    }
  }
  helper(num, l, r);
  return result;
  function swap(num, i, j) {
    [num[i], num[j]] = [num[j], num[i]];
  }
};

permute([1, 2, 3]);
