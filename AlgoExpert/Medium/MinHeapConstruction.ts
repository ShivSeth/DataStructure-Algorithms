// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
export class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
    // Write your code here.
    for (let i = array.length - 1; i >= 0; i--) this.siftDown(array, i);
    return array;
  }

  siftDown(array: number[], currentIdx: number) {
    // Write your code here.
    let root = currentIdx;
    let arr = array;
    let maxChildIdx: number | null;
    while (true) {
      let leftChildIdx = 2 * root + 1 < arr.length ? 2 * root + 1 : null;
      let rightChildIdx = 2 * root + 2 < arr.length ? 2 * root + 2 : null;
      if (
        !!leftChildIdx &&
        !!rightChildIdx &&
        arr[root] > arr[leftChildIdx] &&
        arr[root] > arr[rightChildIdx]
      ) {
        maxChildIdx =
          arr[leftChildIdx] < arr[rightChildIdx] ? leftChildIdx : rightChildIdx;
      } else if (!!leftChildIdx && arr[root] > arr[leftChildIdx]) {
        maxChildIdx = leftChildIdx;
      } else if (!!rightChildIdx && arr[root] > arr[rightChildIdx]) {
        maxChildIdx = rightChildIdx;
      } else break;
      [arr[maxChildIdx], arr[root]] = [arr[root], arr[maxChildIdx]];
      root = maxChildIdx;
    }
  }

  siftUp(array: number[]) {
    // Write your code here.
    let elementIdx = array.length - 1;
    let parentIdx = Math.floor((elementIdx - 1) / 2);
    while (array[parentIdx] > array[elementIdx]) {
      [array[parentIdx], array[elementIdx]] = [
        array[elementIdx],
        array[parentIdx],
      ];
      elementIdx = parentIdx;
      parentIdx = Math.floor((elementIdx - 1) / 2);
    }
  }

  peek() {
    // Write your code here.
    return this.heap[0];
  }

  remove() {
    // Write your code here.
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    let value = this.heap.pop();
    this.siftDown(this.heap, 0);
    return value;
  }

  insert(value: number) {
    // Write your code here.
    this.heap.push(value);
    this.siftUp(this.heap);
  }
}

let minHeap = new MinHeap([48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41]);
