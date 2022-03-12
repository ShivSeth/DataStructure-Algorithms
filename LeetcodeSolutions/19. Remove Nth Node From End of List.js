/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  //Edge case - When 1 element exist
  if (!head.next) return (head = head.next);
  slow = fast = head;
  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next;
  }
  //Edge case when the fast reach null
  if (!fast) return (head = head.next);
  slow.next = slow.next.next;
  return head;
};

//We can also implement the above solution using dummyHead = { next:head }
//Edge cases gets covered and less if else conditions
