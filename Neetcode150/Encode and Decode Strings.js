class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let result = '';

    for (let s of strs) result += `${s.length}#${s}`;
    return result;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < str.length) {
      while (str[j] !== '#') {
        j++;
      }
      let length = parseInt(str.substring(i, j));
      i = j + 1;
      j = i + length;
      result.push(str.substring(i, j));
      i = j;
    }
    return result;
  }
}

let s = new Solution();

s.encode(['we', 'say', ':', 'yes', '!@#$%^&*()']);

('4#neet4#code4#love3#you');
('2#we3#say1#:3#yes10#!@#$%^&*()');

console.log(s.decode('2#we3#say1#:3#yes10#!@#$%^&*()'));
