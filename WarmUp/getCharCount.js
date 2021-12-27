function getCharCount(str) {
  if (!str) return {};
  str = str.replace(/[^0-9a-zA-Z]/g, '');
  let count = 0;
  let value = '';
  let result = {};
  let re = {};
  while (str.length !== 0) {
    value = str[0];
    re = new RegExp(value, 'g');
    count = str.length - str.replace(re, '').length;
    str = str.replace(re, '');
    result[value] = count;
  }
  return result;
}
console.log(getCharCount('12!!dawGSEGSEGfa!     ')); /*?. */
