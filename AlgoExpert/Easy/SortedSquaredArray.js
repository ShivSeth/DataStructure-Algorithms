// function sortedSquaredArray(array) {
//   // Write your code here.

//   return array.map((i) => i * i).sort((a, b) => a - b);
// }

//Two pointer solution -> o(n) : traversal
function sortedSquaredArray(array) {
  // Write your code here.
  let result = [];
  let l = 0;
  let r = array.length - 1;
  //   for (let i = 0; i < array.length; i++) {
  //     let small = array[l];
  //     let large = array[r];
  //     if (Math.abs(small) > Math.abs(large)) {
  //       result[i] = small * small;
  //       l++;
  //     } else {
  //       result[i] = large * large;
  //       r--;
  //     }
  //   }
  while (l <= r) {
    let a = array[l];
    let b = array[r];
    if (Math.abs(a) < Math.abs(b)) {
      result.push(b * b);
      r--;
    } else {
      result.push(a * a);
      l++;
    }
  }

  return result.reverse();
}

sortedSquaredArray([-7, -3, 1, 9, 22, 30]);
