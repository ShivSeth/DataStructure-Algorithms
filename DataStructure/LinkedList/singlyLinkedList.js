class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

//When you don't need random access and only insertion and deletion at beginning and end- LL is useful than Array else for random access from positions array are better
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.head;
    let pre = temp;
    while (temp.next !== null) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    pre.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  shift() {
    if (this.head === null) return undefined;
    let newHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return newHead;
  }
  unshift(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  get(pos) {
    if (list.length === 0 || pos < 0 || pos >= this.length) return null;
    let count = 0;
    let temp = this.head;
    while (count !== pos) {
      count++;
      temp = temp.next;
    }
    return temp;
  }

  set(pos, val) {
    let foundNode = this.get(pos);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(pos, val) {
    if (pos < 0 || pos > this.length) return false;
    if (pos === this.length) return !!this.push(val);
    if (pos === 0) return !!this.unshift(val);
    let newNode = new Node(val);
    let temp = this.get(pos - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }

  remove(pos) {
    if (pos < 0 || pos >= this.length) return undefined;
    if (pos === 0) return this.shift(pos);
    if (pos === this.length - 1) return this.pop(pos);
    let temp = this.get(pos - 1);
    let prevValue = temp.next;
    temp.next = temp.next.next;
    this.length--;
    return prevValue;
  }

  reverse() {
    [this.head, this.tail] = [this.tail, this.head];
    let temp = this.tail;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.print();
list.reverse();
list.print();
