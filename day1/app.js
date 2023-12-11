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
  const numberChar = line.match(/\d/g);
  let number = parseInt(numberChar[0] + numberChar[0]);
  if (numberChar.length > 1) {
    console.log("number is 2 digits");
    number = parseInt(numberChar[0] + numberChar[numberChar.length - 1]);
  }
  total += number;
});

readInterface.on("close", function () {
  console.log(total);
});
