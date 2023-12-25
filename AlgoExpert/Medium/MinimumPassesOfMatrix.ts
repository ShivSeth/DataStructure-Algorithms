export function minimumPassesOfMatrix(matrix: number[][]) {
  // Write your code here.
  let row = matrix.length;
  let column = matrix[0].length;

  let queue: Array<Array<number>> = [];
  let passCount = 0;

  for (let i = 0; i < row; i++)
    for (let j = 0; j < column; j++) if (matrix[i][j] > 0) queue.push([i, j]);

  while (queue.length) {
    let temp = queue;
    queue = [];

    while (temp.length) {
      let [i, j] = temp.shift()!;
      if (i < row - 1 && matrix[i + 1][j] < 0) {
        matrix[i + 1][j] = matrix[i + 1][j] * -1;
        queue.push([i + 1, j]);
      }
      if (j < column - 1 && matrix[i][j + 1] < 0) {
        matrix[i][j + 1] = matrix[i][j + 1] * -1;
        queue.push([i, j + 1]);
      }

      if (i > 0 && matrix[i - 1][j] < 0) {
        matrix[i - 1][j] = matrix[i - 1][j] * -1;
        queue.push([i - 1, j]);
      }
      if (j > 0 && matrix[i][j - 1] < 0) {
        matrix[i][j - 1] = matrix[i][j - 1] * -1;
        queue.push([i, j - 1]);
      }
    }
    queue.length && passCount++;
  }
  return Math.min(...matrix.flat(1)) < 0 ? -1 : passCount;
}

minimumPassesOfMatrix([
  [1, 0, 0, -2, -3],
  [-4, -5, -6, -2, -1],
  [0, 0, 0, 0, -1],
  [-1, 0, 3, 0, 3],
]);
