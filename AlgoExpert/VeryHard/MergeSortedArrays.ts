export function mergeSortedArrays(arrays: number[][]) {
  // Write your code here.

  let arrayNumbers = arrays.length;
  let maxArrayLength = Math.max(...arrays.map((i) => i.length));

  for (let i = 0; i < maxArrayLength; i++) {}

  return [];
}

mergeSortedArrays([
  [1, 5, 9, 21],
  [-1, 0],
  [-124, 81, 121],
  [3, 6, 12, 20, 150],
]);
