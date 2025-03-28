// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function mergeLinkedLists(headOne: LinkedList, headTwo: LinkedList) {
  // Write your code here.

  let h1: LinkedList | null = headOne;
  let h2: LinkedList | null = headTwo;

  let temp: LinkedList | null = new LinkedList(-1);
  let head = temp;

  while (h1 && h2) {
    if (h1.value < h2.value) {
      temp.next = h1;
      h1 = h1.next!;
    } else {
      temp.next = h2;
      h2 = h2.next!;
    }
    temp = temp.next;
  }

  temp.next = h1 || h2;

  return head ? head.next : null;
}
