const fs = require("fs");
const { totalmem } = require("os");
const readline = require("readline");
const { json } = require("stream/consumers");

const filePath = "input.txt";

const readInterface = readline.createInterface({
  input: fs.createReadStream(filePath),
  console: false,
});

let total = 0;

readInterface.on("line", function (line) {
  const numberWords = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < line.length; i++) {
    for (let j = 0; j < numberWords.length; j++) {
      if (line.substring(0, i).includes(numberWords[j])) {
        line = line.replace(numberWords[j], j.toString());
      }
    }
  }
  for (let k = line.length - 1; k >= 0; k--) {
    for (let l = 0; l < numberWords.length; l++) {
      if (line.substring(k).includes(numberWords[l])) {
        line = line.replace(numberWords[l], l.toString());
      }
    }
  }
  console.log(line);
  const numberChars = Array.from(line.matchAll(/\d/g));
  let firstNumber = 0;
  let lastNumber = 0;

  if (numberChars.length > 1) {
    firstNumber = parseInt(numberChars[0]);
    lastNumber = parseInt(numberChars[numberChars.length - 1]);
    total += firstNumber * 10 + lastNumber;
  }
  if (numberChars.length === 1) {
    firstNumber = parseInt(numberChars[0] + numberChars[0]);
    total += firstNumber;
  }
  console.log(numberChars);
  console.log(firstNumber, lastNumber);
});

readInterface.on("close", function () {
  console.log(total);
});
