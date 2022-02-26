/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (source === destination) return true;
  //use this flag to break the loop before hand when any of the path is found
  let flag = false;
  let map = new Map();
  for (let i of edges) {
    if (map.has(i[0])) map.get(i[0]).push(i[1]);
    else map.set(i[0], [i[1]]);
    if (map.has(i[1])) map.get(i[1]).push(i[0]);
    else map.set(i[1], [i[0]]);
  }
  //To check the visited vertices
  let set = new Set();

  //For the faster implementation use the recursive approach

  // function dfs(v) {
  //   set.add(v);
  //   if (set.has(destination)) flag = true;

  //   let neighborVertex = map.get(v);

  //   for (let i = 0; i < neighborVertex.length && flag !== true; i++) {
  //     if (!set.has(neighborVertex[i])) dfs(neighborVertex[i]);
  //   }
  // }
  function bfs(v) {
    let queue = [v];
    while (queue.length) {
      let vertex = queue.shift();
      if (vertex === destination) return true;
      set.add(vertex);
      map.get(vertex).forEach((neighbor) => {
        if (!set.has(neighbor)) {
          set.add(neighbor);
          queue.push(neighbor);
        }
      });
    }
    return false;
  }

  // dfs(source);
  return bfs(source);
  // return flag;
};

validPath(
  10,
  [
    [4, 3],
    [1, 4],
    [4, 8],
    [1, 7],
    [6, 4],
    [4, 2],
    [7, 4],
    [4, 0],
    [0, 9],
    [5, 4],
  ],
  5,
  9
);

validPath(1, [], 0, 0);

validPath(
  6,
  [
    [0, 1],
    [0, 2],
    [3, 5],
    [5, 4],
    [4, 3],
  ],
  0,
  5
);

validPath(
  3,
  [
    [0, 1],
    [1, 2],
    [2, 0],
  ],
  0,
  2
);
