class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  isValid(s) {
    let stack = [];
    let hashMap = {
      ')': '(',
      '}': '{',
      ']': '[',
    };
    for (let i of s) {
      if (i in hashMap) {
        let pop = stack.pop();
        if (pop !== hashMap[i]) return false;
      } else stack.push(i);
    }
    return !Boolean(stack.length);
  }
}

Input: s = '([{}])';

Output: true;
