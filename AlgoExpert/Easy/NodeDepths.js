//BFS approach
function nodeDepths(root) {
  // Write your code here.
  let count = 0;
  let result = 0;
  let queue = [[root]];
  while (queue.length) {
    let temp = [];
    let node = queue.pop();
    node.forEach((i) => {
      result += count;
      if (i.left) temp.push(i.left);
      if (i.right) temp.push(i.right);
    });
    count++;
    if (temp.length > 0) queue.push(temp);
  }
  return count;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
