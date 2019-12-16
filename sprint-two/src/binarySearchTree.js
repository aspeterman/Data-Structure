var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTree.prototype);

  instance.value = value;
  instance.right = undefined;
  instance.left = undefined;

  return instance;
};

BinarySearchTree.prototype.insert = function (value) {
  // accepts a value and places in the tree in the correct position.
  var node = BinarySearchTree(value);

  var reInsert = function (tree) {
    if (tree.value > value && tree.left === undefined) {
      tree.left = node;
    } else if (tree.value > value) {
      reInsert(tree.left);
    } else if (tree.value < value && tree.right === undefined) {
      tree.right = node;
    } else if (tree.value < value) {
      reInsert(tree.right);
    }
  };

  reInsert(this);
};

BinarySearchTree.prototype.contains = function (value) {
  var isContains = false;
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  var reContains = function(tree) {
    if (tree.value === value) {
      isContains = true;
    } else if (tree.left !== undefined && value < tree.value) {
      reContains(tree.left);
    } else if (tree.right !== undefined && value > tree.value) {
      reContains(tree.right);
    }
  };

  reContains(this);
  return isContains;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  //accepts a callback and executes it on every value contained in the tree.
  var reCB = function (tree) {
    callback.call(tree, tree.value);

    if (tree.left !== undefined) {
      reCB(tree.left);
    }

    if (tree.right !== undefined) {
      reCB(tree.right);
    }
  };
  reCB(this);
};
