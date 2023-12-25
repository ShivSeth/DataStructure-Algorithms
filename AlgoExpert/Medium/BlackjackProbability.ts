export function blackjackProbability(
  target: number,
  startingHand: number,
  memo: { [key in number]: number } = {}
) {
  //Target - 21 | StartingHand - 15
  //Card  1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10

  if (startingHand in memo) return memo[startingHand];
  else if (startingHand > target) return 1;
  else if (target - startingHand <= 4) return 0;
  let probability = 0;
  for (let i = 1; i <= 10; i++) {
    probability =
      probability + 0.1 * blackjackProbability(target, startingHand + i, memo);
  }
  memo[startingHand] = probability;
  return parseFloat(probability.toFixed(3));
}

blackjackProbability(21, 1);
