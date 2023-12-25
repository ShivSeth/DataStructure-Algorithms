export function cycleInGraph(edges: number[][]) {
  // Write your code here.

  const totalVertexes = edges.length;

  let visitedStack = new Set<number>();
  let recursionStack = new Set<number>();

  for (let vertex = 0; vertex < totalVertexes; vertex++) {
    if (
      !visitedStack.has(vertex) &&
      dfs(vertex, edges, visitedStack, recursionStack)
    )
      return true;
  }

  return false;
}

function dfs(
  vertex: number,
  edges: Array<Array<number>>,
  visitedStack: Set<number>,
  recursionStack: Set<number>
) {
  visitedStack.add(vertex);
  recursionStack.add(vertex);
  for (let neighbor of edges[vertex]) {
    if (
      (visitedStack.has(neighbor) && recursionStack.has(neighbor)) ||
      dfs(neighbor, edges, visitedStack, recursionStack)
    )
      return true;
  }
  recursionStack.delete(vertex);
  return false;
}

cycleInGraph([[1, 2], [2], []]);
// cycleInGraph([[1, 3], [2, 3, 4], [0], [], [2, 5], []]);
