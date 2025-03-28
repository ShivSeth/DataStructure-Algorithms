// function threeSum(nums: number[], targetSum = 0): number[][] {
//   nums = nums.sort((a, b) => a - b);

//   let result: Array<Array<number>> = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i - 1] == nums[i]) continue;

//     let left = i + 1;
//     let right = nums.length - 1;
//     while (left < right) {
//       if (nums[left] + nums[right] + nums[i] > targetSum) right--;
//       else if (nums[left] + nums[right] + nums[i] < targetSum) left++;
//       else {
//         result.push([nums[i], nums[left], nums[right]]);
//         ++left;
//         --right;
//         while (left < right && nums[left] == nums[left - 1]) {
//           left += 1;
//         }
//       }
//     }
//   }
//   return result;
// }

//K-Sum Way

function threeSum(nums: number[], targetSum = 0): number[][] {
  nums = nums.sort((a, b) => a - b);
  let temp: number[] = [];
  let result: Array<Array<number>> = [];

  function kSum(k: number, start: number, target: number, array: number[]) {
    if (k !== 2) {
      for (let i = start; i < array.length - k + 1; i++) {
        if (i !== start && array[i] === array[i - 1]) continue;
        temp.push(array[i]);
        kSum(k - 1, i + 1, targetSum - array[i], array);
        temp.pop();
      }
    } else {
      let left = start;
      let right = array.length - 1;
      while (left < right) {
        let tempSum = array[left] + array[right];
        if (tempSum < target) left++;
        else if (tempSum > target) right--;
        else {
          result.push([...temp, array[left], array[right]]);
          left++;
          right--;
          while (left < right && array[left] === array[left - 1]) {
            left++;
          }
        }
      }
    }
  }
  kSum(3, 0, targetSum, nums);
  return result;
}

// threeSum([-1, 0, 1, 2, -1, -4]);
// threeSum([12, 3, 1, 2, -6, 5, -8, 6]);
threeSum([0, 0, 0]);
