/**
 * @param {number[]} num
 * @return {number}
 */
var lengthOfLIS = function (num) {
  if (num.length === 0) return 0;
  let dp = new Array(num.length).fill(1);
  let max = 1;
  for (let i = 1; i < num.length; i++) {
    for (let j = 0; j < i; j++) {
      if (num[j] < num[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
      max = Math.max(max, dp[i]);
    }
  }
  return max;
};
lengthOfLIS([1, 3, 6, 7, 9, 4, 10, 5, 6]);
