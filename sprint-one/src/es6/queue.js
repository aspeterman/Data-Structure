class Queue {

  constructor() {
    this.storage = {};
    this.idx = 0;
    this.len = 0;
    this.next = 0;
  }

  enqueue(val) {
    this.storage[this.idx++] = val;
    this.len++
  }

  dequeue() {
    if (this.len > 0) {
      var result = this.storage[this.next];
      delete this.storage[this.next++];
      this.len --;
      return result;
    }
  }

  size() {
    return this.len;
  }
}

