function threeNumberSum({ array, targetSum }) {
  // Write your code here.
  let result = [];
  array.sort((a, b) => a - b);
  array;
  for (let i = 0; i < array.length; i++) {
    l = i + 1;
    r = array.length - 1;
    while (r > l) {
      let sum = array[l] + array[i] + array[r];
      if (sum > targetSum) r--;
      else if (sum < targetSum) l++;
      else {
        result.push([array[i], array[l], array[r]]);
        l++;
      }
    }
  }
  return result;
}

// threeNumberSum({
//   array: [1, 2, 3],
//   targetSum: 6,
// });
threeNumberSum({
  array: [-8, 3, 1, 2, -6, 5, -8, 6],
  targetSum: 0,
});
