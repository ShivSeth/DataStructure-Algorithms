function maxSubsetSumNoAdjacent(array) {
  // Write your code here.

  if (!array.length) return 0;
  if (array.length === 1) return array[0];

  array = [array[0], Math.max(array[0], array[1]), ...array.splice(2)];

  for (let i = 0; i < array.length - 2; i++) {
    if (array[i] + array[i + 2] > array[i + 1])
      array[i + 2] = array[i] + array[i + 2];
    else array[i + 2] = array[i + 1];
  }
  console.log(array);
  return array[array.length - 1];
}

maxSubsetSumNoAdjacent([4, 3, 5, 200, 5, 3]);
