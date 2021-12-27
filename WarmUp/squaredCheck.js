function squareCheck(a, b) {
  if (a.length !== b.length) return false;
  let a1 = {};
  let b1 = {};
  a.forEach((e) => {
    console.log(a1[e]);
    a1[e] = ++a1[e] || 1;
  });
  b.forEach((e) => {
    b1[e] = ++b1[e] || 1;
  });
  console.log(a1);
  console.log(b1);

  for (let i in a1) {
    if (!(i ** 2 in b1)) return false; //
    if (b1[i ** 2] !== a1[i]) return false; // number count checked
  }
  return true;
}

console.log(squareCheck([1, 2, 3, 2], [4, 9, 1, 4]));
