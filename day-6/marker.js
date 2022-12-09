const fs = require("fs");

let stack = [];

fs.readFile("input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  const inputString = data.trim().split("");
  console.log(inputString.length);
  loop1: for (let i = 0; i < inputString.length; i++) {
    let jlen = i + 4;
    stack = [];
    for (let j = i; j < jlen; j++) {
      if (stack.indexOf(inputString[j]) === -1) {
        stack.push(inputString[j]);
        if (stack.length === 14) {
          console.log("stack - ", stack);
          console.log("marker >>> ", j + 1);
          break loop1;
        }
      }
    }
  }
});
