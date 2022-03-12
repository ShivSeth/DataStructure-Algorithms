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
var middleNode = function (head) {
  // fast but spacious
  // let arr = [];
  // let temp = head;
  // while (temp !== null) {
  //   arr.push(temp);
  //   temp = temp.next;
  // }
  // let k = Math.ceil(arr.length/2);
  // return arr[k].val;

  //Having two iteration
  // let temp = head;
  // let count = 0;
  // while (temp !== null) {
  //   count++;
  //   temp = temp.next;
  // }
  // let i = 0;
  // temp = head;
  // while (i < Math.floor(count / 2)) {
  //   temp = temp.next;
  //   i++;
  // }
  // return temp;

  //Two pointer solution
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
