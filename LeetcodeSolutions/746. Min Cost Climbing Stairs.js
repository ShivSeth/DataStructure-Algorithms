/**
 * @param {number[]} cost
 * @return {number}
 */
//GO with the finding of min cost to each step and do the recursion
var minCostClimbingStairs = function (cost) {
  let dp = [0, 0];
  let step0 = 0;
  let step1 = 0;
  let sol = 0;
  for (let i = 2; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    sol = Math.min(step1 + cost[i - 1], step0 + cost[i - 2]);
    step0 = step1;
    step1 = sol;
  }
  sol;
  dp;
};
minCostClimbingStairs([10, 15, 20]);
// minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
