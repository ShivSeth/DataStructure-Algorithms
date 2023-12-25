export function revealMinesweeper(
  board: string[][],
  row: number,
  column: number
) {
  // Write your code here.

  function helper(board: string[][], row: number, column: number) {
    if (board[row][column] === 'M') {
      board[row][column] = 'X';
      return;
    }
    const neighbors = getValidNeighbors(board, row, column);
    if (board[row][column] === 'H') {
      let minesCount = 0;
      for (let [i, j] of neighbors) board[i][j] === 'M' && minesCount++;
      if (minesCount) board[row][column] = `${minesCount}`;
      else {
        board[row][column] = `${minesCount}`;
        for (let [i, j] of neighbors) helper(board, i, j);
      }
    }
    function getValidNeighbors(board: String[][], row: number, column: number) {
      let directions = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
        [1, 1],
        [-1, -1],
        [1, -1],
        [-1, 1],
      ];

      let neighbors: number[][] = [];
      for (let [i, j] of directions)
        if (
          !(
            row + i >= board.length ||
            row + i < 0 ||
            column + j >= board[0].length ||
            column + j < 0
          )
        )
          neighbors.push([row + i, column + j]);
      return neighbors;
    }
  }
  helper(board, row, column);
  return board;
}

revealMinesweeper(
  [
    ['H', 'H', 'H', 'H', 'M'],
    ['H', '1', 'M', 'H', '1'],
    ['H', 'H', 'H', 'H', 'H'],
    ['H', 'H', 'H', 'H', 'H'],
  ],
  3,
  4
);
