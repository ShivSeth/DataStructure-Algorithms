export function sameBsts(arrayOne: number[], arrayTwo: number[]) {
  // Write your code here.

  function isSameBST(arrayOne: number[], arrayTwo: number[]): boolean {
    if (arrayOne.length !== arrayTwo.length || arrayOne[0] !== arrayTwo[0])
      return false;
    if (arrayOne.length === 0 && arrayTwo.length === 0) return true;
    let minArrayOne = arrayOne.slice(1).filter((i) => i < arrayOne[0]);
    let minArrayTwo = arrayTwo.slice(1).filter((i) => i < arrayTwo[0]);
    let maxArrayOne = arrayOne.slice(1).filter((i) => i >= arrayOne[0]);
    let maxArrayTwo = arrayTwo.slice(1).filter((i) => i >= arrayTwo[0]);
    return (
      isSameBST(minArrayOne, minArrayTwo) && isSameBST(maxArrayOne, maxArrayTwo)
    );
  }
  return isSameBST(arrayOne, arrayTwo);
}

sameBsts([10, 15, 8, 12, 94, 81, 5, 2, 11], [10, 8, 5, 15, 2, 12, 11, 94, 81]);
