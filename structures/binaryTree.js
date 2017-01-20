function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function Tree() {
  this.root = null;
  this._length = 0;
  this.size = () => this._length;
}

Tree.prototype.insertNode = function (node, currentNode) {
  if (node.value < currentNode.value) {
    if (!currentNode.left) {
      this._length++;
      currentNode.left = node;
      return currentNode.left;
    }
    return this.insertNode(node, currentNode.left);
  }

  if (!currentNode.right) {
    this._length++;
    currentNode.right = node;
    return currentNode.right;
  }
  return this.insertNode(node, currentNode.right);
}



Tree.prototype.insert = function (value, currentNode) {
  if (typeof value !== "number") return null;

  var node = new Node(value);
  if (!this.root) {
    this._length++;
    this.root = node;
    return this.root;
  }

  return this.insertNode(node, this.root);
};

Tree.prototype.searchNode = function (value, currentNode) {
  if (!currentNode) return false;
  if (currentNode.value === value) return true;
  if (!currentNode.left && !currentNode.right) return false;
  if (value < currentNode.value) return this.searchNode(value, currentNode.left);
  return this.searchNode(value, currentNode.right);
}

Tree.prototype.search = function (value) {
  if (typeof value !== "number") return false;
  if (!this.root) return false;

  return this.searchNode(value, this.root);
}

Tree.prototype.getMinRight = function (node) {
  if (!node.left) return node;
  return this.getMinRight(node.left);
}

Tree.prototype.deleteNode  = function (value, currentNode) {
  if (!currentNode) return null;;
  if (currentNode.value === value) {
    console.log("find------");
      if (!currentNode.right && !currentNode.left) {
        console.log("last...");
        currentNode = null;
        return currentNode;
      }

      if (!currentNode.right) {
        console.log(right);
        currentNode = currentNode.left;
        return currentNode;
      } else if (!currentNode.left) {
        currentNode = currentNode.right;
        return currentNode;
      }

      var nodeAux = this.getMinRight(currentNode.right);
      nodeAux.right = currentNode.right;
      nodeAux.left = currentNode.left;

      return nodeAux;


  }
  if (!currentNode.left && !currentNode.right) return null;
  if (value < currentNode.value) {
    console.log("left");
    currentNode.left =  this.deleteNode(value, currentNode.left);
    return currentNode;
  }
  console.log("right...");
  currentNode.right = this.deleteNode(value, currentNode.right);
  return currentNode;

}

Tree.prototype.delete = function (value) {
  if (typeof value !== "number") return false;
  if (!this.root) return false;
  this.root = this.deleteNode(value, this.root);
  return this.root;
};


var tree = new Tree();
console.log(tree.search(23));
tree.insert(23);
console.log(23 + " " + tree.search(23));

console.log(tree.size());
tree.insert(11);
console.log(tree.size());
tree.insert(8);
tree.insert(43);

console.log(tree.delete(43) ? "deleted" : "nope");
console.log(tree);
