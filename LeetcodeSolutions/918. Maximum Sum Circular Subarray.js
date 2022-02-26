/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {
  let curr_max = 0;
  let sum = [0];
  let global_max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    curr_max = Math.max(nums[i], nums[i] + curr_max);
    global_max = Math.max(curr_max, global_max);
    sum[i] = global_max;
  }
  sum;
  return global_max;
};
maxSubarraySumCircular([-5, -3, -1]);
