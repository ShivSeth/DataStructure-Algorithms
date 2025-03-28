class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    let set = new Set(nums);
    let max = 0;
    for (let i of set) {
      if (!set.has(i - 1)) {
        let temp = 0;
        while (set.has(i + temp)) {
          temp++;
        }
        max = Math.max(temp, max);
      }
    }
    return max;
  }
}
