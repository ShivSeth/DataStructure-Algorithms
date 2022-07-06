function moveElementToEnd(array, toMove) {
  //   Write your code here.
  //   let l = 0;
  //   let r = array.length - 1;
  //   let count = 0;
  //   while (l < r) {
  //     while (l < r && array[r] === toMove) r--;
  //     if (array[l] === toMove) [array[l], array[r]] = [array[r], array[l]];
  //     l++;
  //     count++;
  //   }
  //   count;
  //   return array;

  let toMoveIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== toMove) {
      array[toMoveIndex++] = array[i];
    }
  }
  while (toMoveIndex < array.length) array[toMoveIndex++] = toMove;
  array;

  //   let l = 0;
  //   let r = array.length - 1;
  //   let count = 0;
  //   while (l < r) {
  //     if (array[l] !== toMove) l++;
  //     if (array[r] === toMove) r--;
  //     if (array[l] === toMove && array[r] !== toMove) {
  //       [array[l], array[r]] = [array[r], array[l]];
  //       l++;
  //       r--;
  //     }
  //     count++;
  //   }
  //   count;
  //   return array;
}

moveElementToEnd([0, 1, 0, 3, 12], 0);
// moveElementToEnd([2, 1, 7, 2, 2, 9, 2, 3, 4, 2], 2);
// moveElementToEnd([2, 2, 2, 1], 2);
// moveElementToEnd([2, 4, 2, 5, 6, 2, 2], 2);
