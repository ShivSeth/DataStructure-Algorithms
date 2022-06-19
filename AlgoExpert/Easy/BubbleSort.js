function bubbleSort(array) {
  // Write your code here.

  for (let i = 0; i < array.length; i++) {
    let noSwap = true;
    for (let j = i; j < array.length; j++) {
      if (array[i] > array[j]) [array[i], array[j]] = [array[j], array[i]];
      noSwap = false;
    }
    if (noSwap) return array;
  }
  return array;
}
