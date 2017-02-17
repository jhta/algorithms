// Complex N

class QuickFind {
 constructor(array) {
   this.ids = array.map((el, i) => i);
   this.array = array;
 }
​
 print = () => this.ids.toString();
​
 find = p => this.array.some(el => p === el);
​
 connected = (p, q) => {
   let pi = this.ids[this.array.indexOf(p)];
   let qi = this.ids[this.array.indexOf(q)];
   return pi === qi;
 }

 union(p, q) {
   if (this.connected(p, q)) return;
   let pi = this.ids[this.array.indexOf(p)];
   let qi = this.ids[this.array.indexOf(q)];
   this.ids.forEach((id, i) => {
     if (this.ids[i] === pi) this.ids[i] = qi;
   });
 }
}
​
var arr = [7,2,8,9,1,3,4];
var UF1 = new QuickFind(arr);
console.log(UF1.print());
UF1.union(1,2);
UF1.union(2,3);
UF1.union(7,8);
UF1.union(8,9);
​
console.log(UF1.connected(1,2));
console.log(UF1.connected(2,4));
console.log(UF1.connected(7,9));
