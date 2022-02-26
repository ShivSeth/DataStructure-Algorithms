/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
//Doing Nothing Approach
//Very Conceptual Question to solve
//Remember the base cases are always at the end of the array
//less number of transactions
var maxProfit = function (k, prices) {
  let dp = new Array(prices.length)
    .fill(0)
    .map(() => new Array(k + 1).fill(0).map(() => new Array(2).fill(0)));
  function helper(i, tR, hold) {
    if (i === prices.length || tR === 0) return 0;
    if (dp[i][tR][hold] === 0) {
      let doNothing = helper(i + 1, tR, hold);
      let doSomething;
      if (hold === 1) doSomething = prices[i] + helper(i + 1, tR - 1, 0);
      else doSomething = -prices[i] + helper(i + 1, tR, 1);
      dp[i][tR][hold] = Math.max(doNothing, doSomething);
    }
    return dp[i][tR][hold];
  }
  return helper(0, k, 0);
};

maxProfit(2, [3, 2, 6, 5, 0, 3]);

// Bottom Up approach
// class Solution {
//   public int maxProfit(int k, int[] prices) {
//       int n = prices.length;
//       int dp[][][] = new int[n + 1][k + 1][2];

//       for (int i = n - 1; i >= 0; i--) {
//           for (int transactionsRemaining = 1; transactionsRemaining <= k; transactionsRemaining++) {
//               for (int holding = 0; holding < 2; holding++) {
//                   int doNothing = dp[i + 1][transactionsRemaining][holding];
//                   int doSomething;
//                   if (holding == 1) {
//                       // Sell stock
//                       doSomething = prices[i] + dp[i + 1][transactionsRemaining - 1][0];
//                   } else {
//                       // Buy stock
//                       doSomething = -prices[i] + dp[i + 1][transactionsRemaining][1];
//                   }

//                   // Recurrence relation
//                   dp[i][transactionsRemaining][holding] = Math.max(doNothing, doSomething);
//               }
//           }
//       }

//       return dp[0][k][0];
//   }
// }
