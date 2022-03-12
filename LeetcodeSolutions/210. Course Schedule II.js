//We will implement the below logic using the Kahn's Algorithm
//Topological Sort will be used only for the acyclic graph
//We can't find a vertex to start with as no vertex has in degree 0

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  let queue = [];
  let result = [];
  let inDegreeValue = new Array(numCourses).fill(0);
  let adjacencyList = {};
  if (numCourses === 0) {
    return result;
  }

  if (prerequisites.length === 0) {
    for (let i = 0; i < numCourses; i++) {
      result[i] = i;
    }
    return result;
  }
  for (let [a, b] of prerequisites) {
    ++inDegreeValue[a];
    if (!adjacencyList[b]) adjacencyList[b] = [];
    adjacencyList[b].push(a);
  }
  for (let i = 0; i < inDegreeValue.length; i++) {
    if (inDegreeValue[i] === 0) queue.push(i);
  }
  //Topological sort applied
  while (queue.length) {
    let vertex = queue.shift();
    result.push(vertex);
    if (adjacencyList[vertex]) {
      for (let nextVertex of adjacencyList[vertex]) {
        inDegreeValue[nextVertex]--;
        if (inDegreeValue[nextVertex] === 0) queue.push(nextVertex);
      }
    }
  }
  return result.length === numCourses ? result : [];
};
findOrder(1, []);
findOrder(3, [[1, 0]]);
findOrder(2, [[0, 1]]);

// findOrder((numCourses = 2), (prerequisites = [[1, 0]]));

// findOrder(
//   (numCourses = 4),
//   (prerequisites = [
//     [1, 0],
//     [2, 0],
//     [3, 1],
//     [3, 2],
//   ])
// );
