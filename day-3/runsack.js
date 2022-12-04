const fs = require("fs");

let count = 0;

const lowerCaseLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const upperCaseLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

fs.readFile("input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  const inputString = data.trim().split("\n");
  for (let i = 0; i < inputString.length; i++) {

    let expression = ".{1," + inputString[i].length / 2 + "}";
    const regex = new RegExp(expression, "g");

    const allParts = inputString[i].match(regex);
    const secondPart = allParts[1].split("");

    for (let j = 0; j < secondPart.length; j++) {
      if (allParts[0].indexOf(secondPart[j]) !== -1) {
        const matchedLetter =
          allParts[0][allParts[0].indexOf(secondPart[j])];
        if(lowerCaseLetters.indexOf(matchedLetter) !== -1) {
            count = count += parseInt(1 + lowerCaseLetters.indexOf(matchedLetter));
        } else {
            count = count += parseInt(27 + upperCaseLetters.indexOf(matchedLetter));
        }

        console.log('Count -- ', count);
        
        break;
      }
    }
  }
});
