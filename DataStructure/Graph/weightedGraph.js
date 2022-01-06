//To always get the min edge value
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({ value, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = [];
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }
  dijkstra(start, end) {
    let pQueue = new PriorityQueue();
    //Distance between start and all the other nodes
    let distances = {};
    //Min length - Nodes to travel
    let previous = {};

    //build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        pQueue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        pQueue.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    let result = [];
    while (pQueue.values.length) {
      let vertexValue = pQueue.dequeue().value;
      if (end === vertexValue) {
        while (previous[vertexValue]) {
          result.push(vertexValue);
          vertexValue = previous[vertexValue];
        }
        break;
      }
      if (vertexValue || distances[vertexValue] !== Infinity) {
        //find neighboring node
        for (let i of this.adjacencyList[vertexValue]) {
          let neighborDistance = distances[vertexValue] + i.weight;
          if (distances[i.node] > neighborDistance) {
            distances[i.node] = neighborDistance;
            previous[i.node] = vertexValue;
            pQueue.enqueue(i.node, neighborDistance);
            pQueue;
          }
        }
      }
    }
    pQueue;
    previous;
    distances;
    result.push(start);
    return result.reverse();
  }
}

let wGraph = new WeightedGraph();
wGraph.addVertex('A');
wGraph.addVertex('B');
wGraph.addVertex('C');
wGraph.addVertex('D');
wGraph.addVertex('E');
wGraph.addVertex('F');
wGraph;
wGraph.addEdge('A', 'B', 4);
wGraph.addEdge('A', 'C', 2);
wGraph.addEdge('B', 'E', 3);
wGraph.addEdge('C', 'D', 2);
wGraph.addEdge('C', 'F', 4);
wGraph.addEdge('D', 'E', 3);
wGraph.addEdge('D', 'F', 1);
wGraph.addEdge('E', 'F', 1);
wGraph;
wGraph.dijkstra('A', 'E');
