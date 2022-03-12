/**
 * @param {number[]} num
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (num, target) {
  let l = 0;
  let r = num.length;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (num[mid] < target) l = mid + 1;
    else if (num[mid] > target) r = mid - 1;
    else return mid;
  }
  return l;
};
searchInsert((nums = [1, 3, 5, 6]), (target = 5));
searchInsert((nums = [1, 3, 5, 6]), (target = 2));
searchInsert((nums = [1, 3, 5, 6]), (target = 7));
