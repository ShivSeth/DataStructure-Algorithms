class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    let hashMap = {};
    for (let i = 0; i < nums.length; i++) {
      let left = target - nums[i];
      if (left in hashMap) return [hashMap[left], i];
      hashMap[nums[i]] = i;
    }
  }
}
