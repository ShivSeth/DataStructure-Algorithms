function binarySearch(arr, n) {
  let l = 0;
  let r = arr.length - 1;
  while (l < r) {
    let mid = Math.ceil((l + r) / 2);
    if (arr[mid] === n) return mid;
    else if (arr[mid] > n) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
}

binarySearch([0, 1, 2, 3, 4], 2);
