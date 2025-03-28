class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let set = new Set();

    let left = 0;
    let maxL = 0;
    for (let i = 0; i < s.length; i++) {
      let right = i;
      while (set.has(s[right])) {
        set.delete(s[left]);
        left++;
      }
      set.add(s[right]);
      maxL = Math.max(maxL, right - left + 1);
    }
    return maxL;
  }
}
