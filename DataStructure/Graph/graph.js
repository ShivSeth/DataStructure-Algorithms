//This section is implemented using adjacency list

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((e) => e !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((e) => e !== v1);
  }
  removeVertex(v) {
    for (let i of this.adjacencyList[v]) {
      this.removeEdge(v, i);
    }
    delete this.adjacencyList[v];
  }

  dfsRecursive(start) {
    let result = [];
    let visited = {};
    let self = this;
    (function dfs(vertex) {
      if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;
      self.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) dfs(neighbor);
      });
    })(start);
    console.log(visited);
    return result;
  }
  dfsIterative(start) {
    let stack = [start];
    let result = [];
    let discovered = {};
    while (stack.length) {
      let vertex = stack.pop();
      if (!discovered[vertex]) {
        discovered[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((neighbor) => stack.push(neighbor));
      }
    }
    return result;
  }

  bfs(start) {
    let result = [];
    let visited = {};
    let queue = [start];
    while (queue.length) {
      let vertex = queue.shift();
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    console.log(visited);
    return result;
  }
}

let graph = new Graph();
// graph;
// graph.addVertex('Tokyo');
// graph.addVertex('Dallas');
// graph.addVertex('Aspen');
// graph.addEdge('Tokyo', 'Dallas');
// graph.addEdge('Tokyo', 'Aspen');
// graph.addEdge('Dallas', 'Aspen');
// graph;
// graph.removeEdge('Tokyo', 'Dallas');
// graph.removeVertex('Tokyo');
// graph;
// graph.removeVertex('Dallas');
// graph;

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

graph.dfsRecursive('A');
graph.dfsIterative('A');
graph.bfs('A');
