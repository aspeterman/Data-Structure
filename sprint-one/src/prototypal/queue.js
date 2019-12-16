var Queue = function() {
  var newQueue = Object.create(queueMethods);
    newQueue.idx = 0;
    newQueue.next = 0;
    newQueue.len = 0;
    newQueue.storage = {};

  return newQueue;
};

var queueMethods = {

enqueue : function(value) {
  //Add a string to the back of the queue
  this.storage[this.idx++] = value;
  this.len++;
},

dequeue : function() {
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
}

