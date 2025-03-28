class Solution {
  /**
   * @param {number[]} prices
   * @return {number}
   */
  maxProfit(prices) {
    let left = 0;
    let max = 0;
    for (let right = 1; right < prices.length; right++) {
      if (prices[left] > prices[right]) left = right;
      max = Math.max(max, prices[right] - prices[left]);
    }
    return max;
  }
}

Input: prices = [10, 1, 5, 6, 7, 1];

Output: 6;
