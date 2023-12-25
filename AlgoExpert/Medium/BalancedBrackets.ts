export function balancedBrackets(string: string) {
  // Write your code here.

  let bracketSet: { [key in string]: string } = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  let stack: string[] = [];

  for (let i of string) {
    if (i === '(' || i === '{' || i === '[') stack.push(i);
    else if (i === ')' || i === '}' || i === ']') {
      let bracket = stack.pop()!;
      i;
      if (bracketSet[bracket] !== i) return false;
    }
  }

  return !Boolean(stack.length);
}

// balancedBrackets('([])(){}(())()()');
// balancedBrackets('(agwgg)([ghhheah%&@Q])');
balancedBrackets('{}gawgw()');
