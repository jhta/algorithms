
class QuickUnionW {
  constructor(array) {
    this.map = {};
    this.mapSizes = {}:
    array.forEach(el => {
      this.map[el] = el;
      this.mapSizes[el] = 1;
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
    if (this.mapSizes[rp] < this.mapSizes[q]) {
      this.map[p] = rq;
      this.mapSizes[rq] = this.mapSizes[rp] + this.mapSizes[rp];
    } else {
      this.map[q] = rp;
      this.mapSizes[rp] = this.mapSizes[rp] + this.mapSizes[rp];
    }
  }

  print = () => this.map.toString();
}

var QU = new QuickUnionW([1,2,3,4,25,26,27,31]);

console.log(QU.print());
QU.union(1,2);
console.log(QU.connected(1,2));
console.log(QU.connected(1,3));
QU.union(1,3);
console.log(QU.connected(1,3));
