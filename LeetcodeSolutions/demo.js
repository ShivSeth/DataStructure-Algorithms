/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let freshCount = 0;
  let rottenQueue = [];
  for (let x = 0; x < m; x++) {
    for (y = 0; y < n; y++) {
      if (grid[x][y] === 1) freshCount++;
      if (grid[x][y] === 2) rottenQueue.push([x, y]);
    }
  }

  let directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  let tempRottenQueue = [];
  let minutes = 0;
  function bfs(matrix) {
    while (rottenQueue.length) {
      console.log(rottenQueue, freshCount);
      console.log(matrix);
      minutes++;
      for (let [x, y] of rottenQueue) {
        for (let [dx, dy] of directions) {
          let X = x + dx;
          let Y = y + dy;
          if (
            X < 0 ||
            Y < 0 ||
            X >= m ||
            Y >= n ||
            matrix[X][Y] === 0 ||
            matrix[X][Y] === 2
          ) {
            continue;
          }
          console.log(X, Y);
          matrix[X][Y] = 2;
          tempRottenQueue.push([X, Y]);
          freshCount--;
        }
      }
      if (tempRottenQueue.length > 0) rottenQueue = [...tempRottenQueue];
      tempRottenQueue = [];
    }
  }
  bfs(grid);
};

orangesRotting([
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 0],
]);
