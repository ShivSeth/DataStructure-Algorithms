function pivot(arr, start = 0, end = arr.length) {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (pivot >= arr[i]) {
      ++swapIndex;
      [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
    }
  }
  [arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length) {
  if (!(left === right)) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([4, 8, 2, 1, -9, 400, 5, 7, 6, 3]);

//In sorted array if we pick the min or max item there will be no decomposition of the array. Avoid it.
