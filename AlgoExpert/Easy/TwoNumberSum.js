function twoNumberSum(array, targetSum) {
  // Write your code here.

  let map = new Map();
  for (let i = 0; i < array.length; i++) {
    let remaining = targetSum - array[i];
    if (map.has(remaining)) return [array[i], remaining];
    map.set(array[i]);
  }
  return [];
}
