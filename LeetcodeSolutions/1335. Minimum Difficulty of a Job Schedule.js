/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
var minDifficulty = function (jobDifficulty, d) {
  let n = jobDifficulty.length;
  if (d > n) return -1;

  //To fill the whole array with the max from the right end side -> Max difficult job to do at the last day
  let hardestJobRemaining = [];
  let hardJob = 0;
  for (let k = n - 1; k >= 0; k--) {
    hardJob = Math.max(hardJob, jobDifficulty[k]);
    hardestJobRemaining[k] = hardJob;
  }

  let dp = new Array(jobDifficulty.length)
    .fill(0)
    .map(() => new Array(d).fill(-1));
  function helper(i = 0, day = 0) {
    if (day === d - 1) return hardestJobRemaining[i];
    if (dp[i][day] === -1) {
      let hardest = -Infinity;
      let best = Infinity;
      for (let j = i; j < n - (d - 1 - day); j++) {
        hardest = Math.max(hardest, jobDifficulty[j]);
        //This equation calculates the value at one go
        best = Math.min(best, hardest + helper(j + 1, day + 1));
      }
      dp[i][day] = best;
    }
    return dp[i][day];
  }
  helper();
};

minDifficulty([6, 5, 10, 3, 2, 1], 3);

//Bottom-Up solution
// class Solution {
//   public int minDifficulty(int[] jobDifficulty, int d) {
//       int n = jobDifficulty.length;
//       // If we cannot schedule at least one job per day,
//       // it is impossible to create a schedule
//       if (n < d) {
//           return -1;
//       }

//       int dp[][] = new int[n][d + 1];
//       for (int[] row: dp) {
//           Arrays.fill(row, Integer.MAX_VALUE);
//       }

//       // Set base cases
//       dp[n - 1][d] = jobDifficulty[n - 1];

//       // On the last day, we must schedule all remaining jobs, so dp[i][d]
//       // is the maximum difficulty job remaining
//       for (int i = n - 2; i >= 0; i--) {
//           dp[i][d] = Math.max(dp[i + 1][d], jobDifficulty[i]);
//       }

//       for (int day = d - 1; day > 0; day--) {
//           for (int i = day - 1; i < n - (d - day); i++) {
//               int hardest = 0;
//               // Iterate through the options and choose the best
//               for (int j = i; j < n - (d - day); j++) {
//                   hardest = Math.max(hardest, jobDifficulty[j]);
//                   // Recurrence relation
//                   dp[i][day] = Math.min(dp[i][day], hardest + dp[j + 1][day + 1]);
//               }
//           }
//       }

//       return dp[0][1];
//   }
// }
