var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};


  // Implement the methods below
  var idx = 0; // last val in current obj
  var next = 0; //first val in current obj
  var len = 0; //size


  // Implement the methods below

  someInstance.enqueue = function(value) {
    //set value to current index + 1
    storage[idx++] = value;
    //increase len   value
    len ++;
    return storage;
  };

      someInstance.dequeue = function() {
        //ensure queue is not empty
        if (len > 0) {
          //result is set to current index value
          var result = storage[next];
          //delete the next index down from result
          delete storage[next++];
          //change the value of len
          len --;
          return result;
        }
      };

  someInstance.size = function() {
      //all we have to do is return the len  value as defined in previous methods
      return len;
    };
    return someInstance;
  };

  // var sampleObj = new Queue();
  //   console.log(sampleObj);
  //   console.log(sampleObj.enqueue('anything here'));
  //   console.log(sampleObj.enqueue('another one'));
  //   console.log(sampleObj.dequeue())
  //   console.log(sampleObj.size());







