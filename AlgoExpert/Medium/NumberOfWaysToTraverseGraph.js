//iterative solution
function numberOfWaysToTraverseGraph(width, height) {
  // Write your code here.

  let dp = new Array(height).fill(1).map(() => new Array(width).fill(1));
  dp[0][0] = 0;

  for (let i = 1; i < height; i++)
    for (let j = 1; j < width; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  return dp[height - 1][width - 1];
}

numberOfWaysToTraverseGraph(3, 3);

//recursive solution
