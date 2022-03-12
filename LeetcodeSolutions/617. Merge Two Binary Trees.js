/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  //dfs solution
  // if (!root1) return root2;
  // if (!root2) return root1;
  // root1.val += root2.val;
  // root1.left = mergeTrees(root1.left, root2.left);
  // root1.right = mergeTrees(root1.right, root2.right);
  // return root1;

  //bfs solution ... is here 😍
  if (!root1) return root2;
  if (!root2) return root1;
  let queue = [[root1, root2]];
  while (queue.length) {
    //we can use queue pop as well here
    let [r1, r2] = queue.pop();
    r1.val = r1.val + r2.val;
    if (r1.left && r2.left) queue.push([r1.left, r2.left]);
    else r1.left = r1.left ? r1.left : r2.left;
    if (r1.right && r2.right) queue.push([r1.right, r2.right]);
    else r1.right = r1.right ? r1.right : r2.right;
  }
  return root1;
};
