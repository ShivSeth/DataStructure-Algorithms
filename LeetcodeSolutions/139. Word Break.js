/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        j = i;
        break;
      }
    }
  }
  return dp[s.length];
};

wordBreak('leetcode', ['leet', 'code']);
let k = 'leetcode';
console.log(k.substr(4, 8));
