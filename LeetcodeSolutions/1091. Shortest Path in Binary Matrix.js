/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function (grid) {
  //Starting point not available
  if (grid[0][0] === 1) return -1;

  let n = grid.length;
  let result = -1;
  //We need to create a direction array so as to use it in the while loop
  let directions = [
    [1, 0],
    [-1, 0],
    [1, 1],
    [-1, -1],
    [-1, 1],
    [1, -1],
    [0, 1],
    [0, -1],
  ];
  function bfs(matrix) {
    //Initial values for the queue with step as 1
    let queue = [[0, 0, 1]];
    while (queue.length) {
      let [x, y, step] = queue.shift();
      //Return the step if the flow reaches the last path
      if (x === n - 1 && y === n - 1) return step;
      //checking all the directions for the current position
      for (let [dx, dy] of directions) {
        let X = x + dx;
        let Y = y + dy;
        if (X < 0 || Y < 0 || X >= n || Y >= n || matrix[X][Y] === 1) {
          continue;
        }
        matrix[X][Y] = 1;
        queue.push([X, Y, step + 1]);
      }
    }
    return -1;
  }
  return bfs(grid);
};

shortestPathBinaryMatrix([
  [0, 0, 0],
  [1, 1, 0],
  [1, 1, 0],
]);
