// This is an input class. Do not edit.
export class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function sumOfLinkedLists(
  linkedListOne: LinkedList,
  linkedListTwo: LinkedList
) {
  // Write your code here.

  let sumOne = 0;
  let sumTwo = 0;
  let multiple = 1;
  let listOne: LinkedList | null = linkedListOne;
  let listTwo: LinkedList | null = linkedListTwo;

  while (listOne) {
    sumOne = sumOne + listOne.value * multiple;
    multiple = multiple * 10;
    listOne = listOne.next;
  }

  multiple = 1;

  while (listTwo) {
    sumTwo = sumTwo + listTwo.value * multiple;
    multiple = multiple * 10;
    listTwo = listTwo.next;
  }

  let totalSum = sumOne + sumTwo;
  let list = new LinkedList(0);
  let pointer = list;
  while (totalSum) {
    let digit = totalSum % 10;
    let node = new LinkedList(digit);
    pointer.next = node;
    pointer = node;
    totalSum = Math.trunc(totalSum / 10);
  }

  return list.next;
}
