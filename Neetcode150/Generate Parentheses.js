class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    return this.backtrack(0, 0, n, [], []);
  }

  backtrack(openCount, closedCount, total, stack, result) {
    if (openCount === closedCount && openCount === total)
      result.push(stack.join(''));
    if (openCount < total) {
      stack.push('(');
      this.backtrack(openCount + 1, closedCount, total, stack, result);
      stack.pop();
    }
    if (closedCount < openCount) {
      stack.push(')');
      this.backtrack(openCount, closedCount + 1, total, stack, result);
      stack.pop();
    }
    return result;
  }
}
