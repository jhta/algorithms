
class QuickUnion {
  constructor(array) {
    this.map = {};
    array.forEach(el => {
      this.map[el] = el;
    });
  }

  root(value) {
    while(value !== this.map[value]) value = this.map[value];
    return value;
  }

  connected = (p, q) => this.map[p] == this.map[q];

  union(p, q) {
    let rp = this.root(p);
    let rq = this.root(q);

    this.map[p] = rq;

  }

  print = () => this.map.toString();
}

var QU = new QuickUnion([1,2,3,4,25,26,27,31]);

console.log(QU.print());
QU.union(1,2);
console.log(QU.connected(1,2));
console.log(QU.connected(1,3));
QU.union(1,3);
console.log(QU.connected(1,3));
