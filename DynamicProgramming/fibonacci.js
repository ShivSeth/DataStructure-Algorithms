//This is top-down approach - memoization
function fibonacci(n, mem = [0, 1, 1]) {
  if (mem[n] !== undefined) return mem[n];
  //we got rid of base case
  // if (n <= 2) return 1;
  //Each prev fib of number is calculated only once
  //mem is a look up table
  mem[n] = fibonacci(n - 1, mem) + fibonacci(n - 2, mem);
  return mem[n];
}

//Bottom up approach - tabulation
function fibonacci(n) {
  let tabulation = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    tabulation[i] = tabulation[i - 1] + tabulation[i - 2];
  }
  return tabulation[n];
}

fibonacci(100);
