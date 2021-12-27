function flatten(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) flatArr = [...flatArr, ...flatten(arr[i])];
    else flatArr.push(arr[i]);
  }
  return flatArr;
}

// function flatten(arr) {
//   return arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v) : v), []);
// }

flatten([1, [2, [3, 4], [[5]]]]);
