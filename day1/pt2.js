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

changeLine = (line) => {
  line = line.replaceAll("one", "o1ne");
  line = line.replaceAll("two", "t2wo");
  line = line.replaceAll("three", "t3hree");
  line = line.replaceAll("four", "f4our");
  line = line.replaceAll("five", "f5ive");
  line = line.replaceAll("six", "s6ix");
  line = line.replaceAll("seven", "s7even");
  line = line.replaceAll("eight", "e8ight");
  line = line.replaceAll("nine", "n9ine");
  return line;
};

readInterface.on("line", function (line) {
  line = changeLine(line);
  console.log(line);
  const numberChar = line.match(/\d/g);
  let number = parseInt(numberChar[0] + numberChar[0]);
  if (numberChar.length > 1) {
    number = parseInt(numberChar[0] + numberChar[numberChar.length - 1]);
  }
  total += number;
});

readInterface.on("close", function () {
  console.log(total);
});
