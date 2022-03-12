// class Solution {
//   private int[][] memo;

//   private int dp(int row, int col) {
//       if (row + col == 0) {
//           return 1; // Base case
//       }

//       int ways = 0;
//       if (memo[row][col] == 0) {
//           if (row > 0) {
//               ways += dp(row - 1, col);
//           }
//           if (col > 0) {
//               ways += dp(row, col - 1);
//           }

//           memo[row][col] = ways;
//       }

//       return memo[row][col];
//   }

//   public int uniquePaths(int m, int n) {
//       memo = new int[m][n];
//       return dp(m - 1, n- 1);
//   }
// }

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  let a = Array(m)
    .fill(1)
    .map((i) => Array(n).fill(1));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      a[i][j] = a[i - 1][j] + a[i][j - 1];
    }
  }
  return a[m - 1][n - 1];
};
