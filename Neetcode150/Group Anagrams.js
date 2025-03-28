class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    if (strs === '') return [['']];
    let hashMap = {};
    for (let i of strs) {
      let sorted = i.split('').sort();
      if (!(sorted in hashMap)) hashMap[sorted] = [];
      hashMap[sorted].push(i);
    }
    return Object.values(hashMap);
  }
}
