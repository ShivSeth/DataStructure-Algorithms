function firstNonRepeatingCharacter(string) {
  // Write your code here.
  let hashMap = {};
  for (let i of string) {
    hashMap[i] = ++hashMap[i] || 1;
  }
  for (let i = 0; i < string.length; i++) {
    if (hashMap[string[i]] === 1) return i;
  }
  return -1;
}

firstNonRepeatingCharacter('abcdcaf');
