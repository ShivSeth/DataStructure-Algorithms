function binarySearch(array, target) {
  // Write your code here.
  let l = 0;
  let r = array.length - 1;
  while (l <= r) {
    let mid = Math.ceil((l + r) / 2);
    if (array[mid] < target) l = mid + 1;
    else if (array[mid] > target) r = mid - 1;
    else return mid;
  }
  return -1;
}

binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 33);
