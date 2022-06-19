function isValidSubsequence(array, sequence) {
  // Write your code here.

  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === sequence[count]) count++;
    if (count === sequence.length) return true;
  }
  return false;
}

// Do not edit the line below.

isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
