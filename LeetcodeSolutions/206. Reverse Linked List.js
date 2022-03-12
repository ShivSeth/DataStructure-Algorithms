/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let next = null;
  let temp = head;
  while (temp) {
    next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }
  return prev;
};
