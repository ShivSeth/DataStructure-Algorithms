type Range = [number, number];

export function subarraySort(array: number[]): Range {
  // Write your code here.

  let minValue = Infinity;
  let maxValue = -Infinity;

  for (let i = 0; i < array.length; i++) {
    //reasons to swap
    //minValue -> all the values before it is in sorted order
    //maxValue -> all the values after it is in sorted order
    if (array[i + 1] < array[i] || array[i - 1] > array[i]) {
      minValue = Math.min(minValue, array[i]);
      maxValue = Math.max(maxValue, array[i]);
    }
  }
  if (minValue === Infinity || maxValue === -Infinity) return [-1, -1];
  let minIndex = 0;
  let maxIndex = array.length - 1;

  while (minValue >= array[minIndex]) minIndex++;
  while (maxValue <= array[maxIndex]) maxIndex--;

  return [minIndex, maxIndex];
}

subarraySort([1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]);
// subarraySort([2, 1]);
