const fs = require("fs");
const { totalmem } = require("os");
const readline = require("readline");
const { json } = require("stream/consumers");

const filePath = "example.txt";

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
  let replaced;
  do {
    replaced = false;
    for (let i = 0; i < numberWords.length; i++) {
      const numberWord = numberWords[i];
      const numberRegex = new RegExp(`${numberWord}`, "i");
      if (numberRegex.test(line)) {
        line = line.replace(numberRegex, i.toString());
        replaced = true;
        break;
      }
    }
  } while (replaced);

  console.log(line);

  const numberChar = line.match(/\d/g);
  let number = 0;
  if (numberChar) {
    number = parseInt(numberChar.join(""));
  }

  total += number;
});

readInterface.on("close", function () {
  console.log(total);
});
