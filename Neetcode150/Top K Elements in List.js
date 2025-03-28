class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  topKFrequent(nums, k) {
    let hashMap = {};
    let result = [];
    for (let i of nums) {
      hashMap[i] = ++hashMap[i] || 1;
    }
    let temp = Object.entries(hashMap).sort((a, b) => a[1] - b[1]);

    while (k) {
      result.push(temp.pop()[0]);
      k--;
    }
    return result;
  }
}

Input: (nums = [1, 2, 2, 3, 3, 3]), (k = 2);

Output: [2, 3];
