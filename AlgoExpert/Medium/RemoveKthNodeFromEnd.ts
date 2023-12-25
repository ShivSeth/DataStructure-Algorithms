// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeKthNodeFromEnd(head: LinkedList, k: number) {
  // Write your code here.

  let node: LinkedList | null = head;
  let count = 0;
  while (node && count !== k) {
    node = node.next;
    count++;
  }
  console.log(head);
  console.log(head.next);
  if (!node) {
    head.value = head.next!.value;
    head.next = head.next!.next;
    return;
  }
  let temp: LinkedList | null = head;
  while (node && node.next && temp) {
    temp = temp.next;
    node = node.next;
  }

  if (temp && temp.next) temp.next = temp.next.next;
  return head;
}
