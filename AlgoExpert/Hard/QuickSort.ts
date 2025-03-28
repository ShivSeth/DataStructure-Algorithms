export function quickSort(array: number[], start = 0, end = array.length) {
  // Write your code here.

  if (start !== end) {
    let pivotIndex = pivot(array, start, end);
    quickSort(array, start, pivotIndex);
    quickSort(array, pivotIndex + 1, end);
  }
  return array;
}

function pivot(arr: number[], start: number, end: number) {
  let pivot = arr[start];
  let startIndex = start;
  for (let i = start + 1; i < end; i++) {
    if (pivot >= arr[i]) {
      startIndex++;
      [arr[startIndex], arr[i]] = [arr[i], arr[startIndex]];
    }
  }
  [arr[startIndex], arr[start]] = [arr[start], arr[startIndex]];
  return startIndex;
}
quickSort([4, 8, 2, 1, -9, 400, 5, 7, 6, 3]);
