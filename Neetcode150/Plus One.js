class Solution {
  /**
   * @param {number[]} digits
   * @return {number[]}
   */
  plusOne(digits) {
    digits = digits.reverse();
    let carry = 0;
    let sum = 0;
    for (let index = 0; index < digits.length; index++) {
      sum = index === 0 ? carry + digits[index] + 1 : carry + digits[index];
      if (sum > 9) {
        digits[index] = 0;
        carry = 1;
      } else {
        digits[index] = sum;
        carry = 0;
        break;
      }
    }
    if (carry) digits.push(carry);
    return digits.reverse();
  }
}

let s = new Solution();

s.plusOne([8, 9, 9, 9]);
