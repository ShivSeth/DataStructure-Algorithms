class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;
    let hashMap1 = {};
    let hashMap2 = {};
    for (let i = 0, j = 0; i < s.length, j < t.length; i++, j++) {
      hashMap1[s[i]] = ++hashMap1[s[i]] || 1;
      hashMap2[t[j]] = ++hashMap2[t[j]] || 1;
    }

    for (let i in hashMap1) if (hashMap1[i] !== hashMap2[i]) return false;

    return true;
  }
}
