"use strict";

var initValue = 10;

var numberFunc = function numberFunc() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  /*  console.log(numbers);
  !  numbers gelen datalarımızı alıyoruz.
  !  gelen datalarımızı reduce ile toplayoruz ve bir başlangıç değeri koyduk bunun üstüne topluyor.
  */
  var sumNumbers = numbers.reduce(function (sumNumbers, number) {
    return sumNumbers + number;
  }, initValue);
  return sumNumbers;
};

console.log(numberFunc(1, 5, 9));