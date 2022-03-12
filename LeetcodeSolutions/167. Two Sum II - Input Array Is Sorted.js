/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  function binarySearch(start, remaining) {
    //Binary Search solution
    let l = start;
    let r = numbers.length - 1;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);
      if (numbers[mid] === remaining) {
        return mid;
      } else if (numbers[mid] > remaining) r = mid - 1;
      else l = mid + 1;
    }
    return -1;
  }

  for (let i = 0; i < numbers.length; i++) {
    let remain = target - numbers[i];

    //To get the next element
    let j = binarySearch(i + 1, remain);
    if (j != -1) return [i + 1, j + 1];
  }

  // Two pointer solution
  // let l = 0;
  // let r = numbers.length - 1;
  // while (l < r) {
  //   let sum = numbers[l] + numbers[r];
  //   if (sum === target) return [l + 1, r + 1];
  //   else if (sum < target) l++;
  //   else r--;
  // }
};

twoSum((numbers = [2, 7, 11, 15]), (target = 18));
twoSum((numbers = [2, 3, 4]), (target = 6));
twoSum((numbers = [-1, 0]), (target = -1));
twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8);
