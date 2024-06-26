import {
  generateSouthAfricanIdNumber,
  isValidSouthAfricanIdNumber,
  parseSouthAfricanIdNumber,
} from '.';

const str: string = generateSouthAfricanIdNumber();

console.log(str);

console.log(isValidSouthAfricanIdNumber(str));

console.log(JSON.stringify(parseSouthAfricanIdNumber(str)));
