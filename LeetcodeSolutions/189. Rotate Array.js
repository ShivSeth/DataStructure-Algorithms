/**
 * @param {number[]} num
 * @param {number} k
 * @return {void} Do not return anything, modify num in-place instead.
 */
var rotate = function (num, k) {
  k = k % num.length;
  num.reverse();
  for (let i = 0; i < k / 2; i++) {
    [num[i], num[k - 1 - i]] = [num[k - 1 - i], num[i]];
  }
  let m = num.length - k;
  for (let i = 0; i < m / 2; i++) {
    [num[i + k], num[m - 1 - i + k]] = [num[m - 1 - i + k], num[i + k]];
  }

  //we can also create a reverse function as mentioned below
  // while(s < e){
  // [s,e] = [e,s]
  // s++,e--
  // }
};

let num = [1, 2, 3, 4, 5, 6];
rotate(num, (k = 3));
