function capitalizeWords(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  arr[0] = arr[0].toUpperCase();
  newArr.push(arr[0]);
  newArr = [...newArr, ...capitalizeWords(arr.slice(1))];
  return newArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizeWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
