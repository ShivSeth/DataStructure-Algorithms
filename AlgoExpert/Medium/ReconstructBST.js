// This is an input class. Do not edit.
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

//Below is the optimized solution for the problem
function reconstructBst(
  preOrderTraversalValues,
  lowerBound = -Infinity,
  upperBound = Infinity,
  idxHolder = {
    rootIdx: 0,
  }
) {
  // Write your code here.

  if (idxHolder.rootIdx === preOrderTraversalValues.length) return null;
  const rootValue = preOrderTraversalValues[idxHolder.rootIdx];
  if (rootValue < lowerBound || rootValue >= upperBound) return null;
  idxHolder.rootIdx++;
  const leftSubtree = reconstructBst(
    preOrderTraversalValues,
    lowerBound,
    rootValue,
    idxHolder
  );
  const rightSubTree = reconstructBst(
    preOrderTraversalValues,
    rootValue,
    upperBound,
    idxHolder
  );
  return new BST(rootValue, leftSubtree, rightSubTree);
}

// function reconstructBst(preOrderTraversalValues) {
//   // Write your code here.
//   if (preOrderTraversalValues.length === 0) return null;

//   let rightSubIndex = preOrderTraversalValues.length;
//   let currentValue = preOrderTraversalValues[0];
//   for (let i = 1; i < preOrderTraversalValues.length; i++) {
//     if (preOrderTraversalValues[i] >= currentValue) {
//       rightSubIndex = i;
//       break;
//     }
//   }

//   let leftSubTree = reconstructBst(
//     preOrderTraversalValues.slice(1, rightSubIndex)
//   );
//   let rightSubTree = reconstructBst(
//     preOrderTraversalValues.slice(rightSubIndex)
//   );

//   return new BST(currentValue, leftSubTree, rightSubTree);
// }

reconstructBst([10, 4, 2, 1, 5, 17, 19, 18]);
