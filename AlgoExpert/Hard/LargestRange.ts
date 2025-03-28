export function largestRange(array: number[]): [number, number] {
  // Write your code here.
  let hashMap: { [key in string]: boolean } = {};
  for (let i of array) hashMap[i] = false;
  let maxLength = 0;
  hashMap;

  let result: [number, number] = [-1, -1];
  for (let i of array) {
    if (hashMap[i]) continue;
    let currentLength = 1;
    hashMap[i] = true;
    let left = i - 1;
    let right = i + 1;
    while (right in hashMap && !hashMap[right]) {
      hashMap[right] = true;
      currentLength++;
      right = right + 1;
    }
    while (left in hashMap && !hashMap[left]) {
      hashMap[left] = true;
      currentLength++;
      left = left - 1;
    }
    if (currentLength > maxLength) {
      maxLength = currentLength;
      result = [left + 1, right - 1];
    }
  }

  return result;
}

largestRange([1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]);
