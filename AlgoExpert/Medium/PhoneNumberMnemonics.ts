export function phoneNumberMnemonics(phoneNumber: string) {
  // Write your code here.

  const mnemonics: { [key: string]: string } = {
    0: '0',
    1: '1',
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  let resultSet: Array<string> = [''];
  for (let i = 0; i < phoneNumber.length; i++) {
    let associatedValues: string = mnemonics[phoneNumber[i]];
    let temp: Array<string> = [];
    for (let k = 0; k < resultSet.length; k++) {
      let result: string = resultSet[k];
      for (let j = 0; j < associatedValues.length; j++) {
        let char: string = associatedValues[j];
        temp.push(result.concat(char));
      }
    }
    resultSet = temp;
  }
  return resultSet;
}

phoneNumberMnemonics('23');
