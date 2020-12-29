"use strict";

var numbers = [23, 4, 7, 9, 3, 18, 8];
var changeNumbers = numbers.map(function (number) {
  return number * 10;
});
console.log("Numbers [".concat(numbers, "]"));
console.log("ChangeNumbers [".concat(changeNumbers, "]"));