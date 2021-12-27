function nestedEvenSum(obj) {
  let sum = 0;
  let keys = Object.keys(obj);
  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    if (typeof obj[keys[i]] === 'object') {
      sum = sum + nestedEvenSum(obj[keys[i]]);
    } else {
      sum =
        sum +
        (obj[keys[i]] % 2 === 0 && typeof obj[keys[i]] === 'number'
          ? obj[keys[i]]
          : 0);
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: '2',
      alsoNotANumber: 'yup',
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: 'car' },
};
nestedEvenSum(obj1);
