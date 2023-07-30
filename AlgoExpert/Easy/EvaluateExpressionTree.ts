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

export function evaluateExpressionTree(tree: BinaryTree): number {
  // Write your code here.

  if (tree.left && tree.right)
    switch (tree?.value) {
      case -1:
        return (
          evaluateExpressionTree(tree.left) + evaluateExpressionTree(tree.right)
        );
      case -2:
        return (
          evaluateExpressionTree(tree.left) - evaluateExpressionTree(tree.right)
        );
      case -3:
        return parseInt(
          `${
            evaluateExpressionTree(tree.left) /
            evaluateExpressionTree(tree.right)
          }`
        );
      case -4:
        return (
          evaluateExpressionTree(tree.left) * evaluateExpressionTree(tree.right)
        );
      default:
        return tree?.value;
    }
  return tree.value;
}
