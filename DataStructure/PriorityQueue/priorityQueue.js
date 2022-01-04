//1  comparisons per row - so O(log(n)) | Heaps don't have depressing tree structure | not good for searching -> O(n)
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

//In our case lower priority will be served first
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent.priority < element.priority) return this.values;
      [this.values[parentIdx], this.values[idx]] = [
        this.values[idx],
        this.values[parentIdx],
      ];
      idx = parentIdx;
    }
    return this.values;
  }

  sinkDown() {
    let root = 0;
    let arr = this.values;
    let maxChildIdx;
    while (true) {
      let leftChildIdx = 2 * root + 1 < arr.length ? 2 * root + 1 : null;
      let rightChildIdx = 2 * root + 2 < arr.length ? 2 * root + 2 : null;
      if (
        !!leftChildIdx &&
        !!rightChildIdx &&
        arr[root].priority > arr[leftChildIdx].priority &&
        arr[root].priority > arr[rightChildIdx].priority
      ) {
        maxChildIdx =
          arr[leftChildIdx].priority < arr[rightChildIdx].priority
            ? leftChildIdx
            : rightChildIdx;
      } else if (
        !!leftChildIdx &&
        arr[root].priority > arr[leftChildIdx].priority
      ) {
        maxChildIdx = leftChildIdx;
      } else if (
        !!rightChildIdx &&
        arr[root].priority > arr[rightChildIdx].priority
      ) {
        maxChildIdx = rightChildIdx;
      } else break;
      [arr[maxChildIdx], arr[root]] = [arr[root], arr[maxChildIdx]];
      root = maxChildIdx;
    }
  }

  enqueue(val, priority) {
    let node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
  }
  dequeue() {
    if (this.values.length === 0) return undefined;
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    let maxPriority = this.values.pop();
    this.sinkDown();
    return maxPriority;
  }
}

let priorityQ = new PriorityQueue();
priorityQ.enqueue(5, 3);
priorityQ.enqueue(8, 2);
priorityQ.enqueue(10, 4);
priorityQ.enqueue(15, 1);
priorityQ;
priorityQ.dequeue();
priorityQ;
priorityQ.dequeue();
priorityQ;
