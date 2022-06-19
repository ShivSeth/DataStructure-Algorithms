// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  let sumsArray = [];
  function traverse(root) {
    if (!root) return sumsArray;
    if (root.left) {
      root.left.value = root.left.value + root.value;
      traverse(root.left);
    }
    if (root.right) {
      root.right.value = root.right.value + root.value;
      traverse(root.right);
    }
    //We reached the leaf node - Push the added elements in the array
    if (!root.right && !root.left) sumsArray.push(root.value);
  }
  traverse(root);
  return sumsArray;
}
