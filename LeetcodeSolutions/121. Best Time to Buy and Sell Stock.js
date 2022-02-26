/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0];
  let maxProfit = 0;
  for (let i = 1; i <= prices.length; i++) {
    if (prices[i - 1] - min > maxProfit) maxProfit = prices[i - 1] - min;
    if (prices[i] < min) min = prices[i];
  }
  return maxProfit;
};

maxProfit([1, 2]);
