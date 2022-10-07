function numberOfWaysToMakeChange(n, denoms) {
  // Write your code here.

  let ways = Array(n + 1).fill(0);
  ways[0] = 1;
  for (let j of denoms) {
    for (let i = 1; i <= n; i++) {
      if (j <= i) ways[i] += ways[i - j];
    }
  }
  return ways[n];
}

numberOfWaysToMakeChange(8, [4, 1]);
