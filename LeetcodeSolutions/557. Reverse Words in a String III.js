/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  function reverse(k) {
    let i = 0;
    let j = k.length - 1;
    while (i < j) {
      [k[i], k[j]] = [k[j], k[i]];
      i++;
      j--;
    }
    return k.join('');
  }
  s = s.split(' ');
  let result = [];
  for (let i = 0; i < s.length; i++) {
    result.push(reverse(s[i].split('')));
  }
  return result.join(' ');
};
reverseWords("Let's take LeetCode contest");
