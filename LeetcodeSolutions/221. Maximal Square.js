/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  let max = 0;
  let dp = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(0));
  function helper(i, j) {
    if (i < 0 || j < 0 || matrix[i][j] === '0') return 0;
    if (dp[i][j] === 0) {
      dp[i][j] =
        1 + Math.min(helper(i - 1, j), helper(i, j - 1), helper(i - 1, j - 1));
    }
    return dp[i][j];
  }
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      let temp = helper(row, col);
      max = max > temp ? max : temp;
    }
  }
  dp;
  return max * max;
};
maximalSquare([
  ['1', '0'],
  ['1', '0'],
]);
maximalSquare([
  ['1', '0', '1', '0', '0'],
  ['1', '0', '1', '1', '1'],
  ['1', '1', '1', '1', '1'],
  ['1', '0', '0', '1', '0'],
]);
