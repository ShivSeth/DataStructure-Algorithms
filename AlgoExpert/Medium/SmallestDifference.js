function smallestDifference({ arrayOne, arrayTwo }) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let minDiff = [];
  let diff = Infinity;
  let m = 0,
    n = 0;
  while (m < arrayOne.length && n < arrayTwo.length) {
    let temp = Math.abs(arrayOne[m] - arrayTwo[n]);
    if (diff > temp) {
      diff = temp;
      minDiff = [arrayOne[m], arrayTwo[n]];
    }
    if (temp === 0) {
      return minDiff;
    } else if (arrayOne[m] > arrayTwo[n]) {
      n++;
    } else {
      m++;
    }
  }
  return minDiff;
}

// smallestDifference({
//   arrayOne: [0, 20],
//   arrayTwo: [21, -2],
// });
smallestDifference({
  arrayOne: [-1, 5, 10, 20, 28, 3, 8],
  arrayTwo: [26, 134, 135, 15, 17, 8],
});
