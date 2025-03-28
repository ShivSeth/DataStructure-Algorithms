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

export function validateThreeNodes(nodeOne: BST, nodeTwo: BST, nodeThree: BST) {
  //   if (isDescendant(nodeOne, nodeTwo)) return isDescendant(nodeTwo, nodeThree);
  //   if (isDescendant(nodeThree, nodeTwo)) return isDescendant(nodeTwo, nodeOne);
  //   return false;
  //    recursive | space complexity - O(h)
  //   function isDescendant(target: BST, parentNode: BST | null): boolean {
  //     if (parentNode === null) return false;
  //     if (target.value === parentNode.value) return true;
  //     return parentNode.value > target.value
  //       ? isDescendant(target, parentNode.left)
  //       : isDescendant(target, parentNode.right);
  //   }
  //   iterative | space complexity - O(1)
  //   function isDescendant(target: BST, node: BST | null): boolean {
  //     let currentNode: BST | null = node;
  //     while (currentNode !== null && currentNode !== target)
  //       currentNode =
  //         currentNode.value < target.value ? currentNode.right : currentNode.left;
  //     return currentNode === target;
  //   }

  //boolean flag to check found two in between the nodeOne and nodeThree or nodeThree and nodeOne
  let foundTwo = false;

  //initialization to nodeOne
  let node: BST | null = nodeOne;

  //check for nodeOne -> nodeTwo -> nodeThree
  while (node) {
    if (node.value === nodeTwo.value) foundTwo = true;
    if (node.value > nodeThree.value) node = node.left;
    else if (node.value < nodeThree.value) node = node.right;
    else return foundTwo;
  }

  //re-assign to nodeThree
  node = nodeThree;

  //check for nodeThree -> nodeTwo -> nodeOne
  while (node) {
    if (node.value === nodeTwo.value) foundTwo = true;
    if (node.value > nodeOne.value) node = node.left;
    else if (node.value < nodeOne.value) node = node.right;
    else return foundTwo;
  }
}
