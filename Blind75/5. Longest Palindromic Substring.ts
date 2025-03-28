function longestPalindrome(s: string): string {
  let max = 0;
  let currentLength = 0;
  let str = '';
  function checkPalindrome(start: number, end: number) {
    while (start >= 0 && end < s.length && s[start] === s[end]) {
      currentLength = end - start + 1;
      if (currentLength > max) {
        max = Math.max(currentLength, max);
        str = s.substring(start, start + max);
        str;
      }
      start--;
      end++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    checkPalindrome(i, i);
    checkPalindrome(i, i + 1);
  }
  return str;
}

longestPalindrome('babad');

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
