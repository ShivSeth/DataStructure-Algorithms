//MaxHeap -> Parent always larger than the child
//MinHeap -> Parent always smaller than the child
//Heap is a data structure whereas PriorityQueue is a abstract data type
//No guarantee b/w the siblings
//Filled left first
//tree is as compact as possible
//Used to implement priority queue
//Used in graph traversal
//Left Child -> 2n+1 : Right Child -> 2n+2
//Child Index - n | Parent Index - > Math.floor((n-1)/2)
//MaxBinaryHeap -> Max values bubble upto the top
//Insertion and Deletion has a O(log(n))
//If index of a node is greater than 2X then it is a leaf.
//Heapify means to store the data in a heap
//Time-consuming of order is O(log(n)) when inserting the data
//O(1) getting the top value i.e. max || min
//Deletion O(log(n)) -> property of heap :: deleting the topmost value i.e. index '0'
//when we have array of data -> create a binary tree -> then do the required swaps i.e. heapify -> heap ready [both max and min]
//Each node is swapped with its child only once
//Remember that the height of the tree is (log2(n)) thus the max comparisons we make while insertion and deletion is O(log2(n))
//Heap Sort -> heapify the data and keep removing the top: Time-consuming -> O(nlog(n)) || Space Complexity -> O(N);
//Heapify Time-consuming - O(N) && N -> Elements removal + O(Log(N)) -> Sink Down so its O(Nlog(N))
//time-consuming -> TO get Kth min/max element : O(N) [To heapify the data] + O(Klog(n))  space-complexity-> O(n)
//Approach 2: Create a min-heap of two elements and keep going through the elements to find the largest and 2nd largest time-consuming: O(NlogK)
//Space Complexity: O(K)
// Largest -> use min heap
// Smallest -> use max heap
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (parent >= element) return this.values;
      [this.values[parentIdx], this.values[idx]] = [
        this.values[idx],
        this.values[parentIdx],
      ];
      idx = parentIdx;
    }
    return this.values;
  }

  insert(val) {
    this.values.push(val);
    return this.bubbleUp();
  }

  extractMax() {
    if (this.values.length === 0) return undefined;
    [this.values[0], this.values[this.values.length - 1]] = [
      this.values[this.values.length - 1],
      this.values[0],
    ];
    let max = this.values.pop();
    this.sinkDown();
    return max;
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
        arr[root] < arr[leftChildIdx] &&
        arr[root] < arr[rightChildIdx]
      ) {
        maxChildIdx =
          arr[leftChildIdx] > arr[rightChildIdx] ? leftChildIdx : rightChildIdx;
      } else if (!!leftChildIdx && arr[root] < arr[leftChildIdx]) {
        maxChildIdx = leftChildIdx;
      } else if (!!rightChildIdx && arr[root] < arr[rightChildIdx]) {
        maxChildIdx = rightChildIdx;
      } else break;
      [arr[maxChildIdx], arr[root]] = [arr[root], arr[maxChildIdx]];
      root = maxChildIdx;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(59);
heap.insert(72);
heap.insert(21);
heap.insert(11);
heap.insert(22);
heap.insert(81);
heap;
heap.extractMax();
heap;
heap.extractMax();
heap;
heap.extractMax();
heap;
heap.extractMax();
heap.extractMax();
heap.extractMax();
heap;
