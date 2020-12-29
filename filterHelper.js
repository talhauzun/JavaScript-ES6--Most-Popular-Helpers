const developers = [
  { name: "Talha Uzun", language: "React Js", yearsExp: 2, hourly: 15 },
  { name: "Burcu Ayaz", language: "Asp.net Core", yearsExp: 4, hourly: 12 },
  { name: "Emine kübra uzun", language: "python", yearsExp: 1, hourly: 10 },
  { name: "zehra Uzun", language: "React Js", yearsExp: 1, hourly: 10 },
];

const users = developers.filter(
  (developer) => developer.language === "React Js"
);
const usersV2 = developers.filter(
  (developer) => developer.language === "React Js" && developer.yearsExp === 1
);

const developersObjectLanguageArray = [
  {
    name: "Talha Uzun",
    language: ["React Js", "Angular"],
    yearsExp: 2,
    hourly: 15,
  },
  {
    name: "Burcu Ayaz",
    language: ["React Js", "Asp.net Core"],
    yearsExp: 4,
    hourly: 12,
  },
  { name: "Emine kübra uzun", language: ["python"], yearsExp: 1, hourly: 10 },
  { name: "zehra Uzun", language: ["React Native"], yearsExp: 1, hourly: 10 },
];

const userObject = developersObjectLanguageArray.filter((developer) =>
  developer.language.find((x) => x === "React Js")
);
console.log(userObject);
