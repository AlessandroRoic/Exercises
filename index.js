"use strict";

(() => {
  const map = (inputArray, mapFunction) => {
    let copiedArray = inputArray;
    for (let i = 0; i < copiedArray.length; i++) {
      if (typeof inputArray === "string") {
        const value = mapFunction(copiedArray[i], i, inputArray);
        copiedArray =
          copiedArray.substring(0, i) +
          value +
          (i + 1 < inputArray.length ? copiedArray.substring(i + 1) : "");
        continue;
      }
      copiedArray[i] = mapFunction(copiedArray[i], i, inputArray);
    }
    return copiedArray;
  };

  const test = map([1, 2, 3, 4], (x, index, array) => x + index + array.length);
  const test2 = map("this is a test", (x) => (x === " " ? "" : x));
  console.log({ test, test2 });
})();
