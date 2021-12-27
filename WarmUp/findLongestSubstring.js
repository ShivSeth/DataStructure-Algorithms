// function findLongestSubstring(str) {
//   if (str.length === 0) return 0;
//   let s = '';
//   let maxLength = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (s.includes(str[i])) {
//       maxLength = s.length > maxLength ? s.length : maxLength;
//       s = s.slice(s.indexOf(str[i]) + 1);
//     }
//     s += str[i];
//   }
//   return Math.max(s.length, maxLength);
// }

// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     console.log(longest, i - start + 1);
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   console.log(seen);
//   return longest;
// }

function findLongestSubstring(str) {
  let s = {};
  let l = 0;
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (s[c]) {
      l = i + 1;
    }
    s[c] = i;
  }
  console.log(s);
}

findLongestSubstring('maxima');
