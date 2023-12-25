export function sweetAndSavory(dishes: number[], target: number) {
  // Write your code here.
  if (!dishes.length) return [0, 0];
  dishes.sort((a, b) => a - b);
  let left = 0;
  let right = dishes.length - 1;
  let diff = 0;
  let bestDiff = -Infinity;
  let valueHolder = [0, 0];
  dishes;
  while (dishes[left] < 0 && dishes[right] > 0) {
    diff = dishes[left] + dishes[right];
    if (diff <= target) {
      if (diff >= bestDiff) {
        bestDiff = diff;
        valueHolder = [dishes[left], dishes[right]];
      }
      left++;
    } else right--;
  }
  return valueHolder;
}

// sweetAndSavory([2, 4, -4, -7, 12, 100, -25], -1);
// sweetAndSavory([3, 5, 7, 2, 6, 8, 1], 10);
sweetAndSavory([-3, -5, 1, 7], 8);
