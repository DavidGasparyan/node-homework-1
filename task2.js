const csv = require('csvtojson');
const fs = require('fs');

const handleError = function (err) {
  console.log(err);
}

const writeSteam = fs.createWriteStream(__dirname + '/text/text.txt');
const csvStream = fs.createReadStream(__dirname + '/csv/nodejs-hw1-ex1.csv');

csvStream
  .pipe(csv())
  .on('data', data => writeSteam.write(data))
  .on("error", handleError)