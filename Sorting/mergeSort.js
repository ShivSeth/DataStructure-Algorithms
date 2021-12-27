function merge(arr1, arr2) {
  let arr = [];
  let i = 0,
    j = 0,
    k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr = [...arr, arr1[i]];
      i++;
    } else if (arr1[i] > arr2[j]) {
      arr = [...arr, arr2[j]];
      j++;
    }
  }
  return i === arr1.length
    ? arr.concat(arr2.slice(j))
    : arr.concat(arr1.slice(i));
}

function mergeSort(arr) {
  //Don't return arr[0] as it is a number and not an array
  if (arr.length === 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

mergeSort([5, 8, 3, 1, 6, 2]);
