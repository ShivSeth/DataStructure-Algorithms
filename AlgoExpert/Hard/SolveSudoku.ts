// export function solveSudoku(board: number[][]) {
//   // Write your code here.
//   solvePartialSudoku(0, 0, board);
//   return board;
// }

// function solvePartialSudoku(
//   row: number,
//   col: number,
//   board: number[][]
// ): boolean {
//   let currentRow = row;
//   let currentCol = col;

//   if (currentCol === board[currentRow].length) {
//     currentCol = 0;
//     currentRow++;
//     if (currentRow === board.length) return true;
//   }

//   if (board[currentRow][currentCol] === 0) {
//     return tryDigitsAtPosition(currentRow, currentCol, board);
//   }
//   return solvePartialSudoku(currentRow, currentCol + 1, board);
// }

// function tryDigitsAtPosition(
//   row: number,
//   col: number,
//   board: number[][]
// ): boolean {
//   for (let i = 1; i < 10; i++) {
//     if (isValid(i, row, col, board)) {
//       board[row][col] = i;
//       if (solvePartialSudoku(row, col + 1, board)) return true;
//     }
//   }
//   board[row][col] = 0;
//   return false;
// }

function isValid(value: number, row: number, col: number, board: number[][]) {
  const isRowValid = !board[row].includes(value);
  const isColValid = !board.map((r) => r[col]).includes(value);

  if (!isColValid || !isRowValid) return false;

  const gridRowIndex = Math.floor(row / 3) * 3;
  const gridColIndex = Math.floor(col / 3) * 3;

  for (let i = gridRowIndex; i < gridRowIndex + 3; i++)
    for (let j = gridColIndex; j < gridColIndex + 3; j++)
      if (board[i][j] === value) return false;

  return true;
}

function solve(board: number[][]) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        for (let digit = 1; digit < 10; digit++) {
          if (isValid(digit, i, j, board)) {
            board[i][j] = digit;
            if (solve(board)) return true;
            board[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

export function solveSudoku(board: number[][]) {
  // Write your code here.
  solve(board);
  return board;
}
