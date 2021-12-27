//More the digits - bigger is the number
//This is memorable
function getDigit(num, d) {
  num = Array.from(Math.abs(num) + '').reverse();
  return num[d] ? num[d] : 0;
}

//We can use Math.log10 also 😎
function digitCount(num) {
  return Array.from(Math.abs(num) + '').length;
}

function mostDigits(arr) {
  let maxDigits = -Infinity;
  for (let i = 0; i < arr.length; i++)
    maxDigits =
      maxDigits <= digitCount(arr[i]) ? digitCount(arr[i]) : maxDigits;
  return maxDigits;
}

function radixSort(arr) {
  // let a = Array.from({ length: 10 }).fill([]);

  let mostDigit = mostDigits(arr);
  for (let i = 0; i < mostDigit; i++) {
    // let a = Array(10).fill([]);
    let a = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < arr.length; j++) {
      // a[getDigit(arr[j], i)] = [...a[getDigit(arr[j], i)], arr[j]];
      a[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...a);
    // arr = [];
    // a.forEach((_) => arr.push(..._));
  }
  return arr;
}

radixSort([1, 0, 88, 1977, 2, 3, 456, 9944, 9]);

let a = Array.from({ length: 10 }, () => [9]);
a[5].push(5);
let b = new Array(10).fill([], 0, 6);
b[5].push(7);
console.log(a);
console.log(b);
