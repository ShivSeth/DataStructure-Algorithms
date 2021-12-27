//works only for the sorted array
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left--;
  }
}

sumZero([-1, 0, 1, 2]);
