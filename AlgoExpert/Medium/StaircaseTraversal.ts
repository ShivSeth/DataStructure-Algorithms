export function staircaseTraversal(height: number, maxSteps: number) {
  // Write your code here.
  const stepsArray: Array<number> = [1];
  let ways = 0;
  for (let i = 1; i <= maxSteps; i++) {
    stepsArray[i] = ways + 1;
    ways = ways + stepsArray[i];
  }
  for (let i = stepsArray.length; i <= height; i++)
    stepsArray[i] = stepsArray.slice(i - maxSteps, i).reduce((a, v) => a + v);
  return stepsArray[height];
}

staircaseTraversal(6, 3);
