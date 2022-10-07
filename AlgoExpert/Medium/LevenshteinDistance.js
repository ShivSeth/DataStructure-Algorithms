function levenshteinDistance(str1, str2) {
  // Write your code here.

  let dp = new Array(str1.length + 1)
    .fill(0)
    .map(() => new Array(str2.length + 1).fill(0));

  for (let i = 0; i <= str1.length; i++) dp[i][0] = i;
  for (let i = 0; i <= str2.length; i++) dp[0][i] = i;
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = 1 + Math.min(dp[i][j - 1], dp[i - 1][j], dp[i - 1][j - 1]);
    }
  }
  return dp[str1.length][str2.length];
}

levenshteinDistance('abbbb', 'bbbba');
