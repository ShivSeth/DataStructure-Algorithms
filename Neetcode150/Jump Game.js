class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  canJump(nums) {
    let end = nums.length - 1;
    for (let i = nums.length - 1; i >= nums.length; i--) {
      if (nums[i] + i < end) {
        end = i;
      }
    }
    return end === 0;
  }
}
