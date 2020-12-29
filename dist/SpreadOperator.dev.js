"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var mobilTeam = ["Talha", "Burcu"];
var webTeam = ["Emine", "Zehra"];
var iosTeam = ["Sümeyye", "Ahmet", "Mehmet"];
var allDeveloper = [].concat(mobilTeam, iosTeam, webTeam); //[ 'Talha', 'Burcu', 'Sümeyye', 'Ahmet', 'Emine', 'Zehra' ]

var allDeveloperV2 = [mobilTeam, iosTeam, webTeam]; // [ [ 'Talha', 'Burcu' ], [ 'Sümeyye', 'Ahmet' ], [ 'Emine', 'Zehra' ] ]
//console.log(allDeveloper);

var composedTeam = function composedTeam(allDeveloper) {
  // Burada ise gelen verinin içinde değeri yoksa bunu diziye ekliyor 
  if (allDeveloper.indexOf("Kısa") < 0) {
    return [].concat(_toConsumableArray(allDeveloper), ["Kısa"]);
  }

  return allDeveloper;
};

console.log(composedTeam(allDeveloper));