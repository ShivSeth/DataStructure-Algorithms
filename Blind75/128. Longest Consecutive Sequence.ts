function longestConsecutive(nums: number[]): number {
  if (!nums.length) return 0;
  let set = new Set(nums);
  let longest = 0;
  for (let i of set) {
    if (!set.has(i - 1)) {
      let currentLength = 0;
      while (set.has(i + currentLength)) currentLength++;
      longest = Math.max(longest, currentLength);
    }
  }
  return longest;
}

longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]);
longestConsecutive([100, 4, 200, 1, 3, 2]);
longestConsecutive([0, -1]);

longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]);
