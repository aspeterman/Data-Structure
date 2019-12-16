var Stack = function() {
  var newStack = Object.create(stackMethods);
    newStack.counter = 0;
    newStack.storage = {};
  return newStack;
};

var stackMethods = {
  pop: function() {
    if (this.counter < 1) return;
    var removed = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter--;
    return removed;
  },
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
  size: function() {
    return this.counter;
  }
};


