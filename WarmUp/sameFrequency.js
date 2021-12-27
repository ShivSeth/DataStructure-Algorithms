//works only for positive intergers
function sameFrequency(n, m) {
  let a = n.toString().split('');
  let b = m.toString().split('');
  let a1 = {};
  a.forEach(function (e) {
    a1[e] = ++a1[e] || 1;
  });
  let b1 = {};
  b.forEach(function (e) {
    b1[e] = ++b1[e] || 1;
  });
  a1;
  for (let i in a1) {
    if (b1[i] !== a1[i]) return false;
  }
  return true;
}

sameFrequency(12233, 33221);
