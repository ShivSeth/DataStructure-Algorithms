/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n, dp = [0, 1, 1]) {
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  dp;
  return dp[n];
};
tribonacci(4);
