/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //Two consecutive XOR operation cancels the each other...logic behind the operation
  for (let i = 1; i < nums.length; i++) {
    nums[0] ^= nums[i];
  }
  return nums[0];
};

singleNumber([4, 1, 2, 1, 2]);
