export function maxSumIncreasingSubsequence(
  array: number[]
): [number, number[]] {
  // Write your code here.
  let maxSumArray: number[] = [...array.keys()];
  let dp: number[] = [...array];
  let maxSumStartIndex = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] > array[j] && dp[i] < array[i] + dp[j]) {
        maxSumArray[i] = j;
        dp[i] = array[i] + dp[j];
      }
    }
    dp[i] > dp[maxSumStartIndex] && (maxSumStartIndex = i);
  }

  function buildSequence(maxSumArray: number[], startIndex: number) {
    let result: Array<number> = [];
    while (startIndex !== maxSumArray[startIndex]) {
      result.push(array[startIndex]);
      startIndex = maxSumArray[startIndex];
    }
    result.push(array[startIndex]);
    return result.reverse();
  }
  return [dp[maxSumStartIndex], buildSequence(maxSumArray, maxSumStartIndex)];
}

// maxSumIncreasingSubsequence([-1, 1]);
maxSumIncreasingSubsequence([8, 12, 2, 3, 15, 5, 7]);
