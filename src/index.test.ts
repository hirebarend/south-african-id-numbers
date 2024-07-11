import assert from 'assert';
import {
  isValidSouthAfricanIdNumber,
  parseSouthAfricanIdNumber,
} from './index';
import { checksum } from './functions';

describe('#checksum(str: string): number', () => {
  it('given 1789372997 should return 4', () => {
    assert.equal(checksum('1789372997'), 4);
  });

  it('given 711120790800 should return 3', () => {
    assert.equal(checksum('711120790800'), 3);
  });

  it('given 820118748804 should return 0', () => {
    assert.equal(checksum('820118748804'), 0);
  });
});

describe('#isValidSouthAfricanIdNumber(str: string): boolean', () => {
  it('given a non 13 character numeric input should return false', () => {
    assert.equal(isValidSouthAfricanIdNumber('1234567890'), false);
  });

  it('given a 13 character alphanumeric input should return false', () => {
    assert.equal(isValidSouthAfricanIdNumber('A1B1C1D1E1F1G'), false);
  });

  it('given third last character is not 0 or 1 should return false', () => {
    assert.equal(isValidSouthAfricanIdNumber('7111207908203'), false);
  });

  it('given third last character is 0 should return true', () => {
    assert.equal(isValidSouthAfricanIdNumber('7111207908003'), true);
  });

  it('given third last character is 1 should return true', () => {
    assert.equal(isValidSouthAfricanIdNumber('7111207908102'), true);
  });
});

describe('#parseSouthAfricanIdNumber(str: string): {}', () => {
  it('given 7111207908003', () => {
    assert.deepStrictEqual(parseSouthAfricanIdNumber('7111207908003'), {
      citizen: true,
      dateOfBirth: '1971-11-20',
      gender: 'MALE',
      permanentResident: false,
    });
  });

  it('given 7401308315053', () => {
    assert.deepStrictEqual(parseSouthAfricanIdNumber('7401308315053'), {
      citizen: true,
      dateOfBirth: '1974-01-30',
      gender: 'MALE',
      permanentResident: false,
    });
  });
});
