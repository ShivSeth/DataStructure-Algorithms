export enum Direction {
  East = 'EAST',
  West = 'WEST',
}

export function sunsetViews(buildings: number[], direction: Direction) {
  // Write your code here.
  let result: number[] = [];
  let maxHeight = 0;
  if (direction === Direction.East)
    for (let i = buildings.length - 1; i >= 0; i--) {
      if (buildings[i] > maxHeight) {
        result.push(i);
        maxHeight = Math.max(buildings[i], maxHeight);
      }
    }
  else
    for (let i = 0; i <= buildings.length; i++) {
      if (buildings[i] > maxHeight) {
        result.push(i);
        maxHeight = maxHeight < buildings[i] ? buildings[i] : maxHeight;
      }
    }

  return direction === Direction.East ? result.reverse() : result;
}

sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], Direction.East);
