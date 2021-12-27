function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i && arr[i] < arr[j]; j++)
      [arr[i], arr[j]] = [arr[j], arr[i]];
    console.log(arr);
  }
  return arr;
}

insertionSort([7, 5, 4, 6, 3, 2, 1, 8]);
