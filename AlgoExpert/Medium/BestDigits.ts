export function bestDigits(number: string, numDigits: number) {
  // Write your code here.

  let result: string[] = [];
  for (let digit of number) {
    while (result.length && numDigits && result[result.length - 1] < digit) {
      result.pop();
      numDigits--;
    }
    result.push(digit);
  }
  while (numDigits) {
    result.pop();
    numDigits--;
  }
  return result.join('');
}

bestDigits('1020304050', 5);
