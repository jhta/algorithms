
/**
 * QuickUnion Class
 * @param {Array} array element list
 */
function QuickUnion(array) {
  // constructor, fill the map
  this.map = {};
  this.mapSize = {};
  array.forEach(el => {
    this.map[el] = {
      root: el,
      treeSize: 1
    };
  });
}

QuickUnion.prototype.connected = function (el1, el2) {
  // if have the same root, they are connected
  return this.map[el1].root === this.map[el2].root;
};

QuickUnion.prototype.root = function (el) {
  // while the element is not the root
  while (el !== this.map[el].root) {
    el = this.map[el].root;
  }
  // return root (element with the same root)
  return el;
}

QuickUnion.prototype.union = function (el1, el2) {
  var root1 = this.root(el1);
  var root2 = this.root(el2);
  // do root the most big tree
  if (this.map[root1].treeSize < this.map[root2].treeSize) {
    this.map[root1].root = root2;
    this.map[root2].treeSize = this.map[root2].treeSize + this.map[root1].treeSize;
  } else {
    this.map[root2].root = root1;
    this.map[root1].treeSize = this.map[root2].treeSize + this.map[root1].treeSize;
  }
}


/**
 * Social Network class
 * @param {Array} arr array of persons
 */
function SocialNetwork(arr) {
  this.QU = new QuickUnion(arr);
  console.log("social network created");
}

SocialNetwork.prototype.doFriends = function (person1, person2) {
  this.QU.union(person1, person2);
  console.log(person1 + " and " + person2 + " are friends now.");
}

SocialNetwork.prototype.areConnected = function (person1, person2) {
  var areConnect =  this.QU.connected(person1, person2);
  if (areConnect) {
    console.log(person1 + " and " + person2 + " are connected");
  } else {
    console.log(person1 + " and " + person2 + " aren't connected");
  }
}




var people = ["juan", "carl", "lau", "cami", "jose", "david"];
var SN = new SocialNetwork(people);
SN.doFriends("juan", "carl");
SN.doFriends("juan", "lau");
SN.areConnected("carl", "lau");
SN.doFriends("cami", "jose");
SN.areConnected("cami", "lau");
