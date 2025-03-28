class _Node {
  val: number;
  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

// DFS Approach

// function cloneGraph(node: _Node | null): _Node | null {
//   if (!node) return node;
//   let hashMap: { [key in number]: _Node } = {};

//   function dfs(node: _Node) {
//     if (node.val in hashMap) return hashMap[node.val];
//     let newNode = new _Node(node.val);
//     hashMap[node.val] = newNode;
//     newNode.neighbors = node.neighbors.map(dfs);
//     return hashMap[node.val];
//   }

//   return dfs(node);
// }


//BFS Approach
