function selectionSort(array) {
  // Write your code here.
  for (let i = 0; i < array.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[min] > array[j]) min = j;
    }
    i !== min && ([array[i], array[min]] = [array[min], array[i]]);
  }
  return array;
}

selectionSort([3, 5, 9, 1]);
