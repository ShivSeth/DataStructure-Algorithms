function generateDocument(characters, document) {
  // Write your code here.

  let a = {};

  for (let i of document) {
    a[i] = ++a[i] || 1;
  }
  a;
  for (let i of characters) {
    if (a[i]) a[i] = --a[i];
  }
  a;
  return Math.max(...Object.values(a)) <= 0;
}

generateDocument('aheaolabbhb', 'hello');
