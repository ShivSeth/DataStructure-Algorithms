function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    i !== min ? ([arr[i], arr[min]] = [arr[min], arr[i]]) : {};
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17]);
