"use strict";

var numbers = [175, 50, 25];
var sumNumbers = numbers.reduce(function (sumNumbers, number) {
  return sumNumbers + number;
});
console.log("Sum Numbers =", sumNumbers);