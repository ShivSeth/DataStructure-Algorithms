// Feel free to add new properties and methods to the class.

export class MinMaxStack {
  minMaxStack: { min: number; max: number }[];
  stack: number[];

  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }

  peek() {
    // Write your code here.
    return this.stack[this.stack.length - 1];
  }

  pop() {
    // Write your code here.
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number: number) {
    // Write your code here.
    this.stack.push(number);
    if (!this.minMaxStack.length) {
      this.minMaxStack.push({
        min: number,
        max: number,
      });
      return;
    }

    let min =
      number < this.minMaxStack[this.minMaxStack.length - 1].min
        ? number
        : this.minMaxStack[this.minMaxStack.length - 1].min;
    let max =
      number > this.minMaxStack[this.minMaxStack.length - 1].max
        ? number
        : this.minMaxStack[this.minMaxStack.length - 1].max;
    this.minMaxStack.push({
      min,
      max,
    });
  }

  getMin() {
    // Write your code here.
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    // Write your code here.
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

let minMaxStack = new MinMaxStack();
minMaxStack;
minMaxStack.push(5);
minMaxStack;
