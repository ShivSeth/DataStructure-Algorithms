function isValid(s: string): boolean {
  let hashMap: { [key in string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let stack: string[] = [];

  for (let i of s) {
    if (i === '(' || i === '{' || i === '[') stack.push(i);
    else {
      let pop = stack.pop();
      if (!pop || hashMap[pop] !== i) return false;
    }
  }

  return !stack.length;
}

isValid('()[][]{{{(())}}}(');
