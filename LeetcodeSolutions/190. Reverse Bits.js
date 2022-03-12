/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    let bit = (n >>> i) & 1;
    result = result | (bit << (31 - i));
  }
  //To make the bit unsigned as -ve value will be returned
  return result >>> 0;
};
reverseBits(1111111010101111110111111101);

// console.log(7 * 10 ** 5);
