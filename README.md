# South African ID Numbers

A library for parsing, validating and formatting South African ID numbers

## Installation

```bash
npm install south-african-id-numbers
```

## Usage

```typescript
import { parseSouthAfricanIdNumber, isValidSouthAfricanIdNumber } from 'south-african-id-numbers';

console.log(parseSouthAfricanIdNumber('8609197052053')); // { "citizen":true,"dateOfBirth":"1986-09-19","gender":"MALE","permanentResident":false }

console.log(isValidSouthAfricanIdNumber('8609197052053')); // true
```

## Decoding a South African ID number

A South African ID number is a 13-digit number which is defined by the following format: YYMMDDSSSSCAZ.

- The first 6 digits (YYMMDD) are based on your date of birth. 20 February 1992 is displayed as 920220.
- The next 4 digits (SSSS) are used to define your gender.  Females are assigned numbers in the range 0000-4999 and males from 5000-9999.
- The next digit (C) shows if you're an SA citizen status with 0 denoting that you were born a SA citizen and 1 denoting that you're a permanent resident.
- The last digit (Z) is a checksum digit – used to check that the number sequence is accurate using a set formula called the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).

## Contributing

We love our contributors! Here's how you can contribute:

- [Open an issue](https://github.com/talentedengineers/react-knowledge-base/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/talentedengineers/react-knowledge-base/pull) to add new features/make quality-of-life improvements/fix bugs.