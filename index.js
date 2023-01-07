"use strict";

(() => {
  const reduce = (
    inputArray,
    callback = (previousValue, currentValue, currentIndex, array) => {},
    startValue
  ) => {
    let previousValue = startValue;
    for (let i = 0; i < inputArray.length; i++) {
      const element = inputArray[i];
      previousValue = callback(previousValue, element, i, inputArray);
    }
    return previousValue;
  };

  console.log([1, 2, 3].reduce((acc, value) => acc + value, 0));
  console.log(reduce([1, 2, 3], (acc, value) => acc + value, 0));
})();
