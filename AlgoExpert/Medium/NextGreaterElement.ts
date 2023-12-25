export function nextGreaterElement(array: number[]) {
  // Write your code here.

  const result = new Array(array.length).fill(-1);
  const stack: number[] = [];
  for (let i = 0; i < 2 * array.length; i++) {
    let index = i % array.length;
    while (stack.length && array[stack[stack.length - 1]] < array[index]) {
      let position: number = stack.pop()!;
      result[position] = array[index];
    }
    stack.push(index);
  }

  return result;
}

nextGreaterElement([2, 5, -3, -4, 6, 7, 2]);
