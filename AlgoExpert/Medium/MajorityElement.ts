// export function majorityElement(array: number[]) {
//   // Write your code here.
//   let counterObj: { [key: string]: number } = {};
//   array.forEach((i) => (counterObj[i] = ++counterObj[i] || 1));
//   counterObj;
//   for (let [k, v] of Object.entries(counterObj)) {
//     if (v >= Math.ceil(array.length / 2)) return k;
//   }
// }
export function majorityElement(array: number[]) {
  // Write your code here.
  let count = 0;
  let answer = 0;
  for (let i of array) {
    count === 0 && (answer = i);
    i === answer && count++;
    i !== answer && count--;
  }

  return answer;
}

majorityElement([1, 2, 3, 2, 3, 2, 2, 4, 2]);
