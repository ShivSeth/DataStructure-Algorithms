export function longestPalindromicSubstring(string: string) {
  // Write your code here.
  let startIndex = 0;
  let maxLength = 1;
  function searchFromMiddle(left: number, right: number, string: string) {
    while (
      left >= 0 &&
      right < string.length &&
      string[left] === string[right]
    ) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        startIndex = left;
      }
      left--;
      right++;
    }
  }

  for (let i = 0; i < string.length; i++) {
    searchFromMiddle(i - 1, i + 1, string);
    searchFromMiddle(i, i + 1, string);
  }

  return string.slice(startIndex, startIndex + maxLength);
}

longestPalindromicSubstring('abaxyzzyxf');
