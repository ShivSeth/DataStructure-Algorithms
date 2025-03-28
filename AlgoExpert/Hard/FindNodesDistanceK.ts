// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function findNodesDistanceK(
  tree: BinaryTree,
  target: number,
  k: number
) {
  // Write your code here.

  let visited: Set<BinaryTree | null> = new Set();
  const parentNodes: Record<number, BinaryTree | null> = {};
  let targetNode: BinaryTree = tree;

  //BFS Traversal -  Get Parents
  function findParent(tree: BinaryTree, parent: BinaryTree | null = null) {
    parentNodes[tree.value] = parent;
    if (tree.value === target) targetNode = tree;
    if (tree.left) findParent(tree.left, tree);
    if (tree.right) findParent(tree.right, tree);
  }

  findParent(tree);

  //starting at level - 0
  let queue: Array<BinaryTree | null> = [targetNode];

  while (queue.length && k) {
    //decrease the levels at go
    k--;
    let length = queue.length;
    for (let i = 0; i < length; i++) {
      let node = queue.shift()!;
      visited.add(node);
      if (!visited.has(parentNodes[node.value]) && parentNodes[node.value])
        queue.push(parentNodes[node.value]);
      if (node.right && !visited.has(node.right)) queue.push(node.right);
      if (node.left && !visited.has(node.left)) queue.push(node.left);
    }
  }

  return queue.map((i) => i?.value);
}
