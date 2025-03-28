class Solution {
  /**
   * @param {number[]} heights
   * @return {number}
   */

  maxArea(heights) {
    let left = 0;
    let right = heights.length - 1;
    let maxArea = 0;
    while (left < right) {
      let height = Math.min(heights[left], heights[right]);
      let width = right - left;
      maxArea = Math.max(maxArea, height * width);
      if (heights[left] < heights[right]) left++;
      else right--;
    }
    return maxArea;
  }
}
