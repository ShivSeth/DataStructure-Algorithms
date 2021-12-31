//Adding or removing from the beginning of an array is not cool for the O(n) -> Use list in form of stack
//push and pop should be constant time
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.last = node;
      this.first = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    temp.next = null;
    this.size--;
    return temp;
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
stack.pop();
stack;
