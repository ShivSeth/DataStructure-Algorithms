/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  //dp solution

  // for (let r = 0; r < mat.length; r++) {
  //   for (let c = 0; c < mat[0].length; c++) {
  //     if (mat[r][c]) mat[r][c] = Infinity;
  //   }
  // }
  // // left and top comparison || forward iteration
  // for (let r = 0; r < mat.length; r++) {
  //   for (let c = 0; c < mat[0].length; c++) {
  //     if (r > 0) {
  //       if (mat[r][c] > mat[r - 1][c] + 1) mat[r][c] = mat[r - 1][c] + 1;
  //     }
  //     if (c > 0) {
  //       if (mat[r][c] > mat[r][c - 1] + 1) mat[r][c] = mat[r][c - 1] + 1;
  //     }
  //   }
  // }
  // mat;
  // //bottom and right comparison || backward iteration
  // for (let r = mat.length - 1; r >= 0; r--) {
  //   for (let c = mat[0].length - 1; c >= 0; c--) {
  //     if (r < mat.length - 1) {
  //       if (mat[r][c] > mat[r + 1][c] + 1) mat[r][c] = mat[r + 1][c] + 1;
  //     }
  //     if (c < mat[0].length - 1) {
  //       if (mat[r][c] > mat[r][c + 1] + 1) mat[r][c] = mat[r][c + 1] + 1;
  //     }
  //   }
  // }

  // return mat;

  //No dfs solution is plausible as we need the nearest neighbor
  //Below solution works but fails because of TLE 😥
  let output = new Array(mat.length)
    .fill(0)
    .map((i) => new Array(mat[0].length).fill(0));
  let directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];
  for (let r = 0; r < mat.length; r++) {
    for (let c = 0; c < mat[0].length; c++) {
      if (!(mat[r][c] === 0)) {
        bfs(r, c);
      }
    }
  }
  mat;
  return output;

  function bfs(r, c) {
    let tempQueue = [];
    mat[r][c] = -1;
    let queue = [[r, c, 1]];
    let step = 0;
    while (queue.length) {
      step++;
      // let [x, y, step] = queue.shift();
      for (let [x, y] of queue)
        for (let [dx, dy] of directions) {
          let X = x + dx;
          let Y = y + dy;
          if (
            X < 0 ||
            Y < 0 ||
            X >= mat.length ||
            Y >= mat[0].length ||
            mat[X][Y] === -1
          )
            continue;
          else if (mat[X][Y] === 0) {
            mat[r][c] = 1;
            return (output[r][c] = step);
          }
          tempQueue.push([X, Y]);
          // queue.push([X, Y, step + 1]);
        }
      queue = [...tempQueue];
      tempQueue = [];
    }
  }

  //proper way to use the bfs approach 😋
  // let output = new Array(mat.length)
  //   .fill(0)
  //   .map((i) => new Array(mat[0].length).fill(Infinity));
  // let directions = [
  //   [-1, 0],
  //   [1, 0],
  //   [0, -1],
  //   [0, 1],
  // ];
  // let queue = [];
  // for (let r = 0; r < mat.length; r++) {
  //   for (let c = 0; c < mat[0].length; c++) {
  //     if (mat[r][c] === 0) {
  //       queue.push([r, c]);
  //       output[r][c] = 0;
  //     }
  //   }
  // }
  // bfs(queue);

  // return output;

  // function bfs(queue) {
  //   while (queue.length) {
  //     let [x, y] = queue.shift();
  //     for (let [dx, dy] of directions) {
  //       let X = x + dx;
  //       let Y = y + dy;
  //       if (X < 0 || Y < 0 || X >= mat.length || Y >= mat[0].length) continue;
  //       if (output[X][Y] > output[x][y] + 1) {
  //         output[X][Y] = output[x][y] + 1;
  //         queue.push([X, Y]);
  //       }
  //     }
  //   }
  // }
};

updateMatrix([
  [1, 0, 0],
  [1, 1, 1],
  [1, 1, 1],
]);

// updateMatrix([
//   [1, 0, 1, 1, 0, 0, 1, 0, 0, 1],
//   [0, 1, 1, 0, 1, 0, 1, 0, 1, 1],
//   [0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
//   [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
//   [0, 1, 0, 1, 1, 0, 0, 0, 0, 1],
//   [0, 0, 1, 0, 1, 1, 1, 0, 1, 0],
//   [0, 1, 0, 1, 0, 1, 0, 0, 1, 1],
//   [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
//   [1, 1, 1, 1, 1, 1, 1, 0, 1, 0],
//   [1, 1, 1, 1, 0, 1, 0, 0, 1, 1],
// ]);

// updateMatrix([
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [1, 1, 1],
//   [0, 0, 0],
// ]);
