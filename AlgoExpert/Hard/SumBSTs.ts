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

interface TreeInfo {
  isBST: boolean;
  maxValue: number;
  minValue: number;
  bstSum: number;
  bstSize: number;
  totalSum: number;
}

export function sumBsts(tree: BinaryTree) {
  // Write your code here.
  return getTreeInfo(tree).totalSum;
}

function getTreeInfo(node: BinaryTree) {
  const leftTreeInfo: TreeInfo = node.left
    ? getTreeInfo(node.left)
    : {
        isBST: true,
        maxValue: -Infinity,
        minValue: Infinity,
        bstSum: 0,
        bstSize: 0,
        totalSum: 0,
      };
  const rightTreeInfo: TreeInfo = node.right
    ? getTreeInfo(node.right)
    : {
        isBST: true,
        maxValue: -Infinity,
        minValue: Infinity,
        bstSum: 0,
        bstSize: 0,
        totalSum: 0,
      };

  const isBSTPropertyFulfilled =
    node.value > leftTreeInfo.maxValue && node.value <= rightTreeInfo.minValue;
  const isBST =
    isBSTPropertyFulfilled && leftTreeInfo.isBST && rightTreeInfo.isBST;
  const maxValue = Math.max(
    node.value,
    Math.max(leftTreeInfo.maxValue, rightTreeInfo.maxValue)
  );
  const minValue = Math.min(
    node.value,
    Math.min(leftTreeInfo.minValue, rightTreeInfo.minValue)
  );

  let bstSum = 0;
  let bstSize = 0;

  let totalSum = leftTreeInfo.totalSum + rightTreeInfo.totalSum;

  if (isBST) {
    bstSize = 1 + leftTreeInfo.bstSize + rightTreeInfo.bstSize;
    bstSum = node.value + leftTreeInfo.bstSum + rightTreeInfo.bstSum;
    if (bstSize >= 3) totalSum = bstSum;
  }
  return {
    isBST,
    bstSize,
    maxValue,
    minValue,
    bstSum,
    totalSum,
  };
}
