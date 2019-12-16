
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.
var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    idx: 0,
    next: 0,
    len: 0,
  };

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  //Use .this
  enqueue: function(value) {
    //Add a string to the back of the queue
    this.storage[this.idx++] = value;
    this.len++;
  },

  dequeue: function() {
    // Remove return the string at the front of the queue
    if (this.len > 0) {
      //result is set to current index value
      var result = this.storage[this.next];
      //delete the next index down from result
      delete this.storage[this.next++];
      //change the value of len
      this.len --;
      return result;
    }
  },

  size: function() {
    //Return the number of items in the queue
    return this.len;
  }
};


