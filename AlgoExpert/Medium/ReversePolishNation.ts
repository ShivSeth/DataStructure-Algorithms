export function reversePolishNotation(tokens: string[]) {
  // Write your code here.

  const stack: string[] = [];

  let operationSet = new Set(['+', '-', '/', '*']);

  for (let i of tokens) {
    if (operationSet.has(i)) {
      let num1 = +stack.pop()!;
      let num2 = +stack.pop()!;
      switch (i) {
        case '+':
          stack.push(`${num2 + num1}`);
          break;
        case '-':
          stack.push(`${num2 - num1}`);
          break;
        case '*':
          stack.push(`${num2 * num1}`);
          break;
        case '/':
          stack.push(`${Math.trunc(num2 / num1)}`);
          break;
      }
    } else stack.push(i);
    stack;
  }

  return +stack.pop()!;
}

reversePolishNotation(['50', '3', '17', '+', '2', '-', '/']);
