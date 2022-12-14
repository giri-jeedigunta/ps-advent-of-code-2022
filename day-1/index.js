const fs = require("fs");

const totals = [];
let totalsSorted = [];
let topThreeCount = 0;

fs.readFile("input.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  }

  const inputString = data.split("\n\n");
  for (let i = 0; i < inputString.length; i++) {
    const group = inputString[i].split('\n');
    totals.push(group.reduce(function(a, b) { return parseInt(a, 10) + parseInt(b, 10); }, 0));
    totalsSorted = totals.sort((a, b) => a - b)
    console.log('totals sorted --- ', totalsSorted[totalsSorted.length-1]);
  }

  for(let j = 3; j > 0; j--) {
    topThreeCount += totalsSorted[totalsSorted.length-j];
  }

  console.log('topThreeCount --- ', topThreeCount);
});
