// This is an input class. Do not edit.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function repairBst(tree: BST) {
  // Write your code here.
  let brokenOne: BST | null = null;
  let brokenTwo: BST | null = null;
  let previousNode: BST | null = null;
  function inOrderTraversal(node: BST) {
    if (node.left) inOrderTraversal(node.left);
    if (previousNode && previousNode.value > node.value) {
      if (!brokenOne) brokenOne = previousNode;
      brokenTwo = node;
    }
    previousNode = node;
    if (node.right) inOrderTraversal(node.right);
  }
  inOrderTraversal(tree);
  [brokenOne!.value, brokenTwo!.value] = [brokenTwo!.value, brokenOne!.value];
  return tree;
}
