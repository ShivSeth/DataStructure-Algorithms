// function missingNumber(nums: number[]): number {
//   let sum = nums.reduce((a, v) => a + v);
//   let sumToBe = (nums.length * (nums.length + 1)) / 2;

//   return sumToBe - sum;
// }

function missingNumber(nums: number[]): number {
  // Bit Manipulation

  let value = 0;
  let i: number;
  for (i = 0; i < nums.length; i++) value = value ^ nums[i] ^ i;

  return value ^ i;
}
