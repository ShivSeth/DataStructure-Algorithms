function insert(intervals: number[][], newInterval: number[]): number[][] {
  let [newStart, newEnd] = newInterval;
  let result: number[][] = [];
  let inserted = false;

  for (let [cStart, cEnd] of intervals) {
    if (newEnd < cStart) {
      if (!inserted) {
        inserted = true;
        result.push([newStart, newEnd]);
      }
      result.push([cStart, cEnd]);
    } else if (cEnd < newStart) {
      result.push([cStart, cEnd]);
    } else {
      newStart = Math.min(newStart, cStart);
      newEnd = Math.max(newEnd, cEnd);
    }
  }
  if (!inserted) result.push([newStart, newEnd]);
  return result;
}
insert(
  [
    [1, 2],
    [3, 5],
    [6, 7],
    [8, 10],
    [12, 16],
  ],
  [4, 9]
);
