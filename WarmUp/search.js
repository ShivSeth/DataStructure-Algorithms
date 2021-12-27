function search(arr, n) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((r + l) / 2);
    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] > n) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
}

search([1, 2, 3, 6, 8, 9, 10], 8);
