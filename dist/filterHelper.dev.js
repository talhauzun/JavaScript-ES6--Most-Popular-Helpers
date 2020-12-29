"use strict";

var developers = [{
  name: "Talha Uzun",
  language: "React Js",
  yearsExp: 2,
  hourly: 15
}, {
  name: "Burcu Ayaz",
  language: "Asp.net Core",
  yearsExp: 4,
  hourly: 12
}, {
  name: "Emine kübra uzun",
  language: "python",
  yearsExp: 1,
  hourly: 10
}, {
  name: "zehra Uzun",
  language: "React Js",
  yearsExp: 1,
  hourly: 10
}];
var users = developers.filter(function (developer) {
  return developer.language === "React Js";
});
var usersV2 = developers.filter(function (developer) {
  return developer.language === "React Js" && developer.yearsExp === 1;
});
var developersObjectLanguageArray = [{
  name: "Talha Uzun",
  language: ["React Js", "Angular"],
  yearsExp: 2,
  hourly: 15
}, {
  name: "Burcu Ayaz",
  language: ["React Js", "Asp.net Core"],
  yearsExp: 4,
  hourly: 12
}, {
  name: "Emine kübra uzun",
  language: ["python"],
  yearsExp: 1,
  hourly: 10
}, {
  name: "zehra Uzun",
  language: ["React Native"],
  yearsExp: 1,
  hourly: 10
}];
var userObject = developersObjectLanguageArray.filter(function (developer) {
  return developer.language.find(function (x) {
    return x === "React Js";
  });
});
console.log(userObject);