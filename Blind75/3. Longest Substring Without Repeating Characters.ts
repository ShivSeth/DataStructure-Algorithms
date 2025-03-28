function lengthOfLongestSubstring(s: string): number {
  let set = new Set();
  let max = 0;
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    let right = i;
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(right - left + 1, max);
  }
  return max;
}

// abcabcbb -> 3

lengthOfLongestSubstring('abcabcbb');
