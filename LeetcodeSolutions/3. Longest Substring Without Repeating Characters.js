/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let longest = 0;
  for (let i = 0, j = 0; i < s.length; i++) {
    if (map.has(s[i])) j = Math.max(j, map.get(s[i]));
    longest = Math.max(longest, i - j + 1);
    map.set(s[i], i + 1);
  }
  return longest;
};

lengthOfLongestSubstring('bbb');
lengthOfLongestSubstring('abba');
lengthOfLongestSubstring('pwwkew');
lengthOfLongestSubstring('');
