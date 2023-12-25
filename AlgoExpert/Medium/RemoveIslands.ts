export function removeIslands(matrix: number[][]) {
  // Write your code here.

  function dfs(
    matrix: number[][],
    i: number,
    j: number,
    row: number,
    column: number
  ) {
    if (
      i < 0 ||
      j < 0 ||
      i >= row ||
      j >= column ||
      matrix[i][j] === 0 ||
      matrix[i][j] === 2
    )
      return;

    matrix[i][j] = 2;
    dfs(matrix, i, j + 1, row, column);
    dfs(matrix, i + 1, j, row, column);
    dfs(matrix, i, j - 1, row, column);
    dfs(matrix, i - 1, j, row, column);
  }

  let row = matrix.length;
  let column = matrix[0].length;

  if (row === 1 || column === 1) return matrix;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j += column - 1) {
      matrix[i][j] === 1 && dfs(matrix, i, j, row, column);
    }
  }

  for (let i = 0; i < row; i += row - 1) {
    for (let j = 0; j < column; j++) {
      matrix[i][j] === 1 && dfs(matrix, i, j, row, column);
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      matrix[i][j] = matrix[i][j] === 1 ? 0 : matrix[i][j] === 2 ? 1 : 0;
    }
  }

  return matrix;
}

removeIslands([
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 1],
  [0, 0, 1, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 1],
]);
