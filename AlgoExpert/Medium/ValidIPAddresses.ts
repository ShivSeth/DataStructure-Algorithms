export function validIPAddresses(string: string) {
  // Write your code here.

  const result: Array<string> = [];

  function isValid(string: string) {
    let integer = parseInt(string);
    return integer < 256 && string.length === integer.toString().length;
  }

  for (let i = 0; i < string.length - 3; i++)
    for (let j = i + 1; j < string.length - 2; j++)
      for (let k = j + 1; k < string.length - 1; k++) {
        let str1 = string.substring(0, i + 1);
        let str2 = string.substring(i + 1, j + 1);
        let str3 = string.substring(j + 1, k + 1);
        let str4 = string.substring(k + 1);

        if (isValid(str1) && isValid(str2) && isValid(str3) && isValid(str4)) {
          result.push(`${str1}.${str2}.${str3}.${str4}`);
        }
      }
  return result;
}

validIPAddresses('3700100');
