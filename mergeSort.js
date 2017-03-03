

let initial = {
  i: 0,
  j: 0,
  arr: [],
};
const setLeft = ({i, j, arr}, el) => ({
  i: ++i,
  j: j,
  arr: [...arr, el]
});

const setRight = ({i, j, arr}, el) => ({
  i: i,
  j: ++j,
  arr: [...arr, el]
});

const part = (left, right, n) => new Array(n).fill(0)
  .reduce(
    (acc, cur) => left[acc.i] < right[acc.j] ?
      setLeft(acc, left[acc.i])
      :
      setRight(acc, right[acc.j])
  ,
    initial
  ).arr
;


const MAX = Number.MAX_SAFE_INTEGER;
const middle = (n) => Math.floor(n/2);

const mergeSort = (array) => array.length <= 1 ?
      array
     :
      part(
        [
          ...mergeSort(array.slice(0, middle(array.length))),
          MAX
        ],
        [
          ...mergeSort(array.slice(middle(array.length), array.length)),
          MAX
        ],
        array.length
      );

console.log("done: " + mergeSort([4, 8, 1, 5, 2, 3], 0));


