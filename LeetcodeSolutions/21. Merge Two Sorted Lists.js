/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  //Always use dummyHead when dealing with the questions of Linked List
  let dummyHead = {
    next: null,
  };
  let tempNode = dummyHead.next;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tempNode.next = l1;
      l1 = l1.next;
    } else {
      tempNode.next = l2;
      l2 = l2.next;
    }
    tempNode = tempNode.next;
  }
  tempNode.next = l1 || l2;
  return dummyHead.next;
};
