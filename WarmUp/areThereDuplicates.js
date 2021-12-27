function areThereDuplicates(...args) {
  let a = {};
  for (let i = 0; i < args.length; i++) {
    if (!a[args[i]]) a[args[i]] = 1;
    else return true;
  }
  return false;
}

areThereDuplicates(3, 4, 5, 6, 8, 8, 8, 9, 9);
