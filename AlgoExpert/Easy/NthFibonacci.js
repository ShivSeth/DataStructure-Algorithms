// function getNthFib(n) {
//   // Write your code here.
//   let a = 0;
//   let b = 1;
//   let c;
//   for (i = 2; i < n; i++) {
//     c = a + b;
//     a = b;
//     b = c;
//   }
//   return n === 1 ? a : n === 2 ? b : c;
// }

function getNthFib(n, fibArr = [, 0, 1]) {
  // Write your code here.
  if (fibArr[n] !== undefined) return fibArr[n];
  fibArr[n] = getNthFib(n - 2, fibArr) + getNthFib(n - 1, fibArr);
  return fibArr[n];
}

getNthFib(6);
