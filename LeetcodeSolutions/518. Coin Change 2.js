/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (coin of coins) {
    coin;
    for (let i = coin; i <= amount; i++) {
      i;
      dp[i] = dp[i] + dp[i - coin];
    }
  }
  dp;
};

// coinChange([186, 419, 83, 408], 6249);
coinChange([5, 1, 2], 10);
