import { checksum, generateRandomNumber } from './functions';

export function generate(): string {
  const timestamp: number = new Date().getTime();

  const dateOfBirth: Date = new Date(
    generateRandomNumber(
      timestamp - 31536000000 * 80,
      timestamp - 31536000000 * 1,
    ),
  );

  const padding = (str: string, c: string, n: number) =>
    `${new Array(n - str.length).fill(c).join('')}${str}`;

  const ssss: string = `${generateRandomNumber(1000, 9999)}`;

  const str: string = `${dateOfBirth.getFullYear() % 100}${padding(`${dateOfBirth.getMonth() + 1}`, '0', 2)}${dateOfBirth.getDate()}${ssss}0${generateRandomNumber(0, 9)}`;

  return `${str}${checksum(str)}`;
}

export function parse(str: string | null): {
  citizen: boolean;
  dateOfBirth: string;
  gender: 'FEMALE' | 'MALE';
  permanentResident: boolean;
} {
  if (!str) {
    throw new Error('invalid str');
  }

  const regex: RegExp = new RegExp(
    /^(\d{2})(\d{2})(\d{2})(\d{4})([0-1])\d{2}$/,
  );

  const regExpExecArray: RegExpExecArray | null = regex.exec(str);

  if (!regExpExecArray) {
    throw new Error('invalid str');
  }

  const century: number = Math.floor(new Date().getUTCFullYear() / 100) * 100;

  const year: number =
    century + parseInt(regExpExecArray[1]) > new Date().getUTCFullYear()
      ? century - 100 + parseInt(regExpExecArray[1])
      : century + parseInt(regExpExecArray[1]);

  return {
    citizen: regExpExecArray[5] === '0',
    dateOfBirth: `${year}-${regExpExecArray[2]}-${regExpExecArray[3]}`,
    gender: parseInt(regExpExecArray[4]) < 5000 ? 'FEMALE' : 'MALE',
    permanentResident: regExpExecArray[5] === '1',
  };
}

export function validate(str: string | null): boolean {
  if (!str) {
    return false;
  }

  if (!str.match(/^\d{10}[0-1]\d{2}$/)) {
    return false;
  }

  if (
    parseInt(str[str.length - 1]) !== checksum(str.substring(0, str.length - 1))
  ) {
    return false;
  }

  return true;
}
