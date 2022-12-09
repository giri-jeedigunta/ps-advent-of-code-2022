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

let group = [];
let groupCount = 0;

fs.readFile("input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  const inputString = data.trim().split("\n");
  for (let i = 0; i <= inputString.length - 3; i+=3) {
    group = [];
    let groupLen = i + 3;
    groupCount += 1;
    for (let k = i; k < groupLen; k++) {
      group.push(inputString[k]);
    }
    console.log('Group - ', group);
    for (let j = 0; j < group[1].length; j++) {
      if (group[0].indexOf(group[1][j]) !== -1) {
        const matchedLetter = group[0][group[0].indexOf(group[1][j])];
        if (group[2].indexOf(matchedLetter) !== -1) {
          console.log('MatchedLetter ---- ', matchedLetter);
          if (lowerCaseLetters.indexOf(matchedLetter) !== -1) {
            count = count += parseInt(
              1 + lowerCaseLetters.indexOf(matchedLetter)
            );
          } else {
            count = count += parseInt(
              27 + upperCaseLetters.indexOf(matchedLetter)
            );
          }
        console.log("Count -- ", count);

        break;          
        }
      }
    }
  }
});
