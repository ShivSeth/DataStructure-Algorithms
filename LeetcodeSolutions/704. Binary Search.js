/**
 * @param {number[]} num
 * @param {number} target
 * @return {number}
 */
var search = function (num, target) {
  let l = 0;
  let r = num.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    console.log(l, r, mid);
    if (num[mid] === target) {
      return mid;
    } else if (num[mid] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return -1;
};

// search((nums = [-7, -3, -1, 0, 3, 5, 9, 12, 14]), (target = 3));
// search((nums = [-1, 0, 3, 5, 9, 12]), (target = 2));
search([5], 5);
