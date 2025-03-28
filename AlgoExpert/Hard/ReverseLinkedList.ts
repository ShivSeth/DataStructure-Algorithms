// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function reverseLinkedList(head: LinkedList | null) {
  // Write your code here.

  let temp: LinkedList | null = head;
  let prev: LinkedList | null = null;
  let next: LinkedList | null = null;

  while (temp) {
    next = temp.next;
    temp.next = prev;
    prev = temp;
    temp = next;
  }

  head = prev;
  return head;
}
