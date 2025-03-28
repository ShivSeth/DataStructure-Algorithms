class Solution {
  /**
   * @param {string[]} tokens
   * @return {number}
   */
  evalRPN(tokens) {
    let stack = [];
    let i = 0;
    let set = new Set(['+', '-', '/', '*']);
    while (i !== tokens.length) {
      if (!set.has(tokens[i])) {
        stack.push(+tokens[i]);
      } else {
        let num1 = stack.pop();
        let num2 = stack.pop();
        let result = 0;
        switch (tokens[i]) {
          case '+':
            result = num2 + num1;
            break;
          case '-':
            result = num2 - num1;
            break;
          case '*':
            result = num2 * num1;
            break;
          case '/':
            result = Math.trunc(num2 / num1);
            break;
        }
        stack.push(result);
      }
      i++;
    }
    return stack.pop();
  }
}

Input: tokens = ['1', '2', '+', '3', '*', '4', '-'];

Output: 5;

// Explanation: ((1 + 2) * 3) - 4 = 5;
