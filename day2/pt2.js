const fs = require("fs");
const { totalmem } = require("os");
const readline = require("readline");
const { json } = require("stream/consumers");

const filePath = "input.txt";
let idSum = 0;
const redTotal = 12;
const greenTotal = 13;
const blueTotal = 14;
const readInterface = readline.createInterface({
  input: fs.createReadStream(filePath),
  console: false,
});

readInterface.on("line", function (line) {
  const game = line.split(":");
  const gameData = game[1].split(";");
  const gameNum = game[0].split(" ")[1];
  let valid = true;
  for (let i = 0; i < gameData.length; i++) {
    const data = gameData[i].split(",");
    let red = 0;
    let green = 0;
    let blue = 0;
    console.log(data);
    for (let j = 0; j < data.length; j++) {
      if (data[j].substring(data[j].length - 1) == "d") {
        red += parseInt(data[j]);
        console.log("red");
        console.log(red);
      }
      if (data[j].substring(data[j].length - 1) == "n") {
        green += parseInt(data[j]);
        console.log("green");
        console.log(green);
      }
      if (data[j].substring(data[j].length - 1) == "e") {
        blue += parseInt(data[j]);
        console.log("blue");
        console.log(blue);
      }
      if (red > redTotal || green > greenTotal || blue > blueTotal) {
        valid = false;
      }
    }
  }
  if (valid) {
    idSum += parseInt(gameNum);
  }
});

readInterface.on("close", function () {
  console.log(idSum);
});
