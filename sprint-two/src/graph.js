
var Node = function(val) {
  this.val = val;
  this.edges = {};
};

// Instantiate a new graph
var Graph = function() {
  this.map = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(val) {
  if (!this.map[val]) {
    this.map[val] = new Node(val);
  }
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(val) {
  if (this.map[val]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    var edgesForRemoval = this.map[node].edges;
    for (var key in edgesForRemoval) {
      this.removeEdge(node, key);
    }
    delete this.map[node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.map[fromNode].edges[toNode]) {
    return true;
  } else {
    return false;
  }
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.map[fromNode].edges[toNode] = true;
  this.map[toNode].edges[fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    delete this.map[fromNode].edges[toNode];
    delete this.map[toNode].edges[fromNode];
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.map) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */






