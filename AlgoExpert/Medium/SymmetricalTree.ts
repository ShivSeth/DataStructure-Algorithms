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

// Recursive solution
export function symmetricalTree(tree: BinaryTree) {
  // Write your code here.
  if (!tree) return true;
  function bfsWayToSolve(
    leftTree: BinaryTree | null,
    rightTree: BinaryTree | null
  ): boolean {
    if (leftTree && rightTree && leftTree.value === rightTree.value) {
      return (
        bfsWayToSolve(leftTree.left, rightTree.right) &&
        bfsWayToSolve(leftTree.right, rightTree.left)
      );
    }
    return leftTree === rightTree;
  }

  return bfsWayToSolve(tree.left, tree.right);
}

// export function symmetricalTree(tree: BinaryTree) {
//   // Write your code here.
//   if (!tree) return true;

//   let rightTreeStack = [tree.right];
//   let leftTreeStack = [tree.left];

//   while (leftTreeStack.length) {
//     const leftNode = leftTreeStack.pop()!;
//     const rightNode = rightTreeStack.pop()!;

//     if (leftNode === null && rightNode === null) continue;

//     if (
//       leftNode === null ||
//       rightNode === null ||
//       leftNode?.value !== rightNode?.value
//     )
//       return false;

//     leftTreeStack.push(leftNode?.left);
//     leftTreeStack.push(leftNode?.right);
//     rightTreeStack.push(rightNode?.right);
//     rightTreeStack.push(rightNode?.right);
//   }
//   return true;
// }

// one stack solution
// export function symmetricalTree(tree: BinaryTree) {
//   // Write your code here.
//   if (!tree) return true;

//   let treeStack = [tree];

//   while (treeStack.length) {
//     for (let i = 0; i < treeStack.length; i++) {
//       if (treeStack[i]?.value !== treeStack[treeStack.length - i - 1]?.value)
//         return false;
//     }
//     let length = treeStack.length;
//     for (let i = 0; i < length; i++) {
//       let node = treeStack.shift();
//       if (node) treeStack.push(node.left!, node.right!);
//     }
//   }
//   return true;
// }
