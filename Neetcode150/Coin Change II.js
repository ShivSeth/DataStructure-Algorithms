class Solution {
  /**
   * @param {number} amount
   * @param {number[]} coins
   * @return {number}
   */
  change(amount, coins) {
    let ways = new Array(amount + 1).fill(0);
    //Not selecting any of the coins
    ways;
    ways[0] = 1;

    for (let coin of coins)
      for (let value = 1; value <= amount; value++) {
        if (coin <= value) ways[value] = ways[value] + ways[value - coin];
      }
    return ways[amount];
  }
}

let s = new Solution();

s.change(4, [1, 2, 3]);

Input: Output: 4;
