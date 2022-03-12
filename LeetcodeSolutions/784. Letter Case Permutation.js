/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  s = s.split('');
  let result = [];
  function backtrack(s, l, r) {
    if (l === r) {
      result.push([...s].join(''));
      return;
    }
    if (!isNaN(s[l])) {
      backtrack(s, l + 1, r);
      return;
    }
    s[l] = s[l].toLowerCase();
    backtrack(s, l + 1, r);
    s[l] = s[l].toUpperCase();
    backtrack(s, l + 1, r);
  }
  backtrack(s, 0, s.length);
  return result;
};

letterCasePermutation('ab');
