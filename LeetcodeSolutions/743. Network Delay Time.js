/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  let wg = new WeightedGraph();
  for (let [v1, v2, weight] of times) {
    wg.addEdge(v1, v2, weight);
  }
  let pq = new PriorityQueue();
  // let previousVertex = {};
  let distances = {};
  for (let i = 1; i <= n; i++) {
    if (i === k) {
      distances[i] = 0;
      pq.enqueue(i, 0);
    } else {
      distances[i] = Infinity;
      //No need to use this below line of code
      // pq.enqueue(i, Infinity);
    }
  }
  function dijkstra() {
    while (pq.values.length) {
      let vertexValue = pq.dequeue().value;
      if (!wg.adjacencyList[vertexValue]) continue;
      for (let [node, weight] of wg.adjacencyList[vertexValue]) {
        let neighBorDistance = distances[vertexValue] + weight;
        if (distances[node] > neighBorDistance) {
          distances[node] = neighBorDistance;
          pq.enqueue(node, neighBorDistance);
        }
      }
    }
  }
  dijkstra();
  let maxTime = Math.max(...Object.values(distances));
  return maxTime === Infinity ? -1 : maxTime;
};

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  //Directed Graph
  addEdge(v1, v2, weight) {
    if (!this.adjacencyList[v1]) this.adjacencyList[v1] = [];
    this.adjacencyList[v1].push([v2, weight]);
  }
}

class Node {
  constructor(value, priority) {
    this.value = value;
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

networkDelayTime(
  [
    [2, 1, 1],
    [2, 3, 1],
    [3, 4, 1],
  ],
  4,
  2
);
