class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  peek() {
    return this.heap[this.heap.length - 1];
  }

  insert(value: number) {
    this.heap.push(value);
    this.siftUp(this.heap, this.heap.length - 1);
  }

  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    let value = this.heap.pop();
    this.heap;
    this.siftDown(this.heap, 0, this.heap.length - 1);
    return value;
  }

  buildHeap(array: number[]): number[] {
    //array.length -> so -2
    let parentIdx = Math.floor((array.length - 2) / 2);
    for (let index = parentIdx; index >= 0; index--) {
      this.siftDown(array, index, array.length - 1);
    }
    return array;
  }

  siftDown(array: number[], start: number, end: number) {
    let root = start;
    let minChildIdx: number;
    while (true) {
      let leftChildIdx = 2 * root + 1 <= end ? 2 * root + 1 : null!;
      let rightChildIdx = 2 * root + 2 <= end ? 2 * root + 2 : null!;
      if (
        !!leftChildIdx &&
        !!rightChildIdx &&
        array[root] > array[leftChildIdx] &&
        array[root] > array[rightChildIdx]
      )
        minChildIdx =
          array[leftChildIdx] < array[rightChildIdx]
            ? leftChildIdx
            : rightChildIdx;
      else if (!!leftChildIdx && array[root] > array[leftChildIdx])
        minChildIdx = leftChildIdx;
      else if (!!rightChildIdx && array[root] > array[rightChildIdx])
        minChildIdx = rightChildIdx;
      else break;
      [array[minChildIdx], array[root]] = [array[root], array[minChildIdx]];
      root = minChildIdx;
    }
  }

  siftUp(array: number[], start: number) {
    let parentIdx = Math.floor((start - 1) / 2);
    let childIdx = start;
    array[parentIdx];
    array[childIdx];
    while (array[parentIdx] > array[start]) {
      [array[parentIdx], array[start]] = [array[start], array[parentIdx]];
      childIdx = parentIdx;
      parentIdx = Math.floor((parentIdx - 1) / 2);
    }
  }
}

export function sortKSortedArray(array: number[], k: number) {
  // Write your code here.
  let minHeap = new MinHeap(array.slice(0, Math.min(k + 1, array.length)));
  minHeap;
  let index = 0;
  for (let i = k + 1; i < array.length; i++) {
    let pop = minHeap.remove()!;
    array[index] = pop;
    minHeap.insert(array[i]);
    index++;
  }
  index;

  while (!minHeap.isEmpty()) {
    let pop = minHeap.remove();
    array[index] = pop!;
    index++;
  }

  return array;
}

// sortKSortedArray([3, 2, 1, 5, 4, 7, 6, 5], 3);
sortKSortedArray([-2, -3, 1, 2, 3, 1, 1, 2, 3, 8, 100, 130, 9, 12], 4);
