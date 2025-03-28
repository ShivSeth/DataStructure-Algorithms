class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @returns {number[][]}
   */
  combinationSum(nums, target) {
    return this.backtrack(0, 0);
  }

  backtrack(index, currentTarget, target, temp = [], result = [], nums = []) {
    if (currentTarget === target) {
      result.push([...temp]);
      return;
    }
    if (currentTarget > target || nums[index] > target) return;

    temp.push(nums[index]);
    this.backtrack(
      index,
      currentTarget + nums[index],
      target,
      temp,
      result,
      nums
    );
    temp.pop();
    this.backtrack(index + 1, currentTarget, target, temp, result, nums);
    return result;
  }
}
