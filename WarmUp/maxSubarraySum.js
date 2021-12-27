const maxSubarraySum = (arr, n) => {
  if (n > arr.length) return null;
  let j = 0;
  let i = 0;
  let maxSum = 0;
  let sum = 0;
  while (j < n) {
    sum += arr[j];
    j++;
  }
  maxSum = sum;
  while (i < arr.length - n) {
    sum = sum - arr[i] + arr[j];
    maxSum = sum > maxSum ? sum : maxSum;
    i++;
    j++;
  }
  return maxSum;
};

maxSubarraySum([1, 2, 3, 4], 3);
