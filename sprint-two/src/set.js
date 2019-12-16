var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'string') {
    this.storage.push(item);
  }
};

setPrototype.contains = function(item) {
  if (this.storage.includes(item)) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  if (this.storage.includes(item)) {
    var itemIndex = this.storage.indexOf(item);
    this.storage.splice(itemIndex);
  }
};

// var newSet = Set();
// newSet.add('stringvalue');
// newSet.add('anotherValue')
// console.log(newSet);
/*
 * Complexity: What is the time complexity of the above functions?
 */
