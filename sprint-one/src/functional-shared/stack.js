var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    counter: 0,
  };

  _.extend(someInstance, stackMethods);

  return someInstance;

};

var stackMethods = {
  pop: function() {
    if (this.counter < 1) return;
    var removed = this.storage[this.counter - 1];
    delete [this.counter - 1];
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




