/**
 * @param {number[]} numArr
 * @return {number}
 */
var deleteAndEarn = function (numArr) {
  let min = Infinity;
  let mapCount = {};
  for (let i of numArr) {
    mapCount[i] = mapCount[i] + i || i;
    min = min < i ? min : i;
  }
  let dp = [mapCount[min]];
  dp;
  let keys = Object.keys(mapCount).map((i) => +i);
  for (let i = 1; i < keys.length; i++) {
    dp[i] =
      keys[i] !== keys[i - 1] + 1
        ? dp[i - 1] + mapCount[keys[i]]
        : Math.max((dp[i - 2] ? dp[i - 2] : 0) + mapCount[keys[i]], dp[i - 1]);
  }
  // mapCount = new Map([...mapCount].sort((a, b) => a[0] - b[0]));
  return dp.pop();
};

deleteAndEarn([3, 4, 2]);
deleteAndEarn([3, 2, 2, 3, 3, 4]);
deleteAndEarn([1, 1, 1, 2, 4, 5, 5, 5, 6]);
