class Solution {
  /**
   * @param {number[][]} matrix
   * @param {number} target
   * @return {boolean}
   */
  searchMatrix(matrix, target) {
    let ROWS = matrix.length;
    let COLS = matrix[0].length;
    let top = 0;
    let bottom = ROWS - 1;

    while (top <= bottom) {
      let row = Math.floor((top + bottom) / 2);
      if (target > matrix[row][COLS - 1]) {
        top = row + 1;
      } else if (target < matrix[row][0]) {
        bottom = row - 1;
      } else {
        break;
      }
    }
    if (!(top <= bottom)) return false;

    let row = Math.floor((top + bottom) / 2);

    let l = 0;
    let r = COLS - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (matrix[row][mid] < target) l = mid + 1;
      else if (matrix[row][mid] > target) r = mid - 1;
      else return true;
    }
    return false;
  }
}
