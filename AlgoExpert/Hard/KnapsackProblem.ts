export function knapsackProblem(
  items: [number, number][],
  capacity: number
): [number, number[]] {
  // Write your code here.
  // Replace return below.

  let dp = new Array(items.length + 1)
    .fill(0)
    .map((i) => new Array(capacity + 1).fill(0));
  let row = dp.length;
  let column = dp[0].length;

  for (let item = 1; item < row; item++)
    for (let capacity = 0; capacity < column; capacity++) {
      let [value, weight] = items[item - 1];
      if (weight > capacity) dp[item][capacity] = dp[item - 1][capacity];
      else
        dp[item][capacity] = Math.max(
          dp[item - 1][capacity],
          dp[item - 1][capacity - weight] + value
        );
    }

  const sequence: number[] = [];
  row = row - 1;
  column = column - 1;

  while (row > 0 && column > 0) {
    if (dp[row][column] === dp[row - 1][column]) row--;
    else {
      row--;
      sequence.push(row);
      column -= items[row][1];
    }
  }
  return [
    dp[items.length][capacity], // total value
    sequence.reverse(), // item indices
  ];
}

knapsackProblem(
  [
    [1, 2],
    [4, 3],
    [5, 6],
    [6, 7],
  ],
  10
);
