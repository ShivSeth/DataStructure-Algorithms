class Solution {
  /**
   * @param {character[][]} board
   * @return {boolean}
   */
  isValidSudoku(board) {
    for (let i = 0; i < board.length; i++) {
      let set = new Set();
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] !== '.' && set.has(board[i][j])) return false;
        set.add(board[i][j]);
      }
    }
    for (let i = 0; i < board.length; i++) {
      let set = new Set();
      for (let j = 0; j < board.length; j++) {
        if (board[j][i] !== '.' && set.has(board[j][i])) return false;
        set.add(board[j][i]);
      }
    }
    let grids = [
      [0, 0],
      [0, 3],
      [0, 6],
      [3, 0],
      [3, 3],
      [3, 6],
      [6, 0],
      [6, 3],
      [6, 6],
    ];

    for (let [row, col] of grids) {
      let set = new Set();
      for (let i = row; i < row + 3; i++) {
        for (let j = col; j < col + 3; j++) {
          if (board[i][j] !== '.' && set.has(board[i][j])) return false;
          set.add(board[i][j]);
        }
      }
    }
    return true;
  }
}
