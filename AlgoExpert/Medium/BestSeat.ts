export function bestSeat(seats: number[]) {
  // Write your code here.

  let maxLength = 0;
  let currentLength = 0;
  let index = -1;
  let seatIndex = -1;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 0) {
      index = i;
      currentLength = 1;
      while (seats[i + 1] === 0) {
        i++;
        currentLength++;
      }
      if (maxLength < currentLength) {
        seatIndex = index - 1 + Math.ceil(currentLength / 2);
        maxLength = currentLength;
      }
    }
  }

  return seatIndex;
}

bestSeat([1, 0, 0, 1]);
