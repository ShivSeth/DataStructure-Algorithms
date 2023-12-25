export function riverSizes(matrix: number[][]) {
  // Write your code here.

  const result: number[] = [];
  let count = 0;
  let row = matrix.length;
  let column = matrix[0].length;
  for (let i = 0; i < row; i++)
    for (let j = 0; j < column; j++) {
      let value = dfs(i, j);
      value > 0 && result.push(value);
      count = 0;
    }
  function dfs(i: number, j: number): number {
    if (i >= 0 && j >= 0 && i < row && j < column && matrix[i][j] === 1) {
      matrix[i][j] = 0;
      count++;
      dfs(i + 1, j);
      dfs(i, j + 1);
      dfs(i - 1, j);
      dfs(i, j - 1);
    }
    return count;
  }
  return result;
}
