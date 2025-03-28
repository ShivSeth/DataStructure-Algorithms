/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
  /**
   * @param {ListNode} l1
   * @param {ListNode} l2
   * @return {ListNode}
   */
  addTwoNumbers(l1, l2) {
    //we need to create a dummy node so as to maintain the pointer to the dummyNode
    let dummyNode = new ListNode();
    let currentNode = dummyNode;

    let carry = 0;

    while (carry || l1 || l2) {
      if (l1) {
        carry += l1.val;
        l1 = l1.next;
      }
      if (l2) {
        carry += l2.val;
        l2 = l2.next;
      }
      currentNode.next = new ListNode(carry % 10);
      currentNode = currentNode.next;
      carry = Math.trunc(carry / 10);
    }
    return dummyNode.next;
  }
}
