/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root === null) return root;
  function bfs(start) {
    let tempArray = [];
    let queue = [[start]];
    while (queue.length) {
      let nodeArray = queue.shift();
      nodeArray.forEach((_, i) => {
        nodeArray[i].next = nodeArray[i + 1];
        if (i === nodeArray.length - 1) nodeArray[i].next = null;
      });
      nodeArray.forEach((node) => {
        if (node.left && node.right) {
          tempArray.push(node.left);
          tempArray.push(node.right);
        }
      });
      queue.push(tempArray);
      tempArray = [];
    }
  }
  bfs(root);
  return root;
};
