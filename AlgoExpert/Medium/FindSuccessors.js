// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

function findSuccessor(tree, node) {
  // Write your code here.

  if (node.right) return findLeftMostNode(node.right);
  return findRightMostParent(node);

  function findLeftMostNode(node) {
    let cNode = node;
    while (cNode.left) cNode = cNode.left;
    return cNode;
  }

  function findRightMostParent(node) {
    let cNode = node;
    //replaced while with if because that condition will only run once
    if (cNode.parent && cNode.parent.right === cNode) cNode = cNode.parent;
    // while (cNode.parent && cNode.parent.right === cNode) cNode = cNode.parent;
    return cNode.parent;
  }
}

// function findSuccessor(tree, node) {
//   let arr = [];

//   function bfsInOrder(tree) {
//     tree.left && bfsInOrder(tree.left);
//     tree && arr.push(tree);
//     tree.right && bfsInOrder(tree.right);
//   }

//   bfsInOrder(tree);
//   let index = arr.findIndex((i) => i.value === node.value);
//   console.log(index);
//   return index === arr.length - 1 ? null : arr[index + 1];
// }
// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.findSuccessor = findSuccessor;
