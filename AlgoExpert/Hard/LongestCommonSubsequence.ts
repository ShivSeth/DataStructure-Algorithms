export function longestCommonSubsequence(str1: string, str2: string) {
  // Write your code here.

  let dp = new Array(str1.length + 1)
    .fill(1)
    .map((i) => new Array(str2.length + 1).fill(''));

  for (let i = 0; i < dp.length; i++) {
    for (let j = 0; j < dp[0].length; j++) {
      if (i === 0 || j === 0) dp[i][j] = '';
      else
        dp[i][j] =
          str1[i - 1] === str2[j - 1]
            ? dp[i - 1][j - 1] + str1[i - 1]
            : dp[i - 1][j].length > dp[i][j - 1].length
            ? dp[i - 1][j]
            : dp[i][j - 1];
    }
  }
  return dp[dp.length - 1][dp[0].length - 1].split('');
}

longestCommonSubsequence('abcde', 'abc');
longestCommonSubsequence('ZXVVYZW', 'XKYKZPW');
