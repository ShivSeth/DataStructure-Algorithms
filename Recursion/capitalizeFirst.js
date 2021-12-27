function capitalizeFirst(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  let str = arr[0].split('');
  let k = str[0].toUpperCase();
  str.splice(0, 1, k);
  arr[0] = str.join('');
  newArr.push(arr[0]);
  return [...newArr, ...capitalizeFirst(arr.splice(1))];
}

// function capitalizeFirst (array) {
//     if (array.length === 1) {
//       return [array[0].toUpperCase()];
//     }
//     let res = capitalizeFirst(array.slice(0, -1));
//     res.push(array.slice(array.length-1)[0].toUpperCase());
//     return res;

//   }

capitalizeFirst(['car', 'taco', 'banana']);
