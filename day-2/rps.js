const fs = require("fs");
// Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock
const rpsScores1 = {
    'A X': 4,
    'A Y': 8,
    'A Z': 3,
    'B X': 1,
    'B Y': 5,
    'B Z': 9,
    'C X': 7,
    'C Y': 2,
    'C Z': 6,
};

/*
"Anyway, the second column says how the round needs to end: X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win. Good luck!"
*/ 
const rpsScores2 = {
    'A X': 3, //0 + 3
    'A Y': 4, //3 + 1
    'A Z': 8, //6 + 2 = 8 
    'B X': 1, //0 + 1
    'B Y': 5, //3 + 2
    'B Z': 9, //6 + 3 
    'C X': 2, //0 + 2
    'C Y': 6, //3 + 3
    'C Z': 7, //6 + 1
}

let rps1Score = 0;
let rps2Score = 0;


fs.readFile("input.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
  
    const inputString = data.trim().split("\n");
    for (let i = 0; i < inputString.length; i++) {
        rps1Score += rpsScores1[inputString[i]]
        rps2Score += rpsScores2[inputString[i]]
    }
    console.log('roundScore --- ', rps1Score);
    console.log('roundScore --- ', rps2Score);
})