function countSubstrings(s: string): number {
  let count = 0;

  function checkPalindrome(start, end) {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      count++;
      start--;
      end++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    checkPalindrome(i, i);
    checkPalindrome(i, i + 1);
  }

  return count;
}

countSubstrings('abc');
