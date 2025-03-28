export function zigzagTraverse(array: number[][]) {
  // Write your code here.
  //kindly consider the edge cases as well when row = 0 and colEnd OR col = 0 and rowEnd
  let rowStart = 0;
  let colStart = 0;
  let rowEnd = array.length - 1;
  let colEnd = array[0].length - 1;
  let row = 0;
  let col = 0;
  let result: number[] = [];
  let down = true;
  while (row >= rowStart && row <= rowEnd && col >= colStart && col <= colEnd) {
    result.push(array[row][col]);
    if (down) {
      if (col === colStart || row === rowEnd) {
        down = false;
        if (row === rowEnd) col++;
        else row++;
      } else {
        col--;
        row++;
      }
    } else {
      if (col === colEnd || row === 0) {
        down = true;
        if (col === colEnd) row++;
        else col++;
      } else {
        col++;
        row--;
      }
    }
  }

  return result;
}

zigzagTraverse([
  [1, 3, 4, 10, 11],
  [2, 5, 9, 12, 19],
  [6, 8, 13, 18, 20],
  [7, 14, 17, 21, 24],
  [15, 16, 22, 23, 25],
]);
