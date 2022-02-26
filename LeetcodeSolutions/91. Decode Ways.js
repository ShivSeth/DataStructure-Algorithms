/**
 * @param {string} s
 * @return {number}
 */

// Consider making a decision tree. As we have 1 or 2 child for each node. When we use a dp the complexity resolves to O(n) from 2^n
var numDecodings = function (s) {
  let dp = new Array(s.length + 1).fill(0);
  dp[0] = 1;
  dp[1] = +s[0] === 0 ? 0 : 1;
  for (let i = 2; i <= s.length; i++) {
    oneDigit = s.substring(i - 1, i);
    twoDigit = s.substring(i - 2, i);
    console.log(oneDigit, twoDigit);
    //We are considering the 'one digit' as a single entity
    if (oneDigit >= 1) dp[i] = dp[i] + dp[i - 1];
    //here we are considering 'two digits' as an single entity
    if (twoDigit >= 10 && twoDigit <= 26) dp[i] += dp[i - 2];
  }
  dp;
};

numDecodings('007');
