'use strict';
// Write a Javascript function to count all the 1 bits in a byte. For example, if we have a variable
// with a value of 255, the countBits function would return 8 (since 255 is 11111111 in binary).
function countOneBits(number) {
  let count = 0;
  while (number > 0) {
    count += number & 1;
    number >>= 1;
  }
  return count;
}

console.log(countOneBits(255))
