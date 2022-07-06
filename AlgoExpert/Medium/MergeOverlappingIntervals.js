function mergeOverlappingIntervals({ intervals }) {
  // Write your code here.
  intervals.sort((a, b) => a[0] - b[0]);
  intervals;
  let results = [];
  let start = intervals[0][0];
  let end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (end >= intervals[i][0]) {
      start = Math.min(start, intervals[i][0]);
      end = Math.max(end, intervals[i][1]);
    } else {
      results.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }
  results.push([start, end]);
  return results;
}

mergeOverlappingIntervals({
  intervals: [
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10],
  ],
});

// mergeOverlappingIntervals({
//   intervals: [
//     [2, 3],
//     [4, 5],
//     [6, 7],
//     [8, 9],
//     [1, 10],
//   ],
// });
