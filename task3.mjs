// csv packages does not support and ES6 modules syntax
const csv = require('csvtojson');
import * as fs from 'fs';

const handleError = function (err) {
  console.log(err);
}

const writeSteam = fs.createWriteStream(__dirname + '/text/text.txt');
const csvStream = fs.createReadStream(__dirname + '/csv/nodejs-hw1-ex1.csv');

csvStream
  .pipe(csv())
  .on('data', data => writeSteam.write(data))
  .on("error", handleError)