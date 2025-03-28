function maxArea(height: number[]): number {
  //2 - Pointer Approach i.e. L & R
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    maxArea = Math.max(
      Math.min(height[left], height[right]) * (right - left),
      maxArea
    );
    if (height[left] < height[right]) left++;
    else right--;
  }

  return maxArea;
}

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
