
var Queue = function() {
      this.idx = 0;
      this.next = 0;
      this.len = 0;
      this.storage = {};
  };

  Queue.prototype.enqueue = function(value) {
    this.storage[this.idx++] = value;
    this.len++;
  };

  Queue.prototype.dequeue = function() {
    if (this.len > 0) {
      var result = this.storage[this.next];
      delete this.storage[this.next++];
      this.len --;
      return result;
    }
  };

  Queue.prototype.size = function() {
    return this.len;
  };

