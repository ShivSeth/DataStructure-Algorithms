class Solution {
  /**
   * @param {number[]} temperatures
   * @return {number[]}
   */
  dailyTemperatures(temperatures) {
    let stack = [];
    let result = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
      while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
        stack;
        let [popTemp, index] = stack.pop();
        result[index] = i - index;
      }
      stack.push([temperatures[i], i]);
    }
    return result;
  }
}
