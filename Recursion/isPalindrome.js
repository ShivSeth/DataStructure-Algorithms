function isPalindrome(str) {
  function reverse(str) {
    if (str.length === 1) return str[0];
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
  }
  let revStr = reverse(str);
  return revStr === str;
}

isPalindrome('l');
