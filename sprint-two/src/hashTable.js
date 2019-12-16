var HashTable = function() {
  this._limit = 8;
  this._count = 0;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //rather than use (!bucket) assign bucket as get storage or
  //empty array
  var bucket = this._storage.get(index) || [];

  //iterate to assign tuples with key/pair up to limit of array
  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      tuple[1] = v;
      return;
    }
  }
  //push and set new tuple
  bucket.push([k, v]);
  this._storage.set(index, bucket);

  //double limit
  this._count++;
  if (this._count > 0.75 * this._limit) {
    this.modifyLimit(this._limit * 2);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(bucket[i][0]);
    }
  }
  //half limit
  this._count--;
  // console.log('count: ', this._count, 'current limit: ', this._limit);
  if (this._count < .25 * this._limit) {
    this.modifyLimit(this._limit / 2);
  }
};


HashTable.prototype.modifyLimit = function(newLimit) {
//new storage and limit helper function
  var oldStorage = this._storage;
  this._storage = LimitedArray(newLimit);
  this._limit = newLimit;

  //counter to check the current % of length limit
  this._count = 0;

  //locally defining hashTable as this value
  var hashTable = this;

  oldStorage.each(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];

      //using the locally defined hashTable to assign tuples
      hashTable.insert(tuple[0], tuple[1]);
    }
  });
};


// var newHashTable = new HashTable();
// newHashTable.insert('Bob', 'Barker');
// newHashTable.insert('Pissoff', 'Johnson');
// newHashTable.insert('Tommy', 'BarkTrouber');
// newHashTable.remove('Tommy', 'BarkTrouber');
// console.log(newHashTable._storage);




/*
 * Complexity: What is the time complexity of the above functions?
 Right now, our time complexity is (1n) linear...because of iteration
 */


// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
// };

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   this._storage.set(index, v)
//   // this._storage[k] = v


//   this.modifyLimit();
//   console.log(this._limit)
//     }

//     HashTable.prototype.retrieve = function(k){
//       var index = getIndexBelowMaxForKey(k, this._limit);

//       return this._storage.get(index, k)
//       // return this._storage[k]
//     }

//     HashTable.prototype.remove = function(k){
//       var index = getIndexBelowMaxForKey(k, this._limit);

//       if (this._storage.hasOwnProperty(index)) {
//         delete this._storage[k];
//       }
//       this.modifyLimit();
//       // console.log(this._limit)

//       // return undefined
//     }

//       HashTable.prototype.modifyLimit = function(){
//         var size = Object.keys(this._storage).length
//         if(size > 0.75 * this._limit) {
//           this._limit *= 2;
//         }
//         else if(size < ((0.25 * this._limit))){
//           this._limit *= 1/2;
//         }
//       }

// var newHashTable = new HashTable();
// newHashTable.insert('Bob', 'Barker');
// newHashTable.insert('Pissoff', 'Johnson');
// newHashTable.insert('Tommy', 'BarkTrouber');
// newHashTable.remove('Tommy', 'BarkTrouber');
// console.log((newHashTable.retrieve('Barker')))
// console.log(newHashTable);