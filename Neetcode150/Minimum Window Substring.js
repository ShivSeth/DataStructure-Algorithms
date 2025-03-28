class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  minWindow(s, t) {
    let set = new Set(t);
    let min = 0;
    let left = 0;
    let right = 0;
    while (left <= right) {
      let char = s[left];
      if (set.has(char)) {
        set;
      }
    }
  }
}

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

function minWindow(s: string, t: string): string {
  let hashMap: Record<string, number> = {};
  let left = 0;
  let right = 0;
  let len = Infinity;
  let minStr = '';
  for (let i of t) hashMap[i] = ++hashMap[i] || 1;
  let count = Object.keys(hashMap).length;
  hashMap;

  while (right <= s.length) {
    let rChar = s[right];

    if (rChar in hashMap) {
      hashMap[rChar]--;
      //acting like a counter unless all the char has been spotted
      if (hashMap[rChar] === 0) count--;
    }
    right++;

    while (count === 0) {
      len = Math.min(right - left, len);
      if (len === right - left) minStr = s.substring(left, right);
      let lChar = s[left];
      if (lChar in hashMap) {
        hashMap[lChar]++;
        if (hashMap[lChar] > 0) count++;
      }
      left++;
    }
  }
  return minStr;
}
// minWindow('ADOBECODEBANC', 'ABC');
// minWindow('aaaaaaaaaaaabbbbbcdd', 'abcdd');
