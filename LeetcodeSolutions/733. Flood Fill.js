/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  //dfs solution below
  // let oldColor = image[sr][sc];
  // if (oldColor === newColor) return image;
  // const dfs = (r, c) => {
  //   if (
  //     r < 0 ||
  //     c < 0 ||
  //     r >= image.length ||
  //     c >= image[0].length ||
  //     image[r][c] !== oldColor
  //   ) {
  //     return;
  //   }
  //   image[r][c] = newColor;
  //   image;
  //   dfs(r + 1, c);
  //   dfs(r, c + 1);
  //   dfs(r - 1, c);
  //   dfs(r, c - 1);
  // };
  // dfs(sr, sc);
  // return image;

  //bfs way to solve the problem - 😎
  let oldColor = image[sr][sc];
  if (oldColor === newColor) return image;
  //Initial Value
  let queue = [[sr, sc]];
  let directions = [
    [1, 0],
    [0, 1],
    [0, -1],
    [-1, 0],
  ];
  //Looping the queue or we can use while and shift/push too
  for (let [x, y] of queue) {
    image[x][y] = newColor;
    for (let [dx, dy] of directions) {
      let X = x + dx;
      let Y = y + dy;
      if (
        X < 0 ||
        Y < 0 ||
        X >= image.length ||
        Y >= image[0].length ||
        image[X][Y] !== oldColor
      ) {
        continue;
      }
      queue.push([X, Y]);
    }
  }
  return image;
};

// floodFill(
//   (image = [
//     [0, 0, 0],
//     [0, 0, 0],
//   ]),
//   (sr = 0),
//   (sc = 0),
//   (newColor = 2)
// );

// floodFill(
//   [
//     [0, 0, 0],
//     [0, 1, 0],
//   ],
//   1,
//   1,
//   2
// );

floodFill(
  [
    [0, 0, 0],
    [0, 1, 1],
  ],
  1,
  1,
  1
);

// floodFill(
//   [
//     [1, 1, 1],
//     [1, 1, 0],
//     [1, 0, 1],
//   ],
//   1,
//   1,
//   2
// );
