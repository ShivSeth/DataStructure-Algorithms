export function heapSort(array: number[]) {
  // Write your code here.

  buildMaxHeap(array);
  array;
  for (let endIdx = array.length - 1; endIdx >= 0; endIdx--) {
    [array[0], array[endIdx]] = [array[endIdx], array[0]];
    siftDown(array, 0, endIdx - 1);
  }

  return array;
}

function buildMaxHeap(array: number[]) {
  let parentIdx = Math.floor((array.length - 2) / 2);
  for (let i = parentIdx; i >= 0; i--) {
    siftDown(array, i, array.length - 1);
  }
}

function siftDown(array: number[], start: number, end: number) {
  let root = start;
  let maxChildIndex: number;
  while (true) {
    let leftChildIdx = 2 * root + 1 <= end ? 2 * root + 1 : null;
    let rightChildIdx = 2 * root + 2 <= end ? 2 * root + 2 : null;
    if (
      !!leftChildIdx &&
      !!rightChildIdx &&
      array[root] < array[leftChildIdx] &&
      array[root] < array[rightChildIdx]
    )
      maxChildIndex =
        array[leftChildIdx] > array[rightChildIdx]
          ? leftChildIdx
          : rightChildIdx;
    else if (!!leftChildIdx && array[root] < array[leftChildIdx])
      maxChildIndex = leftChildIdx;
    else if (!!rightChildIdx && array[root] < array[rightChildIdx])
      maxChildIndex = rightChildIdx;
    else break;
    [array[root], array[maxChildIndex]] = [array[maxChildIndex], array[root]];
    root = maxChildIndex;
  }
}

heapSort([8, 5, 2, 9, 5, 6, 3]);
