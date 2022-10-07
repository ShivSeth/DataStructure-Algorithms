//Iterative solution below
// function minNumberOfCoinsForChange(n, denoms) {
//   // Write your code here.

//   let ways = Array(n + 1).fill(Infinity);
//   ways[0] = 0;

//   for (let denom of denoms) {
//     for (let j = 0; j < ways.length; j++) {
//       if (denom <= j) ways[j] = Math.min(ways[j], ways[j - denom] + 1);
//     }
//   }
//   return ways[n] === Infinity ? -1 : ways[n];
// }

//Recursive solution below
function minNumberOfCoinsForChange(n, denoms) {
  // Write your code here.
  let ways = Array(n + 1).fill(null);
  ways[0] = 0;

  function helper(amount, denoms) {
    if (ways[amount] === null) {
      let min = Infinity;
      for (let denom of denoms) {
        if (denom <= amount) {
          min = Math.min(helper(amount - denom, denoms) + 1, min);
        }
        ways[amount] = min;
      }
    }
    return ways[amount];
  }
  helper(n, denoms);
  return ways[n] === Infinity ? -1 : ways[n];
}

minNumberOfCoinsForChange(8, [2, 4, 8]);
