class Solution {
  /**
   * @param {number[]} coins
   * @param {number} amount
   * @return {number}
   */
  coinChange(coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let coin of coins)
      for (let value = 1; value <= amount; value++)
        if (coin <= value)
          dp[value] = Math.min(dp[value], dp[value - coin] + 1);

    return dp[amount] === Infinity ? -1 : dp[amount];
  }
}
