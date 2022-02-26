/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let dp = new Array(obstacleGrid.length)
    .fill(0)
    .map(() => new Array(obstacleGrid[0].length).fill(0));
  //there is always one path to the starting square
  dp[0][0] = 1;
  //Below is the far better bay to traverse without any assumptions
  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
        continue;
      }
      if (i > 0) {
        dp[i][j] += dp[i - 1][j];
      }
      if (j > 0) {
        dp[i][j] += dp[i][j - 1];
      }
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
};

uniquePathsWithObstacles([
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0],
]);
