function isMonotonic(array) {
  // Write your code here.
  if (array.length <= 1) return true;
  let decreasingOrder = array[0] > array[array.length - 1] ? true : false;
  for (let i = 0; i < array.length - 1; i++) {
    if (!decreasingOrder && array[i] <= array[i + 1]) continue;
    else if (decreasingOrder && array[i] >= array[i + 1]) continue;
    else return false;
  }
  return true;
}

isMonotonic([1, 2, 2, 3]);
