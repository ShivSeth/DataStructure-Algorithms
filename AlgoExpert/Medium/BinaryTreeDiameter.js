// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(root) {
  // Write your code here.

  let diameter = 0;

  function evaluate(tree) {
    if (!tree) return 0;

    let left = evaluate(tree.left);
    let right = evaluate(tree.right);

    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  }
  evaluate(root);
  return diameter;
}
// function binaryTreeDiameter(tree) {
//   // Write your code here.

//   function evaluate(tree, { height = 0, diameter = 0 } = {}) {
//     if (!tree) return { height, diameter };

//     let leftTree = evaluate(tree.left);
//     let rightTree = evaluate(tree.right);

//     //Max Diameter till node
//     let maxDiameter = Math.max(
//       leftTree.diameter,
//       rightTree.diameter,
//       leftTree.height + rightTree.height
//     );

//     return {
//       diameter: maxDiameter,
//       height: Math.max(leftTree.height, rightTree.height) + 1,
//     };
//   }

//   return evaluate(tree).diameter;
// }
// function binaryTreeDiameter(tree) {
//   // Write your code here.

//   function calcHeight(node) {
//     if (!node) return 0;
//     return Math.max(calcHeight(node.left), calcHeight(node.right)) + 1;
//   }

//   function calcDiameter(node) {
//     if (!node) return 0;

//     let lHeight = calcHeight(node.left);
//     let rHeight = calcHeight(node.right);

//     return Math.max(
//       lHeight + rHeight,
//       calcDiameter(node.right),
//       calcDiameter(node.left)
//     );
//   }

//   return calcDiameter(tree);
// }
