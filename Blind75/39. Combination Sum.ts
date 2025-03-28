function combinationSum(candidates: number[], target: number): number[][] {
  let result: Array<Array<number>> = [];
  let temp: Array<number> = [];

  candidates.sort((a, b) => a - b);

  function backtrack(index, target) {
    if (target === 0) {
      result.push([...temp]);
      return;
    }
    if (index === candidates.length || candidates[index] > target) return;

    backtrack(index + 1, target); //ignore the current element
    temp.push(candidates[index]); //added since we included the current element
    backtrack(index, target - candidates[index]); //include the current element
    temp.pop();
  }

  backtrack(0, target);

  return result;
}

// combinationSum([2, 3, 6, 7], 7);
combinationSum([8, 7, 4, 3], 11);

//Remember the Backtrack is solved by DFS algorithm
