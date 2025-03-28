class Solution {
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  productExceptSelf(nums) {
    let result = [];
    let product = 1;
    // left -> right
    for (let i = 0; i < nums.length; i++) {
      result[i] = product;
      product *= nums[i];
    }
    product = 1;

    for (let j = nums.length - 1; j >= 0; j--) {
      result[j] *= product;
      product *= nums[j];
    }
    return result;
  }
}
