function maxProduct(nums: number[]): number {
  //   let dp = new Array(nums.length).fill(-Infinity);
  let localMin = nums[0];
  let localMax = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let num1 = nums[i] * localMax;
    let num2 = nums[i] * localMin;
    localMax = Math.max(num1, num2, nums[i]);
    localMin = Math.min(num1, num2, nums[i]);
    max = Math.max(localMax, localMin, max);
  }
  return max;
}

maxProduct([-1, -2, -9, -6]);
maxProduct([2, -5, -2, -4, 3]);
maxProduct([0, 2]);
maxProduct([-2]);
