// // DP Solution
// export function minNumberOfJumps(array: number[]) {
//   // Write your code here.

//   let dp = new Array(array.length).fill(Infinity);
//   dp[0] = 0;

//   for (let i = 1; i < dp.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (j + array[j] >= i) dp[i] = Math.min(dp[i], dp[j] + 1);
//     }
//   }

//   return dp.pop();
// }

// Greedy Solution
// Remember Greedy Solution is not always optimal. In our case we can use it
// get the best solution in O(n) Time Complexity
export function minNumberOfJumps(array: number[]) {
  // Write your code here.
  let maxJump = 0;
  let currentEndJump = 0;
  let jumps = 0;

  for (let i = 0; i < array.length - 1; i++) {
    maxJump = Math.max(maxJump, i + array[i]);
    maxJump;
    if (maxJump >= array.length) {
      currentEndJump;
      jumps += 1;
      break;
    }
    if (currentEndJump === i) {
      currentEndJump = maxJump;
      jumps++;
    }
  }
  return jumps;
}

minNumberOfJumps([3, 4, 2, 1, 2, 3, 7, 1, 1, 1, 3]);
// minNumberOfJumps([1]);
