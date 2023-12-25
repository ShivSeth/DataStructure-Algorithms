export function taskAssignment(k: number, tasks: number[]) {
  // Write your code here.

  let map = new Map<number, Array<number>>();

  tasks.forEach((i, index) => {
    map.has(i) ? map.set(i, [...map.get(i)!, index]) : map.set(i, [index]);
  });
  tasks.sort((a, b) => a - b);

  let start = 0;
  let end = tasks.length - 1;

  let result: Array<Array<number>> = [];
  while (start < end) {
    let startArray: number[] = map.get(tasks[start])!;
    let endArray: number[] = map.get(tasks[end])!;
    result.push([startArray.pop()!, endArray.pop()!]);
    map.set(tasks[start], startArray);
    map.set(tasks[end], endArray);
    start++;
    end--;
  }
  return result;
}

taskAssignment(3, [5, 2, 1, 6, 4, 4]);
