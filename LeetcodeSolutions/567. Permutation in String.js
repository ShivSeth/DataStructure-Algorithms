/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  //Below solution will end up in TLE but it creates the foundation of what lays ahead
  // s1 = s1.split('').sort().join('');
  // for (let i = 0; i <= s2.length - s1.length; i++) {
  //   s2.substring(i, s1.length + 1)
  //     .split('')
  //     .sort()
  //     .join('');
  //   if (
  //     s1 ===
  //     s2
  //       .substring(i, i + s1.length)
  //       .split('')
  //       .sort()
  //       .join('')
  //   ) {
  //     return true;
  //   }
  // }
  // return false;
  //Below solution is using the map structure
  //Why? but this solution was accepted in LeetCode 😅
  // let mapS1 = new Map();
  // for (let i = 0; i < s1.length; i++) {
  //   if (!mapS1.has(s1[i])) mapS1.set(s1[i], 0);
  //   mapS1.set(s1[i], mapS1.get(s1[i]) + 1);
  // }
  // for (let i = 0; i <= s2.length - s1.length; i++) {
  //   let mapS2 = new Map();
  //   let temp = s2.substring(i, i + s1.length);
  //   for (let i = 0; i < temp.length; i++) {
  //     if (!mapS2.has(temp[i])) mapS2.set(temp[i], 0);
  //     mapS2.set(temp[i], mapS2.get(temp[i]) + 1);
  //   }
  //   if (mapEqual(mapS1, mapS2)) return true;
  // }
  // return false;
  // Same as above HashMap solution only object is sued instead
  // let mapS1 = {};
  // for (let i = 0; i < s1.length; i++) {
  //   mapS1[s1[i]] = ++mapS1[s1[i]] || 1;
  // }
  // mapS1
  // for (let i = 0; i <= s2.length - s1.length; i++) {
  //   let mapS2 = {};
  //   let temp = s2.substring(i, i + s1.length);
  //   for (let i = 0; i < temp.length; i++) {
  //     mapS2[temp[i]] = ++mapS2[temp[i]] || 1;
  //   }
  //   mapS2;
  //   // if (mapEqual(mapS1, mapS2)) return true;
  // }
  // return false;
  //Below solution is using the array of 26 takes 1/3rd of Hashmap time
  // let arrS1 = new Array(26).fill(0);
  // for (let i of s1) ++arrS1[i.charCodeAt() - 97];
  // arrS1;
  // for (let i = 0; i <= s2.length - s1.length; i++) {
  //   let arrS2 = new Array(26).fill(0);
  //   let temp = s2.substring(i, i + s1.length);
  //   for (let i of temp) ++arrS2[i.charCodeAt() - 97];
  //   if (arrEqual(arrS1, arrS2)) {
  //     arrS1;
  //     arrS2;
  //     return true;
  //   }
  // }
  // return false;

  //Below is much faster -> Sliding Window Method
  // if (s1.length > s2.length) return false;
  // let arrS1 = new Array(26).fill(0);
  // let arrS2 = new Array(26).fill(0);
  // for (let i in s1) {
  //   ++arrS1[s1[i].charCodeAt() - 97];
  //   ++arrS2[s2[i].charCodeAt() - 97];
  // }
  // if (arrEqual(arrS1, arrS2)) return true;
  // for (let i = 0; i < s2.length - s1.length; i++) {
  //   ++arrS2[s2[i + s1.length].charCodeAt() - 97];
  //   --arrS2[s2[i].charCodeAt() - 97];
  //   if (arrEqual(arrS1, arrS2)) return true;
  // }
  // return false;

  //SLiding window optimized solution using a matchCount variable
  if (s1.length > s2.length) return false;
  let arrS1 = new Array(26).fill(0);
  let arrS2 = new Array(26).fill(0);
  for (let i in s1) {
    ++arrS1[s1[i].charCodeAt() - 97];
    ++arrS2[s2[i].charCodeAt() - 97];
  }
  let count = 0;
  //NOte - we need to decrement the count only when the status of any particular char in arrS2[char] changes from
  //matched to unmatched. Rest other case we continue the loop
  for (let i = 0; i < 26; i++) if (arrS1[i] == arrS2[i]) count++;
  for (let i = 0; i < s2.length - s1.length; i++) {
    let l = s2[i].charCodeAt() - 97;
    let r = s2[i + s1.length].charCodeAt() - 97;
    arrS2[r]++;
    if (count === 26) return true;
    if (arrS1[r] === arrS2[r]) count++;
    else if (arrS1[r] + 1 === arrS2[r]) count--;
    arrS2[l]--;
    if (arrS1[l] === arrS2[l]) count++;
    else if (arrS1[l] - 1 === arrS2[l]) count--;
  }
  return count === 26;
};

function arrEqual(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function mapEqual(map1, map2) {
  for (let [k, v] of map1) {
    if (!(map2.has(k) && map2.get(k) === v)) return false;
  }
  return true;
}

// checkInclusion('abc', 'bbbca');
checkInclusion(
  'trinitrophenylmethylnitramine',
  'dinitrophenylhydrazinetrinitrophenylmethylnitramine'
);
// checkInclusion('ab', 'a');
// checkInclusion('adc', 'dcda');
// checkInclusion((s1 = 'ab'), (s2 = 'eidbaooo'));
// checkInclusion('hello', 'ooolleoooleh');
// checkInclusion('islander', 'islander');
//function to permute the strings or array
function permute(s, l, r) {
  if (l === r) {
    // console.log(s.join(''));
    //return the s or no s to reduce the computations
    return;
  }
  for (let i = l; i <= r; i++) {
    // [s[l], s[i]] = [s[i], s[l]];
    s = swap(s, l, i);

    //use a flat to see if the searched solution is met
    //this is the beginning of the backtrack algorithm
    permute(s, l + 1, r);

    //backtrack to original string
    s = swap(s, l, i);
    // [s[l], s[i]] = [s[i], s[l]];
  }
}
let str = 'abc';
// permute(str.split(''), 0, str.length);
permute(str, 0, str.length - 1);

//swap function use as an alternative so we can pass string only
function swap(s, i0, i1) {
  if (i0 == i1) return s;
  let s1 = s.substring(0, i0);
  let s2 = s.substring(i0 + 1, i1);
  let s3 = s.substring(i1 + 1);
  return s1 + s.charAt(i1) + s2 + s.charAt(i0) + s3;
}
