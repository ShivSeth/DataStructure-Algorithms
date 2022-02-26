/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let a = text1.length;
  let b = text2.length;
  let dp = new Array(a).fill(1).map(() => new Array(b).fill(-1));
  function helper(i, j) {
    if (i === -1 || j === -1) return 0;
    if (dp[i][j] === -1) {
      dp[i][j] =
        text1[i] === text2[j]
          ? helper(i - 1, j - 1) + 1
          : Math.max(helper(i - 1, j), helper(i, j - 1));
    }
    return dp[i][j];
  }
  return helper(a - 1, b - 1);
};

longestCommonSubsequence('abcde', 'abc');
