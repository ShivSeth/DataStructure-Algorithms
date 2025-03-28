class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] > target) right--;
      else if (nums[mid] < target) left++;
      else return mid;
    }
    return -1;
  }
}
