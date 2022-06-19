// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
  let temp = linkedList;
  while (temp.next) {
    if (temp.value === temp.next.value) {
      temp.next = temp.next.next;
      continue;
    }
    temp = temp.next;
  }
  return linkedList;
}
