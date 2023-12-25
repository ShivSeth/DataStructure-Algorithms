// This is an input class. Do not edit.
export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node: Node) {
    // Write your code here.
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node: Node) {
    //( Write your code here.
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node: Node, nodeToInsert: Node) {
    // Write your code here.
    if (this.head === nodeToInsert && this.tail === nodeToInsert) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) this.head = nodeToInsert;
    else node.prev.next = nodeToInsert;
    node.prev = nodeToInsert;
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    // Write your code here.
    if (nodeToInsert === this.head && this.tail === nodeToInsert) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) this.tail = nodeToInsert;
    else node.next.prev = nodeToInsert;
    node.next = nodeToInsert;
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    // Write your code here.
    if (position === 1) return this.setHead(nodeToInsert);
    let count = 1;
    let node = this.head;
    while (node && count < position) {
      count++;
      node = node.next;
    }

    if (!node) return this.setTail(nodeToInsert);
    this.insertBefore(node, nodeToInsert);
  }

  removeNodesWithValue(value: number) {
    // Write your code here.
    let node = this.head;
    while (node) {
      let temp = node;
      node = node.next;
      if (temp.value === value) this.remove(temp);
    }
  }

  remove(node: Node) {
    // Write your code here.
    if (this.head === node) this.head = node.next;
    if (this.tail === node) this.tail = node.prev;
    this.removeNodeBindings(node);
  }

  containsNodeWithValue(value: number) {
    // Write your code here.
    let node = this.head;
    while (node !== null && node.value !== value) node = node.next;
    return node !== null;
  }
  removeNodeBindings(node: Node) {
    if (node.prev !== null) node.prev.next = node.next;
    if (node.next !== null) node.next.prev = node.prev;
    node.next = null;
    node.prev = null;
  }
}
