import { generateSouthAfricanIdNumber, isValidSouthAfricanIdNumber } from '.';

for (let i = 0; i < 10_000_000; i++) {
  const str: string = generateSouthAfricanIdNumber();

  if (!isValidSouthAfricanIdNumber(str)) {
    throw new Error(`invalid: ${str}`);
  }
}
