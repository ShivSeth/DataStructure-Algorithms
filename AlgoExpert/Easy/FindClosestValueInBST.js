// function findClosestValueInBst(tree, target) {
//   // Write your code here.
//   let value;
//   let diff = Infinity;
//   function traverse(tree) {
//     if (diff >= Math.abs(tree.value - target)) {
//       value = tree.value;
//       diff = Math.abs(tree.value - target);
//     }
//     //A bit of optimization fow as to use the BST property to reduce the traversing
//     if (tree.left && tree.value >= target) traverse(tree.left);
//     if (tree.right && tree.value < target) traverse(tree.right);
//   }
//   traverse(tree);
//   return value;
// }

//BFS approach
function findClosestValueInBst(tree, target) {
  // Write your code here.
  let value;
  let diff = Infinity;
  while (tree) {
    if (Math.abs(tree.value - target) < diff) {
      value = tree.value;
      diff = Math.abs(tree.value - target);
    }
    if (tree.left && tree.value >= target) tree = tree.left;
    else if (tree.right && tree.value < target) tree = tree.right;
    else break;
  }
  return value;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
