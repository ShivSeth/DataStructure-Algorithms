// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree, maxValue = Infinity, minValue = -Infinity) {
  // Write your code here.
  if (!tree) return true;
  if (tree.value > maxValue || tree.value < minValue) return false;

  return (
    validateBst(tree.left, tree.value, minValue) &&
    validateBst(tree.right, maxValue, tree.value)
  );
}
