# Arrays

## Awesome methods for language

### Javascript

####Reduce
iterate array and accumulate a value based on a provided method.

Params: method, initial_value
````javascript

// Example 1: summatory
var initialValue = 0;
var array = [1,2,3,4,5];

var sum = array.reduce((accumulator, current, index) => {
  return accumulator +  current;
}, initialValue); // Return 15

// Example 2
var x = [1, 5, 7, 2].reduce((acc, cur, i) => {
  if (cur < 5) return acc;
  return acc.push(cur * 2);
}) // return [10, 14]

// this is the same but use 2 iterations
var y = [1, 5, 7, 2]
  .filter((el) => el >= 5)
  .map(el => el * 2); // return [10, 14]

````

####Every
Iterate array and return true if all the element meet a condition based on a method provided

````javascript
[1, 7, 8, 9].every((element, index, array) => (element > 5)); // false. 1 < 5

[1, 7, 8, 9].every((element, index, array) => (element < 10));
````

####Find
Iterate array and return the element that comply the condition based on method provided

````javascript
[1, 2, 3, 12].find((element, index, array) => element > 10); // 12
````

####Some
if only one element comply the condition then return true
````javascript
[1, 2, 3, 12].some((element, index, array) => element > 10); // true
````

####Sort
short elements in array. This can be used based on method too.
````javascript
[4, 1, 8, 2].sort(); // [1, 2, 4, 8]

[4, 1, 8, 2].sort((a, b) => a - b); //  [1, 2, 4, 8]

[4, 1, 8, 2].sort((a, b) => b - a); //  [8, 4, 2, 1]
````

####Join
Join the elements in a string
````javascript
[1, 2, 3, 12].join(); // "12312"
[1, 2, 3, 12].join("-"); // "1-2-3-12"
````

####More

````javascript
var arr = [1, 2, 3];
var arr2 = ["a", "b" , "c"];
arr.concat(arr2); // [1, 2, 3, "a", "b" , "c"]
arr.reverse() // [3,2,1]
var x = arr.shift() // x = 1  arr = [2, 3]
arr.unshift([4,5]) // arr [4, 5, 1, 2, 3]
[1, 2, 3, 12].join("-"); // "1-2-3-12"
arr.includes(2) // true
var arr3 = arr2.slice(0, 2) // ["c"]
````
