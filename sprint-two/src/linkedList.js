var NodeType = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // //if no head exists / first node is head and tail - next is null
    if (!list.head) {
      list.head = NodeType(value);
      list.tail = list.head;
      //all other instances become tail
    } else if (!list.head.next) {
      list.tail = NodeType(value);
      list.head.next = list.tail;
    } else {
      list.tail = NodeType(value);
    }

  };

  list.removeTail = function() {
    if (list.tail !== null) {
      delete list[list.tail.value];
      var oldTail = list.tail;
      list.tail = list.tail.previous ? list.tail.previous : null;
      list.tail.next = list.head;
      list.head.previous = list.tail;

      return oldTail;
    }

    return null;
  };

  list.removeHead = function() {
    var value = list.head.value;
    list.head = list.head.next;

    return value;
  };

  list.addToHead = function(value) {
    var node = NodeType(value);
    list[node.value] = node;
    if (list.head !== null) {
      list.tail.next = node;
      node.next = list.head;
      list.head.previous = node;
      list.head = node;
      list.head.previous = list.tail;
    } else {
      list[node.value].previous = list[node.value].next = node;
      list.head = node;
      list.tail = node;
    }
  };

  list.contains = function(target) {
    if (list.head.value === target) {
      return true;
    } else if (list.tail.value === target) {
      return true;
    }
    return false;
  };
  return list;
};




var newList = LinkedList();
newList.addToTail('head');
newList.addToTail('tail1');
newList.addToTail('tail2');
console.log(newList.contains('tail1'));
console.log(newList);

// var makeNode = function(value) {
//   var node = {};

//   node.value = value;
//   node.next = null;

//   return node;
// };
// var LinkedList = function() {
//   var list = {};
//   list.head = null;
//   list.tail = null;

//   list.addToTail = function(value) {
//     var newNode = makeNode(value);
//     // If nothing in list
//     if (!list.head) {
//       list.head = newNode;
//       list.tail = newNode;
//     } else {
//       list.tail.next = newNode;
//       list.tail = newNode;
//     }
//   };

//   list.removeHead = function() {
//     var result = list.head.value;
//     list.head = list.head.next;
//     return result;
//   };

//   list.contains = function(target) {
//     var currentNode = list.head;

//     while (currentNode) {
//       if (currentNode.value === target) {
//         return true;
//       } else {
//         currentNode = currentNode.next;
//       }
//     }
//     return false;
//   };

//   return list;
// };

// var newList = LinkedList();
// newList.addToTail('head');
// newList.addToTail('tail1');
// newList.addToTail('tail2');
// console.log(newList.contains('tail1'));
// console.log(newList);

/*
 * Complexity: What is the time complexity of the above functions?
 */