// export function minRewards(scores: number[]) {
//   // Write your code here.

//   let localMinsIndex: number[] = [];
//   let result = Array(scores.length).fill(1);
//   for (let i = 0; i < scores.length; i++) {
//     getLocalMins(scores, localMinsIndex, i);
//   }

//   function getLocalMins(
//     scores: number[],
//     localMinsIndex: number[],
//     index: number
//   ) {
//     if (index === 0 && scores[index] < scores[index + 1])
//       localMinsIndex.push(index);
//     else if (index === scores.length - 1 && scores[index] < scores[index - 1])
//       localMinsIndex.push(index);
//     else if (
//       scores[index] < scores[index - 1] &&
//       scores[index] < scores[index + 1]
//     )
//       localMinsIndex.push(index);
//   }
//   for (let index of localMinsIndex) {
//     let left = index - 1;
//     let right = index + 1;
//     while (left >= 0 && scores[left + 1] < scores[left]) {
//       result[left] = Math.max(result[left], result[left + 1] + 1);
//       left--;
//     }
//     while (right < scores.length && scores[right] > scores[right - 1]) {
//       result[right] = Math.max(result[right], result[right - 1] + 1);
//       right++;
//     }
//   }
//   return result.reduce((a, v) => a + v);
// }

export function minRewards(scores: number[]) {
  // Write your code here.
  let result = new Array(scores.length).fill(1);
  result;
  for (let i = 0; i < scores.length; i++)
    if (scores[i] > scores[i - 1]) result[i] = result[i - 1] + 1;
  result;
  for (let i = scores.length - 1; i >= 0; i--)
    if (scores[i] > scores[i + 1])
      result[i] = Math.max(result[i], result[i + 1] + 1);
  return result.reduce((a, v) => a + v);
}

minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]);
