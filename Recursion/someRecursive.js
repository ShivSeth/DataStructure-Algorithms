function someRecursive(arr, func) {
  if (arr.length === 1) return func(arr[0]);
  if (func(arr[0])) return true;
  return someRecursive(arr.slice(1), func);
}
someRecursive([4, 6, 8], (val) => val > 10);
