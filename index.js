'use strict';

(() => {
  const mergeSort = (array, compareFn) => {
    const length = array.length;
    if (length === 1) return array;
    const middle = Math.floor(length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return merge(mergeSort(left, compareFn), mergeSort(right, compareFn), compareFn);
  };

  const merge = (left, right, compareFn) => {
    let sortedArray = [];
    while (left.length && right.length) {
      if (compareFn(left[0], right[0]) > 0) {
        sortedArray.push(right.shift());
      } else {
        sortedArray.push(left.shift());
      }
    }
    return [...sortedArray, ...left, ...right];
  };

  console.log([3, 5, 7, 12, 1, 6].sort((a, b) => a - b));
  console.log(mergeSort([3, 5, 7, 12, 1, 6], (a, b) => a - b));
  console.log(['a', 'f', 'ciao', 'c', 'x', 't'].sort((a, b) => a.localeCompare(b)));
  console.log(mergeSort(['a', 'f', 'ciao', 'c', 'x', 't'], (a, b) => a.localeCompare(b)));
})();
