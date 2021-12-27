function stringSearch(str, searchStr) {
  let count = 0;
  let i;
  for (i = 0; i < str.length; i++) {
    while (count < searchStr.length && searchStr[count] === str[i + count]) {
      count++;
    }
    if (count === searchStr.length) break;
    count = 0;
  }
  return count === searchStr.length ? i : -1;
  // return count;
}

stringSearch('hello a aa a aa aa mmm a i am boy', 'i');
