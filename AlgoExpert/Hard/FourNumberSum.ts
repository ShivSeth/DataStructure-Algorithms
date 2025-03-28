export function fourNumberSum(array: number[], targetSum: number) {
  // Write your code here.
  array.sort((a, b) => a - b);
  let temp: Array<number> = [];
  let result: Array<Array<number>> = [];

  function kSum(k: number, start: number, target: number) {
    if (k !== 2) {
      for (let i = start; i < array.length - k + 1; i++) {
        if (i !== start && array[i] === array[i - 1]) continue;
        temp.push(array[i]);
        kSum(k - 1, i + 1, target - array[i]);
        temp.pop();
      }
    } else {
      let l = start;
      let r = array.length - 1;
      while (l < r) {
        let tempSum = array[l] + array[r];
        if (tempSum > target) r--;
        else if (tempSum < target) l++;
        else {
          result.push([...temp, array[l], array[r]]);
          l++;
          while (l < r && array[l] === array[l - 1]) l++;
        }
      }
    }
  }
  kSum(4, 0, targetSum);
  return result;
}

fourNumberSum([1, 2, 3, 4, 5, 6, 7], 10);
