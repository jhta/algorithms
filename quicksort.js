const quicksort = ([pivot, ...arr]) => !pivot ?
  []
  :
  quicksort(arr.filter(item => item < pivot))
    .concat([pivot])
    .concat(
      quicksort(arr.filter(item => item >= pivot))
    );

console.log(quicksort([4,7,1,8,2,3]));

