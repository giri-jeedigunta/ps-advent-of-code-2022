fs = require('fs')
let counter = 0;
let counter1 = 0;

fs.readFile('input.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  
  const inputString = data.trim().split("\n");
  for(let i = 0; i < inputString.length; i++) {

    let pairSplit = inputString[i].split(",");
    let leftStart = parseInt(pairSplit[0].split("-")[0])
    let leftEnd = parseInt(pairSplit[0].split("-")[1])
    let rightStart = parseInt(pairSplit[1].split("-")[0])
    let rightEnd = parseInt(pairSplit[1].split("-")[1])

    if((rightStart >= leftStart && rightEnd <= leftEnd) || (leftStart >= rightStart && leftEnd <= rightEnd)) {
        counter = counter+=1;
    }

    if((leftEnd >= rightStart && leftEnd <= rightEnd) || (rightEnd >= leftStart && rightEnd <= leftEnd)) {
      counter1 = counter1+=1;
      
  }    
  }

  console.log('counter --- ', counter);
  console.log('counter1--- --- ', counter1);

});