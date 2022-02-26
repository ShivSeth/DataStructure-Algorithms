//Below is the implementation using Kruskal's algorithm

// /**
//  * @param {number[][]} points
//  * @return {number}
//  */

// var minCostConnectPoints = function (points) {
//   function manhattanDistance(x1, y1, x2, y2) {
//     return Math.abs(x1 - x2) + Math.abs(y1 - y2);
//   }

//   if (points == null || points.length == 0) {
//     return 0;
//   }
//   let distanceArray = [];

//   for (let i = 0; i < points.length - 1; i++) {
//     for (j = i + 1; j < points.length; j++) {
//       distanceArray.push([manhattanDistance(...points[i], ...points[j]), i, j]);
//     }
//   }
//   distanceArray.sort((a, b) => a[0] - b[0]);
//   let uf = new UnionFind(points.length);
//   let result = 0;
//   let mstEdges = 0;

//   for (let [weight, i, j] of distanceArray) {
//     if (!uf.connected(i, j)) {
//       uf.union(i, j);
//       result += weight;
//       mstEdges++;
//     } else if (mstEdges === points.length - 1) {
//       break;
//     }
//   }

//   return result;
// };

// class UnionFind {
//   constructor(size) {
//     this.root = [...new Array(size).keys()];
//   }

//   find(x) {
//     if (x !== this.root[x]) {
//       this.root[x] = this.find(this.root[x]);
//     }
//     return this.root[x];
//   }

//   union(x, y) {
//     this.root[this.find(y)] = this.root[this.find(x)];
//   }

//   connected(x, y) {
//     return this.find(x) === this.find(y);
//   }
// }

// Below is the implementation of Prim's Algorithm

/**
 * @param {number[][]} points
 * @return {number}
 */

var minCostConnectPoints = function (points) {
  function manhattanDistance(x1, y1, x2, y2) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  }

  if (points == null || points.length === 0) {
    return 0;
  }

  let distanceArray = [];
  let result = 0;
  let MSTvertices = points.length;
  let MSTedges = 0;
  let visited = new Set();
  //Taking out the first i.e. 0th element and adding distance wrt to it in distance array & marking visited -> true
  visited.add(0);
  for (let j = 1; j < points.length; j++) {
    distanceArray.push([manhattanDistance(...points[0], ...points[j]), 0, j]);
  }
  while (distanceArray.length && MSTedges < MSTvertices - 1) {
    //I need to use minHeap to stop the TLE in leetcode
    distanceArray.sort((a, b) => a[0] - b[0]);
    let [weight, v1, v2] = distanceArray.shift();
    if (!visited.has(v2)) {
      visited.add(v2);
      result += weight;
      MSTedges++;
      for (j = 0; j < MSTvertices; j++) {
        if (!visited.has(j)) {
          distanceArray.push([
            manhattanDistance(...points[v2], ...points[j]),
            v2,
            j,
          ]);
        }
      }
    }
  }
  return result;
};

// minCostConnectPoints([
//   [3, 12],
//   [-2, 5],
//   [-4, 1],
// ]);

// minCostConnectPoints([
//   [7, 18],
//   [-15, 19],
//   [-18, -15],
//   [-7, 14],
//   [4, 1],
//   [-6, 3],
// ]);

// minCostConnectPoints([
//   [-14, -14],
//   [-18, 5],
//   [18, -10],
//   [18, 18],
//   [10, -2],
// ]);

// minCostConnectPoints([
//   [2, -3],
//   [-17, -8],
//   [13, 8],
//   [-17, -15],
// ]);

// minCostConnectPoints([
//   [0, 0],
//   [2, 2],
//   [3, 10],
//   [5, 2],
//   [7, 0],
// ]);

// Prim's algo doesn't required the UnionFind class implementation
