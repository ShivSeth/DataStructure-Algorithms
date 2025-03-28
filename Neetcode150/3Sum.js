class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums) {
    nums.sort((a, b) => a - b);
    let result = [];
    this.kSum(result, 3, 0, 0, nums);
    return result;
  }

  kSum(result, k, target, start, nums, temp = []) {
    if (k !== 2) {
      for (let i = start; i < nums.length - k + 1; i++) {
        if (i !== start && nums[i] === nums[i - 1]) continue;
        temp.push(nums[i]);
        this.kSum(result, k - 1, target - nums[i], i + 1, nums, temp);
        temp.pop();
      }
    } else {
      let left = start;
      let right = nums.length - 1;
      while (left < right) {
        let tempSum = nums[left] + nums[right];
        if (tempSum < target) left++;
        else if (tempSum > target) right--;
        else {
          result.push([...temp, nums[left], nums[right]]);
          left++;
          right--;
          while (left < right && nums[left] === nums[left - 1]) left++;
        }
      }
    }
  }
}

let s = new Solution();

s.threeSum([-1, 0, 1, 2, -1, -4]);
