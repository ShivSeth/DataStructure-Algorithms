/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let tempNode = head;
  let prevNode = null;
  let nextNode = null;

  while (tempNode) {
    nextNode = tempNode.next;
    tempNode.next = prevNode;
    prevNode = tempNode;
    tempNode = nextNode;
  }

  return prevNode;
}
