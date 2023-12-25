export function hasSingleCycle(array: number[]) {
  // Write your code here.
  let length = array.length;
  let counter = 0;
  let index = 0;
  while (counter < length) {
    if (counter > 0 && index === 0) return false;
    counter++;
    index =
      (index + array[index]) % length >= 0
        ? (index + array[index]) % length
        : ((index + array[index]) % length) + length;
  }
  return index === 0;
}

hasSingleCycle([0, 1, 1, 1, 1]);
