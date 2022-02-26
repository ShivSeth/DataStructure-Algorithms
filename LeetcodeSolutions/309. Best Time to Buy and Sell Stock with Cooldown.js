/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let dp = new Array(prices.length).fill(0).map(() => new Array(2).fill(0));
  function helper(i, status) {
    if (i >= prices.length) return 0;
    if (dp[i][status] === 0) {
      let doNothing = helper(i + 1, status);
      let doSomething; //Buy or Sell
      if (status === 1) {
        doSomething = prices[i] + helper(i + 2, 0);
      } else if (status === 0) {
        doSomething = -prices[i] + helper(i + 1, 1);
      }
      dp[i][status] = Math.max(doSomething, doNothing);
    }
    return dp[i][status];
  }
  return helper(0, 0);
};

maxProfit([6, 1, 3, 2, 4, 7]);
