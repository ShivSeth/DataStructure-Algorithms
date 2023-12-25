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

export function splitBinaryTree(tree: BinaryTree) {
  // Write your code here.

  let totalSum = 0;

  function traverse(tree: BinaryTree | null): number {
    if (!tree) return 0;
    return traverse(tree.left) + tree.value + traverse(tree.right);
  }
  totalSum = traverse(tree);
  if (totalSum % 2 !== 0) return 0;

  let halfSum = totalSum / 2;
  let flag = false;

  function traverseHalfSum(tree: BinaryTree | null): number {
    if (!tree) return 0;
    let total =
      traverseHalfSum(tree.left) + traverseHalfSum(tree.right) + tree.value;
    if (total === halfSum) {
      flag = true;
    }
    return total;
  }

  traverseHalfSum(tree);
  return flag ? halfSum : 0;
}
