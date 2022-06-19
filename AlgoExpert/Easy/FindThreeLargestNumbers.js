function findThreeLargestNumbers(array) {
  // Write your code here.
  let a = -Infinity;
  let b = -Infinity;
  let c = -Infinity;
  for (let i of array) {
    c = i < a && i < b ? (i > c ? i : c) : i >= b ? b : c;
    b = i < a ? (i > b ? i : b) : i >= a ? a : b;
    a = i > a ? i : a;
  }

  return [c, b, a];
}
findThreeLargestNumbers([2, 2, 3, 1]);
