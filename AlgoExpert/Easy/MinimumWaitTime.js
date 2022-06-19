function minimumWaitingTime(queries) {
  // Write your code here.

  queries.sort((a, b) => a - b);
  queries;
  let result = 0;
  for (let i = 0; i < queries.length - 1; i++) {
    result = result + queries[i] * (queries.length - i - 1);
  }
  return result;
}

minimumWaitingTime([3, 2, 1, 2, 6]);
