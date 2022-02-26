/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (!node) return node;
  let map = new Map();
  function dfs(node) {
    if (!map.has(node.val)) {
      let tempNode = new Node(node.val);
      map.set(node.val, tempNode);
      tempNode.neighbors = node.neighbors.map(dfs);
    }
    return map.get(node.val);
  }
  return dfs(node);
};
