/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(undefined);
  dp[0] = 0;
  const helper = (coins, remainingValue) => {
    if (remainingValue === 0) return 0;
    if (!dp[remainingValue]) {
      let minCoins = Infinity;
      for (let j = 0; j < coins.length; j++) {
        if (remainingValue - coins[j] >= 0) {
          let result = helper(coins, remainingValue - coins[j]);
          if (result != -1) {
            minCoins = Math.min(1 + result, minCoins);
          }
        }
      }
      dp[remainingValue] = minCoins;
    }
    return dp[remainingValue];
  };
  return helper(coins, amount);
};

coinChange([3], 7);
coinChange([186, 419, 83, 408], 6249);
