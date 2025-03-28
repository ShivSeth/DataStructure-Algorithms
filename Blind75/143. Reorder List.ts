class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  if (!head) return;

  let slow = head;
  let fast = head.next;

  //Find the middle pointer
  while (fast && fast?.next) {
    slow = slow?.next!;
    fast = fast?.next.next!;
  }

  console.log('slow1', slow);

  //current holds the middle pointer
  let current = slow.next;
  slow.next = null;
  let prev: ListNode | null = null;
  let next: ListNode | null = null;

  console.log('current', current);

  console.log('head', head);

  //reverse the list from the middle
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next!;
  }

  //prev -> hold the starting of the pointer

  let p1 = head;
  let p2 = prev;

  console.log('p1', p1);
  console.log('p2', p2);

  while (p1 && p2) {
    let temp1 = p1?.next;
    let temp2 = p2.next;
    p1.next = p2;
    p2.next = temp1;
    p1 = temp1!;
    p2 = temp2;
  }
}
