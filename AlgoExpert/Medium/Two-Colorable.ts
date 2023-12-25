export function twoColorable(edges: number[][]) {
  // Write your code here.

  let whiteSet = new Set<number>();
  let blackSet = new Set<number>();
  const COLOR = {
    WHITE: 'white',
    BLACK: 'black',
  };
  whiteSet.add(0);
  let queue = [0];

  while (queue.length) {
    let vertex = queue.pop()!;
    let vertexColor = blackSet.has(vertex) ? COLOR.BLACK : COLOR.WHITE;
    for (let neighbor of edges[vertex]) {
      if (
        (blackSet.has(neighbor) && blackSet.has(vertex)) ||
        (whiteSet.has(neighbor) && whiteSet.has(vertex))
      )
        return false;
      else if (whiteSet.has(neighbor) || blackSet.has(neighbor)) continue;
      else {
        vertexColor === COLOR.WHITE
          ? blackSet.add(neighbor)
          : whiteSet.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return true;
}

twoColorable([
  [1, 2],
  [0, 2],
  [0, 1],
]);
