/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  let n = matrix.length;
  let min = Infinity;
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(undefined));
  for (let j = 0; j < n; j++) {
    dp[0][j] = matrix[0][j];
  }
  let helper = (i, j) => {
    if (i >= n || j >= n || i < 0 || j < 0) return Infinity;
    if (dp[i][j] === undefined) {
      dp[i][j] =
        matrix[i][j] +
        Math.min(helper(i - 1, j), helper(i - 1, j - 1), helper(i - 1, j + 1));
    }
    return dp[i][j];
  };
  for (let j = 0; j < n; j++) {
    min = Math.min(helper(n - 1, j), min);
  }
  dp;
  return min;
};

minFallingPathSum([
  [2, 1, 3],
  [6, 5, 4],
  [7, 8, 9],
]);
minFallingPathSum([
  [-19, 57],
  [-40, -5],
]);
