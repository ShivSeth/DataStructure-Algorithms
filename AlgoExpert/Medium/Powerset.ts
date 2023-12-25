export function powerset(array: number[]) {
  // Write your code here.
  let resultSet: Array<Array<number | never>> = [[]];
  for (let i = 0; i < array.length; i++) {
    let resultSetLength = resultSet.length;
    for (let j = 0; j < resultSetLength; j++)
      resultSet.push([...resultSet[j], array[i]]);
  }
  return resultSet;
}

powerset([1, 2, 3]);
