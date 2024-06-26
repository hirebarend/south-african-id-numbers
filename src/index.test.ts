import assert from 'assert';
import { parse, validate } from './index';
import { checksum } from './functions';

describe('#checksum(str: string): number', () => {
  it('given 1789372997 should return 4', () => {
    assert.equal(checksum('1789372997'), 4);
  });

  it('given 711120790800 should return 3', () => {
    assert.equal(checksum('711120790800'), 3);
  });
});

describe('#parse(str: string)', () => {
  it('given 7111207908003', () => {
    assert.deepStrictEqual(parse('7111207908003'), {
      citizen: true,
      dateOfBirth: '1971-11-20',
      gender: 'MALE',
      permanentResident: false,
    });
  });

  it('given 7401308315053', () => {
    assert.deepStrictEqual(parse('7401308315053'), {
      citizen: true,
      dateOfBirth: '1974-01-30',
      gender: 'MALE',
      permanentResident: false,
    });
  });
});

describe('#validate(str: string): boolean', () => {
  it('given a non 13 digit numeric should return false', () => {
    assert.equal(validate('1234567890'), false);
  });

  it('given a 13 digit alphanumeric should return false', () => {
    assert.equal(validate('A1B1C1D1E1F1G'), false);
  });

  it('given third last digit is not 0 or 1 should return false', () => {
    assert.equal(validate('7111207908203'), false);
  });

  it('given third last digit is 0 should return true', () => {
    assert.equal(validate('7111207908003'), true);
  });

  it('given third last digit is 1 should return true', () => {
    assert.equal(validate('7111207908102'), true);
  });
});
