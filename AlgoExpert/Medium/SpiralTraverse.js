function spiralTraverse({ array }) {
  // Write your code here.
  let left = 0;
  let right = array[0].length - 1;
  let top = 0;
  let bottom = array.length - 1;
  let direction = 'right';
  let result = [];
  while (left <= right && top <= bottom) {
    if (direction === 'right') {
      for (let i = left; i <= right; i++) result.push(array[top][i]);
      top++;
      direction = 'bottom';
    } else if (direction === 'bottom') {
      for (let i = top; i <= bottom; i++) result.push(array[i][right]);
      right--;
      direction = 'left';
    } else if (direction === 'left') {
      for (let i = right; i >= left; i--) result.push(array[bottom][i]);
      bottom--;
      direction = 'top';
    } else {
      for (let i = bottom; i >= top; i--) result.push(array[i][left]);
      left++;
      direction = 'right';
    }
  }
  return result;
}

// function spiralTraverse({ array }) {
//   // Write your code here.

//   let rS = 0;
//   let rE = array.length - 1;
//   let cS = 0;
//   let cE = array[0].length - 1;
// }

// spiralTraverse({
//   array: [
//     [1, 2, 3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10, 9, 8, 7],
//   ],
// });

// spiralTraverse({ array: [[1], [3], [2], [5], [4], [7], [6]] });
