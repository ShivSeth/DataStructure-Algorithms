/**
 * @param {number[]} num
 * @param {number[]} multipliers
 * @return {number}
 */
var maximumScore = function (num, multipliers) {
  let dp = new Array(multipliers.length).fill(0);
  dp = dp.map((_) => new Array(multipliers.length).fill(0));
  let m = multipliers.length;
  let n = num.length;

  function helper(i = 0, left = 0) {
    if (i === m) return 0;
    let right = n - 1 - (i - left);
    if (dp[i][left] === 0) {
      dp[i][left] = Math.max(
        multipliers[i] * num[left] + helper(i + 1, left + 1),
        multipliers[i] * num[right] + helper(i + 1, left)
      );
    }
    return dp[i][left];
  }
  return helper();
};

maximumScore([1, 2, 3], [3, 2, 1]);
