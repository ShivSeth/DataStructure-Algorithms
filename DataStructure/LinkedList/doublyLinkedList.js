// More memory = More flexibility

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
    }
    this.length--;
    temp.prev = null;
    return temp;
  }

  shift() {
    let temp;
    if (this.length === 0) return null;
    temp = this.head;
    if (this.length === 1) {
      this.head = null;
      this.prev = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;
    }
    this.length--;
    temp.next = null;
    return temp;
  }

  unshift(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
    ++this.length;
    return this;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) return null;
    let count;
    let temp;

    if (pos <= this.length / 2) {
      temp = this.head;
      count = 0;
      while (count < pos) {
        temp = temp.next;
        count++;
      }
    } else {
      let count = pos;
      temp = this.tail;
      while (count < this.length - 1) {
        temp = temp.prev;
        count++;
      }
    }
    return temp;
  }
  set(pos, val) {
    if (this.get(pos)) {
      this.get(pos).val = val;
      return true;
    }
    return false;
  }
  insert(pos, val) {
    if (pos < 0 || pos > this.length) return false;
    else if (pos === 0) return !!this.unshift(val);
    else if (pos === this.length) return !!this.push(val);

    let node = new Node(val);
    let temp = this.get(pos - 1);
    node.next = temp.next;
    node.next.prev = node;
    node.prev = temp;
    temp.next = node;
    this.length++;
    return true;
  }

  remove(pos) {
    if (pos < 0 || pos >= this.length) return undefined;
    else if (pos === 0) return this.shift();
    else if (pos === this.length - 1) return this.pop();
    let temp = this.get(pos);
    temp.prev.next = temp.next;
    temp.next.prev = temp.prev;
    this.length--;
    temp.next = null;
    temp.prev = null;
    return temp;
  }

  reverse() {
    if (this.length === 1) return this;
    [this.head, this.tail] = [this.tail, this.head];
    [this.tail.prev, this.tail.next] = [this.tail.next, this.tail.prev];
    [this.head.prev, this.head.next] = [this.head.next, this.head.prev];
    let temp = this.head.next;
    for (let i = 1; i < this.length - 1; i++) {
      [temp.prev, temp.next] = [temp.next, temp.prev];
      temp = temp.next;
    }
    return this;
  }
}

let list = new DoublyLinkedList();
list.push(5);
list.push(10);
list.push(15);
list.remove(0);
list;
