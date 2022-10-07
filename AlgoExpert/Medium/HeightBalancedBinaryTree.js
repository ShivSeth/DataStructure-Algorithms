// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  // Write your code here.

  let flag = true;

  function evaluate(root) {
    if (!root) return 0;
    if (!flag) return;
    let left = evaluate(root.left);
    let right = evaluate(root.right);

    if (Math.abs(left - right) > 1) flag = false;

    return Math.max(left, right) + 1;
  }

  evaluate(tree);

  return flag;
}
