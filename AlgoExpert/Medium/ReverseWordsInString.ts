export function reverseWordsInString(string: string) {
  // Write your code here.
  let strArray: string[] = Array.of(string);
  let temp: Array<string> = [];
  let resultArray: string[] = [];
  for (let i = strArray.length - 1; i >= 0; i--) {
    if (strArray[i] !== ' ') {
      temp.push(strArray[i]);
      continue;
    }
    resultArray = [...resultArray, ...temp.reverse(), strArray[i]];
    temp = [];
  }
  return [...resultArray, ...temp.reverse()].join('');
}

reverseWordsInString('s  i  4 ');
