class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isPalindrome(s) {
    s = s
      .toLowerCase()
      .split('')
      .filter(
        (i) =>
          (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122) ||
          (i.charCodeAt(0) >= 48 && i.charCodeAt(0) <= 57)
      )
      .join('');
    return s.split('').reverse().join('') === s;
  }
}
