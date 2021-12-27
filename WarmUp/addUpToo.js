function addUpToo(val) {
  let count = 0;
  for (let i = 1; i <= val; i++) {
    count = count + i;
  }
  return count;
}

let count = addUpToo(5); /*?. */
