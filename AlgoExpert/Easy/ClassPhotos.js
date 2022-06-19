function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.

  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  let tall =
    redShirtHeights[redShirtHeights.length - 1] >
    blueShirtHeights[blueShirtHeights.length - 1]
      ? redShirtHeights
      : blueShirtHeights;
  let small =
    redShirtHeights[redShirtHeights.length - 1] <
    blueShirtHeights[blueShirtHeights.length - 1]
      ? redShirtHeights
      : blueShirtHeights;
  for (let i = 0; i < tall.length; i++) {
    if (tall[i] < small[i]) return false;
  }

  return true;
}
classPhotos([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]);
