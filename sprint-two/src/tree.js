var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {
  //if contains child with passed in value
  //create new tree inside instance of child
  var inv = Tree(value);
  this.children.push(inv);
  return inv;
};

//detect whether child is object
treeMethods.contains = function(target) {
  for (var i = 0; i < this.children.length; i++) {
    var currentChild = this.children[i];
    // console.log(currentChild);
    if (currentChild.children.length > 0) {
      return true;
    }
    if (currentChild.value === target) {
      return true;
    } else {
      return false;
    }
  }
};



// var newTree = Tree();
// newTree.addChild('child1');
// newTree.addChild('child2');
// newTree.children[0].addChild('standup')
// // console.log(newTree.children);
// // console.log(newTree.children[0]);



/*
 * Complexity: What is the time complexity of the above functions?
 */
