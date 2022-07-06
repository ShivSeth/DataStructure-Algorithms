// This is an input class. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//Below is the in_order way to get the kth largest from the last
//Space -> O(n)
// function findKthLargestValueInBst(tree, k, array = []) {
//   // Write your code here.
//   if (tree.left) findKthLargestValueInBst(tree.left, k, array);
//   array.push(tree.value);
//   if (tree.right) findKthLargestValueInBst(tree.right, k, array);
//   return array[array.length - k];
// }

function findKthLargestValueInBst(
  tree,
  k,
  data = {
    nodesVisited: 0,
    lastValue: 0,
  }
) {
  // Write your code here.

  if (tree.right) findKthLargestValueInBst(tree.right, k, data);
  if (k === ++data.nodesVisited) return (data.lastValue = tree.value);
  if (tree.left && data.nodesVisited < k)
    findKthLargestValueInBst(tree.left, k, data);
  return data.lastValue;
}

//Function to find the kth smallest too in BST
function kthSmallest(
  root,
  k,
  data = {
    nodesVisited: 0,
    lastValue: 0,
  }
) {
  // Write your code here.

  if (root.left && data.nodesVisited < k) kthSmallest(root.left, k, data);
  if (k === ++data.nodesVisited) return (data.lastValue = root.value);
  if (root.right) kthSmallest(root.right, k, data);
  return data.lastValue;
}
