function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      if (target < nums[left] || target > nums[mid]) left = mid + 1;
      else right = mid - 1;
    } else {
      if (target > nums[right] || target < nums[mid]) right = mid - 1;
      else left = mid + 1;
    }
  }
  return -1;
}
search([4, 5, 6, 7, -1, 0, 1, 2, 3], -1);
