function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxArea = -Infinity;
  while (left < right) {
    let y = Math.min(height[left], height[right]);
    let x = right - left;
    maxArea = Math.max(x * y, maxArea);
    if (height[left] < height[right]) left++;
    else right--;
  }

  return maxArea;
}

maxArea([1, 1]);
