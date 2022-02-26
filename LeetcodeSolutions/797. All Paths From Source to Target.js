/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let start = 0;
  let end = graph.length - 1;
  if (start === end) return [graph[start]];
  let map = new Map();
  let paths = [];
  let path = [];
  for (let i = 0; i < graph.length; i++) {
    map.set(i, graph[i]);
  }
  //In undirected graph we need set for the visited vertex info. Since this is a directed graph | Only one direction to move | we need not to keep a visited set.
  //Just pop out the last visited vertex before new visit
  // let set = new Set();
  // function dfs(v) {
  //   if (v === end) {
  //     paths.push([start, ...path]);
  //   }
  //   map.get(v).forEach((neighbor) => {
  //     path.push(neighbor);
  //     dfs(neighbor);
  //     path.pop();
  //   });
  // }
  // dfs(start);
  function bfs(v) {
    let queue = [[v]];
    while (queue.length) {
      //our vertex is now an array holding a path
      let vertex = queue.shift();
      if (vertex[vertex.length - 1] === end) {
        paths.push(vertex);
      }
      map.get(vertex[vertex.length - 1]).forEach((neighbor) => {
        queue.push([...vertex, neighbor]);
      });
    }
  }
  bfs(start);
  return paths;
};

allPathsSourceTarget([[1, 2], [3], [3], []]);
allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []]);
