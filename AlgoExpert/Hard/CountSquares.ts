export function countSquares(points: number[][]) {
  // Write your code here.

  let points_set = new Set<string>();
  let solution_count = 0;
  for (let point of points) points_set.add(point.toString());
  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      //   if (points[i] === points[j]) continue;
      canCreateSquare(points[i], points[j], points_set);
    }
  }

  function canCreateSquare(
    point_A: number[],
    point_B: number[],
    points_set: Set<string>
  ) {
    let mid_x = (point_A[0] + point_B[0]) / 2;
    let mid_y = (point_A[1] + point_B[1]) / 2;

    let distance_x = point_A[0] - mid_x;
    let distance_y = point_A[1] - mid_y;

    let point_C = [mid_x + distance_y, mid_y - distance_x];
    let point_D = [mid_x - distance_y, mid_y + distance_x];
    if (
      points_set.has(point_C.toString()) &&
      points_set.has(point_D.toString())
    )
      solution_count++;
  }

  return solution_count / 2;
}

countSquares([
  [-1, 4],
  [-2, -1],
  [-4, 2],
  [1, 1],
  [0, 0],
  [0, 1],
  [1, 0],
]);
