interface ICharacterCount {
  [character: string]: number;
}

export function minimumCharactersForWords(words: string[]) {
  // Write your code here.

  let result: ICharacterCount = {};
  let temp: ICharacterCount = {};

  for (let word of words) {
    for (let c of word) temp[c] = ++temp[c] || 1;
    for (let c in temp) result[c] = result[c] > temp[c] ? result[c] : temp[c];
    temp = {};
  }
  let charCount: string[] = [];
  for (let [i, v] of Object.entries(result))
    charCount = [...charCount, ...new Array(v).fill(i)];
  return charCount;
}

minimumCharactersForWords(['this', 'that', 'did', 'deed', 'them!', 'a']);
