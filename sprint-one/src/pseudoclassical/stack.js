var Stack = function() {
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.counter] = value;
  this.counter++;
};

Stack.prototype.pop = function() {
  if (this.counter < 1) return;
  var removed = this.storage[this.counter - 1];
  delete this.storage[this.counter - 1];
  this.counter--;
  return removed;
};

Stack.prototype.size = function() {
  return this.counter;
};



