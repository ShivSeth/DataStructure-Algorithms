function maxSubArray(nums: number[]): number {
  //   let dp = new Array(nums.length).fill(-Infinity);
  let max = nums[0];
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    prev = Math.max(nums[i] + prev, nums[i]);
    max = Math.max(prev, max);
  }
  return max;
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
