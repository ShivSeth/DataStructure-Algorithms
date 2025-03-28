export function longestSubarrayWithSum(array: number[], targetSum: number) {
  // Write your code here.

  let maxLength = 0;
  let sum = 0;
  let start = 0;
  let left = 0;
  let right = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if (sum === targetSum && maxLength < i - start + 1) {
      left = start;
      right = i;
      maxLength = i - start + 1;
    }
    while (sum > targetSum) {
      sum -= array[start];
      start++;
    }
  }

  return left === right && array[left] !== targetSum ? [] : [left, right];
}

// longestSubarrayWithSum([1, 2, 3, 4, 3, 3, 1, 2, 1], 10);
// longestSubarrayWithSum([0, 0, 0, 0, 0, 1, 0, 0, 0, 0], 1);
// longestSubarrayWithSum([61, 54, 1, 499, 2212, 4059, 1, 2, 3, 1, 3], 19);
longestSubarrayWithSum([10], 10);
