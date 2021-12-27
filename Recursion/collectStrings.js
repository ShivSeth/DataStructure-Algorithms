function collectStrings(obj) {
  let arr = [];
  for (let i in obj) {
    if (typeof obj[i] === 'string') {
      arr.push(obj[i]);
    } else {
      arr = [...arr, ...collectStrings(obj[i])];
    }
  }
  return arr;
}
const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz',
          },
        },
      },
    },
  },
};

collectStrings(obj); // ["foo", "bar", "baz"])
