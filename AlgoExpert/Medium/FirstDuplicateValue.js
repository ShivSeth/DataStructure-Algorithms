function firstDuplicateValue({ array }) {
  // Write your code here.
  let set = new Set();
  for (let i of array) {
    if (set.has(i)) return i;
    set.add(i);
  }

  return -1;
}

firstDuplicateValue({
  array: [1, 1],
});
