//Sorted Array is a gift 😘

function averagePair(arr, n) {
  let start = 0;
  let end = arr.length - 1;
  //Since I need a pair so not to use <=
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === n) return true;
    else if (avg < n) ++start;
    else --end;
  }
  return false;
}

averagePair([1, 2, 3], 2.5);
