type Range = [number, number];

export function searchInSortedMatrix(
  matrix: number[][],
  target: number
): Range {
  // Write your code here.
  let start: number = 0;
  let end: number = matrix[0].length - 1;

  let result: Range = [-1, -1];

  while (start >= 0 && end >= 0) {
    if (matrix[start][end] > target) end--;
    else if (matrix[start][end] < target) start++;
    else return (result = [start, end]);
  }

  return result;
}

searchInSortedMatrix(
  [
    [1, 4, 7, 12, 15, 1000],
    [2, 5, 19, 31, 32, 1001],
    [3, 8, 24, 33, 35, 1002],
    [40, 41, 42, 44, 45, 1003],
    [99, 100, 103, 106, 128, 1004],
  ],
  2
);
