/**
 * @param {number[]} num
 * @return {number[]}
 */
var sortedSquares = function (num) {
  let n = [];
  let p = [];
  for (let i of num) {
    if (i < 0) n.push(i * i);
    else p.push(i * i);
  }
  n.reverse();
  let i = 0,
    j = 0;
  num = [];
  while (i < n.length && j < p.length) {
    if (n[i] < p[j]) {
      num.push(n[i]);
      i++;
    } else {
      num.push(p[j]);
      j++;
    }
  }
  return num.concat(i < n.length ? n.slice(i) : p.slice(j));
};

sortedSquares([-4, -1, 0, 3, 10]);
sortedSquares([-7, -3, 2, 3, 11]);
