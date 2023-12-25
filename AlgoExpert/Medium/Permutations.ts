//slow approach
// export function getPermutations(
//   array: number[],
//   newPermutation: number[] = [],
//   resultArray: Array<Array<number>> = []
// ) {
//   // Write your code here.
//   if (!array.length && newPermutation.length) {
//     resultArray.push(newPermutation);
//   } else
//     for (let i = 0; i < array.length; i++) {
//       let result = [...newPermutation, array[i]];
//       let newArray = [...array];
//       newArray.splice(i, 1);
//       getPermutations(newArray, result, resultArray);
//     }

//   return resultArray;
// }

// getPermutations([]);

export function getPermutations(array: number[]) {
  let l = 0;
  let r = array.length;

  let result: Array<Array<number>> = [];
  if (!array.length) return result;
  helper(array, l, r);
  return result;

  function helper(array: number[], l: number, r: number) {
    if (l === r) return result.push([...array]);
    for (let i = l; i < r; i++) {
      swap(array, i, l);
      helper(array, l + 1, r);
      swap(array, l, i);
    }
  }

  function swap(array: number[], i: number, j: number) {
    [array[i], array[j]] = [array[j], array[i]];
  }
}

getPermutations([]);
