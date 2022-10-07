function kadanesAlgorithm(array) {
  // Write your code here.
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i] = Math.max(array[i - 1] + array[i], array[i]);
    max = Math.max(max, array[i]);
  }
  return max;
}

kadanesAlgorithm([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]);
