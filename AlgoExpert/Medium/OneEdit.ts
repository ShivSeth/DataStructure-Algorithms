export function oneEdit(stringOne: string, stringTwo: string) {
  // Write your code here.
  let lengthOne = stringOne.length;
  let lengthTwo = stringTwo.length;
  if (Math.abs(lengthOne - lengthTwo) > 1) return false;

  let editCount = 0;
  let indexOne = 0;
  let indexTwo = 0;
  while (indexOne < lengthOne && indexTwo < lengthTwo) {
    if (stringOne[indexOne] !== stringTwo[indexTwo]) {
      editCount++;
      if (editCount > 1) return false;
      if (lengthOne > lengthTwo) indexOne++;
      else if (lengthOne < lengthTwo) indexTwo++;
      else {
        indexOne++;
        indexTwo++;
      }
    } else {
      indexOne++;
      indexTwo++;
    }
  }
  return true;
}

oneEdit('helo', 'helle');
