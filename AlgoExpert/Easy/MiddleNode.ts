// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function middleNode(linkedList: LinkedList) {
  // Write your code here.

  let pointer1: LinkedList | null = linkedList;
  let pointer2: LinkedList | null = linkedList;

  while (pointer2 !== null && pointer2.next !== null) {
    pointer2 = pointer2.next.next;
    pointer1 = pointer1 && pointer1.next;
  }
  return pointer1;
}
