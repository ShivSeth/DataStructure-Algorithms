export function collidingAsteroids(asteroids: number[]) {
  // Write your code here.
  let stack: number[] = [];
  for (let i of asteroids) {
    if (i > 0) {
      stack.push(i);
      continue;
    }
    while (stack[stack.length - 1] > 0 && stack[stack.length - 1] < Math.abs(i))
      stack.pop();

    if (stack[stack.length - 1] === Math.abs(i)) stack.pop();
    else if (!stack.length || stack[stack.length - 1] < 0) stack.push(i);
  }
  return stack;
}

// collidingAsteroids([1, 2, 3, -4]);
// collidingAsteroids([5, -5]);
// collidingAsteroids([-3, 5, -8, 6, 7, -4, -7]);
