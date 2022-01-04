// non - linear data structure. In a tree every node is moving away from the root node/ No relation b/w the siblings and only parent - child relationship. Only one root. A leaf has no children

//Tree
//Binary Tree
//Binary Search Tree
//Space - O(n)
//Everything O(log(n))
//As only 1 step increase for inserting a node

//BST which forms the shape of a LL -> worst scenario as we have to compare with every elements
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let node = new Node(value);
    let current = this.root;
    if (current === null) {
      this.root = node;
      return this;
    } else {
      while (true) {
        if (value > current.value) {
          if (current.right === null) {
            current.right = node;
            return this;
          }
          current = current.right;
        } else if (value < current.value) {
          if (current.left === null) {
            current.left = node;
            return this;
          }
          current = current.left;
        } else return undefined;
      }
    }
  }
  //Awesome implementation 😎
  find(val) {
    if (this.root === null) return undefined;
    let current = this.root;
    while (current) {
      if (current.value === val) return current;
      else if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      }
    }
    return undefined;
  }
  //Breadth First Search - Prints siblings first
  //Remember it is valid for all types of trees
  // Level by level Queue and Visited array
  //For more complex nodes we can nest one more loop to look for more children
  bfs() {
    if (this.root === null) return undefined;
    let node = this.root;
    let queue = [node];
    let visited = [];
    while (queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
  //DFS visit the tree towards the down rather than visiting sibling first.
  //Valid for any number of child

  //PreOrder - Root->Left->Right
  //Can be called to export a tree structure
  dfsPreOrder() {
    if (this.root === null) return null;
    let visited = [];
    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  //PostOrder - Left->Right->Root
  dfsPostOrder() {
    if (this.root === null) return null;
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }
  //InOrder - Left->Root->Right
  dfsInOrder() {
    if (this.root === null) return null;
    let visited = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }
}

let tree = new BinarySearchTree();
tree.insert(10);
tree.insert(11);
tree.insert(11);
tree.insert(14);
tree.insert(2);
tree.insert(7);
tree.insert(19);
tree.bfs();
tree.dfsPreOrder();
tree.dfsPostOrder();
//Sorted Array
tree.dfsInOrder();
