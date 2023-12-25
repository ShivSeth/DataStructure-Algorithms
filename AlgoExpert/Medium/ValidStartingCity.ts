// export function validStartingCity(
//   distances: number[],
//   fuel: number[],
//   mpg: number
// ) {
//   // Write your code here.
//   let distanceCanBeCovered = fuel.map((i) => i * mpg);
//   distanceCanBeCovered;
//   let loopCount = distances.length;
//   for (let i = 0; i < loopCount; i++) {
//     let internalCount = loopCount;
//     let j = i;
//     let distanceToCover = 0;
//     let fuelDistance = 0;
//     while (internalCount) {
//       distanceToCover = distanceToCover + distances[j];
//       fuelDistance = fuelDistance + distanceCanBeCovered[j];
//       if (distanceToCover > fuelDistance) break;
//       internalCount--;
//       j++;
//     }
//     if (!internalCount) return i;
//   }
// }

export function validStartingCity(
  distances: number[],
  fuel: number[],
  mpg: number
) {
  // Write your code here.
  let loopCount = distances.length;
  let milesLeft = 0;
  let minMilesLeft = 0;
  let minIndex = 0;
  for (let i = 1; i < loopCount; i++) {
    milesLeft = fuel[i - 1] * mpg - distances[i - 1] + milesLeft;
    minMilesLeft > milesLeft && (minMilesLeft = milesLeft) && (minIndex = i);
  }
  return minIndex;
}

// validStartingCity([5, 25, 15, 10, 15], [1, 2, 1, 0, 3], 10);
// validStartingCity([4, 6], [1, 9], 1);

// validStartingCity([1, 3, 10, 6, 7, 7, 2, 4], [1, 1, 1, 1, 1, 1, 1, 1], 5);
validStartingCity(
  [30, 40, 10, 10, 17, 13, 50, 30, 10, 40],
  [1, 2, 0, 1, 1, 0, 3, 1, 0, 1],
  25
);
