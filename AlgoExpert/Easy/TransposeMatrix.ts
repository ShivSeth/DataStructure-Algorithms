export function transposeMatrix(matrix: number[][]) {
  // Write your code here.

  console.log(Array.isArray(new Array(6)));

  const result: number[][] = new Array(matrix[0].length)
    .fill(0)
    .map((_) => new Array(matrix.length));
  result;
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++) {
      result[j][i] = matrix[i][j];
    }

  return result;
}
transposeMatrix([
  [1, 3, 5],
  [2, 4, 6],
]);
