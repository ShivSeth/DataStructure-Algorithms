export function knightConnection(knightA: number[], knightB: number[]) {
  // Write your code here.
  let moves = [
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
  ];
  //visited set is need to optimize the whole algorithm and execute in the stipulated time
  let visited = new Set();
  let queue: Array<Array<number>> = [[...knightA, 0]];
  while (queue.length) {
    let [x, y, steps] = queue.shift()!;
    if (x === knightB[0] && y === knightB[1]) return Math.ceil(steps / 2);
    for (let [i, j] of moves) {
      if (visited.has([x + i, y + j].toString())) continue;
      queue.push([x + i, y + j, steps + 1]);
      visited.add([x + i, y + j].toString());
    }
  }
}

knightConnection([0, 0], [4, 2]);
