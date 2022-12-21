import * as fs from 'fs';
import csv from 'csvtojson';
import * as url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const handleError = function (err) {
  console.log(err);
}

const writeSteam = fs.createWriteStream(__dirname + '/text/text.txt');
const csvStream = fs.createReadStream(__dirname + '/csv/nodejs-hw1-ex1.csv');

csvStream
  .pipe(csv())
  .on('data', data => writeSteam.write(data))
  .on("error", handleError)