export function interweavingStrings(one: string, two: string, three: string) {
  // Write your code here.

  // for better space complexity use hashmap
  let dp = new Array(one.length + 1)
    .fill(0)
    .map((i) => new Array(two.length + 1));

  function dfs(i: number, j: number) {
    if (i === one.length && j === two.length && i + j === three.length)
      return true;
    if (dp[i][j] !== undefined) return dp[i][j];
    if (i < one.length && one[i] === three[i + j] && dfs(i + 1, j)) return true;
    if (j < two.length && two[j] === three[i + j] && dfs(i, j + 1)) return true;
    return (dp[i][j] = false);
  }
  return dfs(0, 0);
}

interweavingStrings(
  'algoexpert',
  'your-dream-job',
  'your-algodream-expertjob1'
);
