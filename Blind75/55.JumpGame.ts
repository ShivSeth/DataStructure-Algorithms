// DP solution - Time Complexity: O(n) | Space Complexity: O(n)
// function canJump(nums: number[]): boolean {
//   let dp: boolean[] = new Array(nums.length).fill(false);

//   dp[0] = true;
//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (dp[j] && j + nums[j] >= i) {
//         dp[i] = true;
//         break;
//       }
//     }
//   }
//   return dp[nums.length - 1];
// }

// Greedy Solution - Time Complexity: O(n) | Space Complexity: O(1)
function canJump(nums: number[]): boolean {
  let endIndex = nums.length - 1;
  for (let i = endIndex; i >= 0; i--) {
    if (i + nums[i] >= endIndex) endIndex = i;
  }

  return !Boolean(endIndex);
}

canJump([0, 0]);
