export function zeroSumSubarray(nums: number[]) {
  // Write your code here.

  let set = new Set();
  let sum = 0;
  set.add(sum);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (set.has(sum)) return true;
    set.add(sum);
  }
  return false;
}

zeroSumSubarray([2, 3, 4, -5, -3, 4, 5]);
