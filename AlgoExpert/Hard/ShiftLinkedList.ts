// This is the class of the input linked list.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function shiftLinkedList(head: LinkedList, k: number) {
  // Write your code here.

  let length = 0;
  let h: LinkedList | null = head;

  while (h) {
    h = h.next;
    length++;
  }
  let netRotations = k % length < 0 ? (k % length) + length : k % length;

  let p1: LinkedList | null = head;
  let p2: LinkedList | null = head;
  while (netRotations) {
    p2 = p2.next!;
    netRotations--;
  }

  while (p2.next) {
    p1 = p1.next!;
    p2 = p2.next!;
  }

  p2.next = head;
  head = p1.next!;
  p1.next = null;

  return head;
}
