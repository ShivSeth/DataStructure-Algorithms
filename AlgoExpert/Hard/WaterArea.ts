export function waterArea(heights: number[]) {
  // Write your code here.

  let maxArea = 0;
  let left = 0;
  let right = heights.length - 1;
  let leftMax = heights[left];
  let rightMax = heights[right];

  while (left < right) {
    if (heights[right] >= heights[left]) {
      left++;
      leftMax = Math.max(leftMax, heights[left]);
      maxArea += leftMax - heights[left];
    } else {
      rightMax = Math.max(rightMax, heights[right]);
      maxArea += rightMax - heights[right];
      right--;
    }
  }
  return maxArea;
}

// waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]);
// waterArea([0, 1, 1, 0, 0]);

waterArea([1, 4, 1]);
