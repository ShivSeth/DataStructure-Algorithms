export function dijkstrasAlgorithm(start: number, edges: number[][][]) {
  let visited = new Set<number>();
  let minDistances = new Array(edges.length).fill(Infinity);
  minDistances[start] = 0;
  while (visited.size !== edges.length) {
    let [minIndex, minDistance] = getVertexWithMinDistance(
      minDistances,
      visited
    );
    visited.add(minIndex);

    if (minDistance === Infinity) break;

    for (let edge of edges[minIndex]) {
      let [vertex, distance] = edge;

      if (visited.has(vertex)) continue;
      if (minDistances[vertex] > distance + minDistance) {
        minDistances[vertex] = distance + minDistance;
      }
    }
  }

  visited;

  return minDistances.map((i) => (i === Infinity ? -1 : i));
}

function getVertexWithMinDistance(
  minDistances: number[],
  visited: Set<number>
) {
  let minIndex = -1;
  let minDistance = Infinity;

  for (let index = 0; index < minDistances.length; index++) {
    if (visited.has(index)) continue;
    if (minDistance >= minDistances[index]) {
      minIndex = index;
      minDistance = minDistances[index];
    }
  }

  return [minIndex, minDistance];
}

dijkstrasAlgorithm(0, [
  [[1, 7]],
  [
    [2, 6],
    [3, 20],
    [4, 3],
  ],
  [[3, 14]],
  [[4, 2]],
  [],
  [],
]);
