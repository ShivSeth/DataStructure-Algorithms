function longestPeak({ array }) {
  // Write your code here.
  let longestPeak = 0;
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i - 1] < array[i] && array[i + 1] < array[i]) {
      let temp = 3;
      let l = i - 1;
      let r = i + 1;
      while (array[l - 1] < array[l]) {
        temp++;
        l--;
      }
      while (array[r + 1] < array[r]) {
        temp++;
        r++;
        i++;
      }
      longestPeak = longestPeak < temp ? temp : longestPeak;
    }
  }
  return longestPeak;
}

longestPeak({
  array: [2, 1, 4, 7, 3, 2, 5],
});

// longestPeak({
//   array: [1, 2, 3, 3, 3, 0, 10, 6, 5, -1, -3, 2, 3],
// });
// longestPeak({
//   array: [1, 2, 3, 4, 5, 0],
// });
