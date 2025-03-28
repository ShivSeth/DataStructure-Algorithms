function coinChange(coins: number[], amount: number): number {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let coin = 0; coin < coins.length; coin++) {
    for (let amount = 0; amount < dp.length; amount++) {
      if (coins[coin] <= amount) {
        dp[amount] = Math.min(dp[amount], dp[amount - coins[coin]] + 1);
      }
    }
  }
  dp;
  return dp[amount] === Infinity ? -1 : dp[amount];
}

coinChange([3, 5], 1);
