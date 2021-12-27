function minSubarrayLen(arr, n) {
  let l = 0;
  let r = 0;
  let sum = 0;
  let minL = Infinity;
  while (l < arr.length) {
    if (sum < n && r < arr.length) {
      sum += arr[r];
      r++;
    } else if (sum >= n) {
      minL = Math.min(minL, r - l);
      sum = sum - arr[l];
      l++;
    } else {
      break;
    }
  }
  return minL !== Infinity ? minL : 0;
}
minSubarrayLen([2, 3, 1, 2, 4, 3], 7);
// [2 3 1 2 4 3], 7 -> 2
