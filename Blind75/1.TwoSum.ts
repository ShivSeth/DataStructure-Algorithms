function twoSum(nums: number[], target: number): number[] {
  let hashMap: { [key in number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    let remaining = target - nums[i];
    if (remaining in hashMap) return [i, hashMap[remaining]];
    hashMap[nums[i]] = i;
  }
}

twoSum([2, 7, 11, 15], 9);
