import assert from 'assert';
import { SouthAfricanIDNumber } from './index';
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

describe('#isValid(): boolean', () => {
  it('given a non 13 character numeric input should return false', () => {
    assert.equal(SouthAfricanIDNumber('1234567890').isValid(), false);
  });

  it('given a 13 character alphanumeric input should return false', () => {
    assert.equal(SouthAfricanIDNumber('A1B1C1D1E1F1G').isValid(), false);
  });

  it('given third last character is not 0 or 1 should return false', () => {
    assert.equal(SouthAfricanIDNumber('7111207908203').isValid(), false);
  });

  it('given invalid month input should return false', () => {
    assert.equal(SouthAfricanIDNumber('7115207908004').isValid(), false);
  });

  it('given invalid day input should return false', () => {
    assert.equal(SouthAfricanIDNumber('7111507908000').isValid(), false);
  });

  it('given third last character is 0 should return true', () => {
    assert.equal(SouthAfricanIDNumber('7111207908003').isValid(), true);
  });

  it('given third last character is 1 should return true', () => {
    assert.equal(SouthAfricanIDNumber('7111207908102').isValid(), true);
  });
});

describe('#parse(): {}', () => {
  it('given 7111207908003', () => {
    assert.deepStrictEqual(SouthAfricanIDNumber('7111207908003').parse(), {
      citizen: true,
      dateOfBirth: '1971-11-20',
      gender: 'MALE',
      permanentResident: false,
    });
  });

  it('given 7401308315053', () => {
    assert.deepStrictEqual(SouthAfricanIDNumber('7401308315053').parse(), {
      citizen: true,
      dateOfBirth: '1974-01-30',
      gender: 'MALE',
      permanentResident: false,
    });
  });
});
