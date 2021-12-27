function countUniqueValues(a) {
  //   Novice solution
  //   let count = 0;
  //   for (let i = 0; i < a.length - 1; i++) {
  //     console.log(a[i + 1]);
  //     if (a[i] !== a[i + 1]) count++;
  //   }
  //   return count + 1;

  arr = a;
  // for(let i=0;i<a.length;i++){

  // }

  let i = 0;
  let j = i + 1;
  while (j < a.length) {
    if (a[i] !== a[j]) {
      i++;
      a[i] = a[j];
    }
    j++;
  }
  return i + 1;
}

let result = countUniqueValues([1, 1, 1, 1, 2, 2, 2, 3, 3]);
console.log(result);
