function stringifyNumbers(object) {
  let obj = {};
  let keys = Object.keys(object);
  for (let i = 0; i < keys.length; i++) {
    if (typeof object[keys[i]] === 'number') {
      obj[keys[i]] = object[keys[i]] + '';
    } else if (
      !Array.isArray(object[keys[i]]) &&
      typeof object[keys[i]] === 'object'
    ) {
      obj[keys[i]] = stringifyNumbers(object[keys[i]]);
    } else {
      obj[keys[i]] = object[keys[i]];
    }
  }
  return obj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(obj);

stringifyNumbers(obj);

console.log(obj);
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }
