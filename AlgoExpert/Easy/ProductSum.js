function productSum(array) {
  // Write your code here.
  function helper(array, multiple = 1) {
    let count = 0;
    for (let i of array) {
      count += Array.isArray(i) ? (multiple + 1) * helper(i, multiple + 1) : i;
    }
    return count;
  }

  return helper(array);
}

productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]]);
