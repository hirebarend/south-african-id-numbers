import { checksum, generateRandomNumber } from './functions';

export function generateSouthAfricanIdNumber(
  permanentResident: boolean = true,
): string {
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

  const str: string = `${padding(`${dateOfBirth.getFullYear() % 100}`, '0', 2)}${padding(`${dateOfBirth.getMonth() + 1}`, '0', 2)}${padding(`${dateOfBirth.getDate()}`, '0', 2)}${ssss}${permanentResident ? '0' : '1'}${generateRandomNumber(0, 9)}`;

  const c: string = checksum(str).toString();

  const result: string = `${str}${c}`;

  return result;
}

export function isValid(str: string | null): boolean {
  if (!str) {
    return false;
  }

  const regex: RegExp = new RegExp(
    /^(\d{2})(\d{2})(\d{2})(\d{4})([0-1])\d{2}$/,
  );

  const regExpExecArray: RegExpExecArray | null = regex.exec(str);

  if (!regExpExecArray) {
    return false;
  }

  const month: number = parseInt(regExpExecArray[2]);

  if (month > 12) {
    return false;
  }

  const date: number = parseInt(regExpExecArray[3]);

  const arr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (date > arr[month - 1]) {
    return false;
  }

  const c: number = checksum(str.substring(0, str.length - 1));

  if (parseInt(str[str.length - 1]) !== c) {
    return false;
  }

  return true;
}

function parse(str: string | null): {
  citizen: boolean;
  dateOfBirth: string;
  gender: 'FEMALE' | 'MALE';
  permanentResident: boolean;
} {
  if (!str || !isValid(str)) {
    throw new Error(`invalid ID number: ${str}`);
  }

  const regex: RegExp = new RegExp(
    /^(\d{2})(\d{2})(\d{2})(\d{4})([0-1])\d{2}$/,
  );

  const regExpExecArray: RegExpExecArray | null = regex.exec(str);

  if (!regExpExecArray) {
    throw new Error(`invalid ID number: ${str}`);
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

export const isValidSouthAfricanIdNumber = isValid;

export const parseSouthAfricanIdNumber = parse;

export function SouthAfricanIDNumber(str: string | null) {
  return {
    isValid(): boolean {
      return isValid(str);
    },
    parse(): {
      citizen: boolean;
      dateOfBirth: string;
      gender: 'FEMALE' | 'MALE';
      permanentResident: boolean;
    } {
      return parse(str);
    },
  };
}
