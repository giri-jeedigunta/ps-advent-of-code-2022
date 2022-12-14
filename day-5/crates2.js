/*
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

        [H]         [S]         [D]
    [S] [C]         [C]     [Q] [L]
    [C] [R] [Z]     [R]     [H] [Z]
    [G] [N] [H] [S] [B]     [R] [F]
[D] [T] [Q] [F] [Q] [Z]     [Z] [N]
[Z] [W] [F] [N] [F] [W] [J] [V] [G]
[T] [R] [B] [C] [L] [P] [F] [L] [H]
[H] [Q] [P] [L] [G] [V] [Z] [D] [B]
 1   2   3   4   5   6   7   8   9 



 */
const fs = require("fs");

//  let stacks = [['Z', 'N'], ['M', 'C', 'D'], ['P']];
// Need to figure out a better way to do the below ...
let stacks = [
  ["H", "T", "Z", "D"],
  ["Q", "R", "W", "T", "G", "C", "S"],
  ["P", "B", "F", "Q", "N", "R", "C", "H"],
  ["L", "C", "N", "F", "H", "Z"],
  ["G", "L", "F", "Q", "S"],
  ["V", "P", "W", "Z", "B", "R", "C", "S"],
  ["Z", "F", "J"],
  ["D", "L", "V", "Z", "R", "H", "Q"],
  ["B", "H", "G", "N", "F", "Z", "L", "D"],
];
let message = [];
let tempStack = [];

fs.readFile("input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  const inputString = data.trim().split("\n");
  for (let i = 0; i < inputString.length; i++) {
    let instructions = inputString[i].trim().split(" ");
    let moveItems = parseInt(instructions[1], 10);
    let fromStack = parseInt(instructions[3], 10);
    let toStack = parseInt(instructions[5], 10);
    tempStack = [];
    if (moveItems === 1) {
      let item = stacks[fromStack - 1].pop();
      stacks[toStack - 1].push(item);
    } else {
      for (let j = 0; j < moveItems; j++) {
        let item = stacks[fromStack - 1].pop();
        tempStack.push(item);
      }
      let newStack = stacks[toStack - 1].concat(tempStack.reverse());
      stacks[toStack - 1] = newStack;
    }
  }

  for (let k = 0; k < stacks.length; k++) {
    message.push(stacks[k][stacks[k].length - 1]);
  }
  console.log("FINAL STACK --- ", stacks);
  console.log("message --- ", message.join(""));
});
