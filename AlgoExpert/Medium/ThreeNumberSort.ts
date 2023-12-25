// export function threeNumberSort(array: number[], order: number[]) {
//   // Write your code here.
//   let orderSet: { [key in string | number]: number } = {};
//   for (let o of order) orderSet[o] = 0;
//   for (let num of array) orderSet[num]++;
//   let lastIdx = 0;
//   for (let o of order) {
//     let count = orderSet[o];
//     for (let i = lastIdx; i < lastIdx + count; i++) array[i] = o;
//     lastIdx = lastIdx + count;
//   }
//   return array;
// }

// threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]);

export function threeNumberSort(array: number[], order: number[]) {
  // Write your code here.

  let firstValue = order[0];
  let secondValue = order[1];

  let firstIdx = 0;
  let secondIdx = 0;
  let thirdIdx = array.length - 1;

  while (secondIdx <= thirdIdx) {
    let value = array[secondIdx];
    if (firstValue === value) {
      [array[firstIdx], array[secondIdx]] = [array[secondIdx], array[firstIdx]];
      firstIdx++;
      secondIdx++;
    } else if (secondValue === value) {
      secondIdx++;
    } else {
      [array[secondIdx], array[thirdIdx]] = [array[thirdIdx], array[secondIdx]];
      thirdIdx--;
    }
  }
  return array;
}

threeNumberSort([1, 0, 0, -1, -1, 0, 1, 1], [0, 1, -1]);
