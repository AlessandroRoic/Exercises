'use strict';

(() => {
  const test1 = [1,2,3,4];

  const customFilter = (array, callBack) => {
    let filteredArray = [];
    for (let i = 0; i < array.length; i ++) {
      if (!callBack(array[i], i, array)) continue;
      filteredArray.push(array[i])
    }
    return filteredArray;
  }

  console.log(test1.filter((value) => value === 3))
  console.log(customFilter(test1, (value) => value === 3))
  console.log(test1.filter((value) => value > 1))
  console.log(customFilter(test1, (value) => value > 1))
  console.log(['1', 2, '3', 13432].filter((v) => typeof v === 'string'))
  console.log(customFilter(['1', 2, '3', 13432],((v) => typeof v === 'string')))
})();
