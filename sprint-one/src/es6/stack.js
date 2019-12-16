class Stack {
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }

  pop() {
    if (this.counter < 1) return;
    var removed = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter--;
    return removed;
  }

  size() {
    return this.counter;
  }
}

// var newStack = new Stack();
// newStack.push('testing');
// newStack.push('testing again');
// newStack.pop();
// console.log(newStack.size());
// console.log(newStack);