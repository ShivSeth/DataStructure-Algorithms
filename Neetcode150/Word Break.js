class Solution {
  /**
   * @param {string} s
   * @param {string[]} wordDict
   * @return {boolean}
   */
  wordBreak(s, wordDict) {
    let dict = new Set(wordDict);
    let dp = new Array(s.length + 1);
    dp[0] = true;
    for (let i = 0; i <= s.length; i++) {
      for (let j = 0; j < i; j++) {
        if (dp[j] && dict.has(s.substring(j, i))) dp[i] = true;
      }
    }
    return Boolean(dp.at(-1));
  }
}
