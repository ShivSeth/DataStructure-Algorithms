/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s, n = 0) {
  // Recursion way to reverse the string or array
  if (n >= Math.floor(s.length / 2)) return;
  [s[n], s[s.length - n - 1]] = [s[s.length - n - 1], s[n]];
  return reverseString(s, ++n);
  //iterative way to reverse the string or array
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    [s[l], s[r]] = [s[r], s[l]];
    l++;
    r--;
  }
};
let s = [
  'A',
  ' ',
  'm',
  'a',
  'n',
  ',',
  ' ',
  'a',
  ' ',
  'p',
  'l',
  'a',
  'n',
  ',',
  ' ',
  'a',
  ' ',
  'c',
  'a',
  'n',
  'a',
  'l',
  ':',
  ' ',
  'P',
  'a',
  'n',
  'a',
  'm',
  'a',
];
reverseString(s);
s;
