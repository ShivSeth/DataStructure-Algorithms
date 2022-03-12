/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  //we will have to sue brute force -> thus backtracking/dfs/recursion
  //in these cases we will create a decision tree having the height K
  //When we are
  if (k > n) return [[]];
  let result = [];
  function backtrack(start = 1, combination = []) {
    if (combination.length === k) {
      result.push(combination.slice());
      return;
    }
    for (let i = start; i <= n; i++) {
      combination.push(i);
      combination;
      backtrack(i + 1, combination);
      combination;
      combination.pop();
      combination;
    }
  }
  backtrack();
  return result;
};
combine(4, 2);
