// function findMin(nums: number[]): number {
//   if (nums[0] <= nums[nums.length - 1]) return nums[0];
//   let left = 0;
//   let right = nums.length - 1;
//   let mid;
//   while (left <= right) {
//     mid = Math.floor((left + right) / 2);
//     if (nums[left] >= nums[right] && nums[mid] >= nums[left]) left = mid + 1;
//     else right = mid;
//   }
//   return nums[mid];
// }

function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  let result = nums[0];
  while (left <= right) {
    //sorted sub-array found
    if (nums[left] < nums[right]) {
      result = Math.min(nums[left], result);
      break;
    }
    let mid = Math.trunc((left + right) / 2);
    result = Math.min(nums[mid], result);
    if (nums[left] <= nums[mid]) left = mid + 1;
    else right = mid - 1;
  }
  return result;
}

findMin([4, 5, 6, 7, 0, 1, 2]);
findMin([3, 4, 5, 1, 2]);
findMin([8, 9, 11, 1, 4, 5, 7]);
findMin([11, 5]);

findMin([2, 3, 4, 5, 1]);
