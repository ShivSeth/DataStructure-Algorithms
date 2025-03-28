function containsDuplicate(nums: number[]): boolean {
  let set = new Set();
  for (let i of nums) {
    if (set.has(i)) return true;
    set.add(i);
  }
  return false;
}
