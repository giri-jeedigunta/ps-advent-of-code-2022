fs = require('fs')
let counter = 0;

fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  
  const eachline = data.trim().split("\n");
  for(let i = 0; i < eachline.length; i++) {

    console.log('eachline[i] --  ', i, eachline[i]);
    let pairSplit = eachline[i].split(",");
    let leftStart = parseInt(pairSplit[0].split("-")[0])
    let leftEnd = parseInt(pairSplit[0].split("-")[1])
    let rightStart = parseInt(pairSplit[1].split("-")[0])
    let rightEnd = parseInt(pairSplit[1].split("-")[1])

    if((rightStart >= leftStart && rightEnd <= leftEnd) || (leftStart >= rightStart && leftEnd <= rightEnd)) {
        counter = counter+=1;
    }
  }

});