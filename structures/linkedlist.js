function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this._length = 0;
  var that = this;
  this.size = () => that._length;
}

LinkedList.prototype.add = function(data, index) {
  // create a new node
  var newNode = new Node(data);

  // define actual node
  var currentNode = this.head;
  // increase length
  this._length = this._length + 1;

  // if list is empty insert as head
  if (!currentNode) {
    this.head = newNode;

    return newNode;
  }

  // if list is not empty iterate to search the last node
  while(currentNode.next) {
    currentNode = currentNode.next;
  }

  // currentNode actually is the last node on the linkedlist
  // add node to it
  currentNode.next = newNode;
  return newNode;
};

LinkedList.prototype.getByPosition = function (position) {

  if (typeof position !== "number") return null;
  if (position < 0) return null;
  if (this._length === 0) return null;
  if (this._length - 1 < position) return null;

  if (position === 0) return this.head;

  var currentNode = this.head;
  // find based on position
  for (var i = 0; i < position; i++) {
    currentNode = currentNode.next;
  }

  return currentNode.data;

};

LinkedList.prototype.removeByPosition = function (position) {
  if (typeof position !== "number") return null;
  if (position < 0) return null;
  if (this._length === 0) return null;
  if (this._length - 1 < position) return null;

  this._length--;
  var currentNode = this.head;
  if (position === 0) {
    this.head = currentNode.next;
    return currentNode;
  }

  for (var i = 0; i < position - 1; i++) {
    currentNode = currentNode.next;
  }
  var nodeToDelete = currentNode.next;
  currentNode.next = nodeToDelete.next;

  return nodeToDelete;
}

var list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);
//console.log(list);
console.log(list.getByPosition(2));
console.log("Size: ",list.size());
console.log("before remove ", list.getByPosition(1))

list.removeByPosition(1);
console.log("Removed -- Size: ",list.size());
console.log("was removed ", list.getByPosition(2))
/*LinkedList.prototype.remove = function () {

};*/
