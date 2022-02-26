/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  //Array to store the sibling nodes
  let siblings = [];
  //Array tos tore the results
  let result = [];
  //bfs implementation
  function bfs(start) {
    let queue = [[start]];
    while (queue.length) {
      //temp array with the current queue nodes
      //shift operations for the FIFO implementation
      let vertexArray = queue.shift();
      result.push(vertexArray.map((v) => v.val));
      //Dual loop to traverse through the children array
      vertexArray.forEach((v) => {
        v.children.forEach((childNode) => {
          if (childNode !== null) siblings.push(childNode);
        });
      });
      //Check if there are any siblings in the siblings array
      if (siblings.length > 0) queue.push(siblings);
      siblings = [];
    }
  }
  bfs(root);
  return result;
};
