var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store vals
  var storage = {};

  // Implement the methods below
  var counter = 0;
  someInstance.push = function(val) {
    storage[counter] = val;
    counter++;
  };
  someInstance.pop = function() {
    if ( counter < 1 ) {
      return;
    }
    var remove = storage[counter - 1];
    delete storage[counter - 1];
    counter--;
    return remove;
  };
  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
