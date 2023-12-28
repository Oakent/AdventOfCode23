const fs = require("fs");
const { totalmem } = require("os");
const readline = require("readline");
const { json } = require("stream/consumers");
let powerSum = 0;

const filePath = "input.txt";
const readInterface = readline.createInterface({
  input: fs.createReadStream(filePath),
  console: false,
});

checkLarger = (num1, num2) => {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

readInterface.on("line", function (line) {
  const game = line.split(":");
  const gameData = game[1].split(";");
  const gameNum = game[0].split(" ")[1];
  let red = 0;
  let green = 0;
  let blue = 0;
  for (let i = 0; i < gameData.length; i++) {
    const data = gameData[i].split(",");
    console.log(data);
    for (let j = 0; j < data.length; j++) {
      if (data[j].substring(data[j].length - 1) == "d") {
        red = checkLarger(red, parseInt(data[j]));
        console.log(red);
      }
      if (data[j].substring(data[j].length - 1) == "n") {
        green = checkLarger(green, parseInt(data[j]));
        console.log("green");
        console.log(green);
      }
      if (data[j].substring(data[j].length - 1) == "e") {
        blue = checkLarger(blue, parseInt(data[j]));
        console.log("blue");
        console.log(blue);
      }
    }
  }
  powerSum += red * green * blue;
});

readInterface.on("close", function () {
  console.log(powerSum);
});
