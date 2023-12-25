export function sortStack(stack: number[]) {
  // Write your code here.

  if (stack.length === 1 || !stack.length) return stack;

  let value = stack.pop()!;
  sortStack(stack);

  helper(stack, value);
  return stack;
}

function helper(stack: number[], value: number) {
  if (!stack.length || stack[stack.length - 1] <= value) {
    stack.push(value);
    return;
  }
  let top = stack.pop()!;
  helper(stack, value);
  stack.push(top);
}

sortStack([-5, 3, 0, -8]);
