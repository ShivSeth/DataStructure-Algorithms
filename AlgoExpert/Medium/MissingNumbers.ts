// export function missingNumbers(nums: number[]) {
//   // Write your code here.
//   const set = new Set(nums);
//   const result: number[] = [];
//   for (let i = 1; i <= nums.length + 2; i++) {
//     if (!set.has(i)) {
//       result.push(i);
//     }
//   }

//   return result;
// }
export function missingNumbers(nums: number[]) {
  // Write your code here.

  let sum = nums.reduce((a, v) => a + v, 0);
  let sumToBe = ((nums.length + 2) * (nums.length + 3)) / 2;
  let avg = Math.trunc((sumToBe - sum) / 2);
  let lessThanAvgSum = nums.filter((i) => i <= avg).reduce((a, v) => a + v, 0);
  let expectedLessThanAvgSum = ((avg + 1) * avg) / 2;
  let expectedGreaterThanAvgSum = sumToBe - expectedLessThanAvgSum;
  let greaterThanAvgSum = nums
    .filter((i) => i > avg)
    .reduce((a, v) => a + v, 0);

  return [
    expectedLessThanAvgSum - lessThanAvgSum,
    expectedGreaterThanAvgSum - greaterThanAvgSum,
  ];
}

missingNumbers([1, 2]);
