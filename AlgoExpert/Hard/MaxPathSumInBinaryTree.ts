class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function maxPathSum(tree: BinaryTree) {
  let maxSum = -Infinity;
  function traverse(node: BinaryTree) {
    let left: number = node.left ? traverse(node.left) : 0;
    let right: number = node.right ? traverse(node.right) : 0;

    maxSum = Math.max(
      maxSum,
      node.value + left,
      node.value + right,
      node.value + right + left
    );

    return node.value + Math.max(left, right);
  }
  // Write your code here.
  traverse(tree);
  return maxSum;
}
