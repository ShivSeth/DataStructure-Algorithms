export function groupAnagrams(words: string[]) {
  // Write your code here.
  let result: Array<Array<string>> = [];
  let map: { [key in string]: Array<string> } = {};
  for (let i of words) {
    let sortedWord = i.split('').sort().join('');
    if (map[sortedWord]) map[sortedWord].push(i);
    else map[sortedWord] = [i];
  }
  return Object.values(map);
}

groupAnagrams(['yo', 'act', 'flop', 'tac', 'foo', 'cat', 'oy', 'olfp']);
