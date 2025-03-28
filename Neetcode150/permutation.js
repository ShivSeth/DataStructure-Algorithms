class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  permute(nums) {
    let result = [];
    let l = 0;
    let r = nums.length;
    this.helper(nums, l, r, result);
    return result;
  }

  helper(nums, l, r, result) {
    if (l === r) {
      result.push([...nums]);
      return;
    }

    for (let i = l; i < r; i++) {
      this.swap(nums, l, i);
      this.helper(nums, l + 1, r, result);
      this.swap(nums, i, l);
    }
  }

  swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }
}
