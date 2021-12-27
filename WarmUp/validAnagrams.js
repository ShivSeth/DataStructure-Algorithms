function validAnagram(a, b) {
  if (a.length !== b.length) return false;

  let a1 = {};

  a.split('').forEach((e) => {
    a1[e] = ++a1[e] || 1;
  });

  for (let i = 0; i < b.length; i++) {
    if (!a1[b[i]]) return false;
    else a1[i] -= 1;
  }
  return true;
}

validAnagram('radar', 'radar');
