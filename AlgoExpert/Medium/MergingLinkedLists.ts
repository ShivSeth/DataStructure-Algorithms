// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function mergingLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList
) {
  // Write your code here.
  let headOne = linkedListOne;
  let headTwo = linkedListTwo;
  while (headOne !== headTwo) {
    if (headOne) headOne = headOne.next!;
    else headOne = linkedListTwo;
    if (headTwo) headTwo = headTwo.next!;
    else headTwo = linkedListOne;
  }
  return headOne;
}
