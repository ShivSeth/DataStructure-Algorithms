function insertionSort(array) {
  // Write your code here.
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i && array[j] > array[i]; j++) {
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return array;
}
insertionSort([5, 4, 3, 9]);
