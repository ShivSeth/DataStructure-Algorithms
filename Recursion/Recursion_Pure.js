function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  console.log(arr);
  newArr = [...newArr, ...collectOddValues(arr.slice(1))];
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);
