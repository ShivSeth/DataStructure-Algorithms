function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}

isPalindrome('A man, a plan, a canal: Panama');
