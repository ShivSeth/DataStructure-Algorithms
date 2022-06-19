function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  // Write your code here.
  let result = 0;
  redShirtSpeeds.sort((a, b) => a - b);
  fastest
    ? blueShirtSpeeds.sort((a, b) => b - a)
    : blueShirtSpeeds.sort((a, b) => a - b);
  for (let i = 0; i < blueShirtSpeeds.length; i++) {
    result = result + Math.max(blueShirtSpeeds[i], redShirtSpeeds[i]);
  }
  return result;
}

tandemBicycle([1, 2, 3, 4, 5], [5, 4, 3, 2, 1], false);
