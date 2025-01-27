<h3 align="center">South African ID Numbers</h3>

<p align="center">
    A library for parsing, validating and formatting South African ID numbers
    <br />
    <a href="https://www.npmjs.com/package/south-african-id-numbers"><strong>Learn more »</strong></a>
    <br />
    <br />
    <a href="#introduction"><strong>Introduction</strong></a> ·
    <a href="#installation"><strong>Installation</strong></a> ·
    <a href="#usage"><strong>Usage</strong></a> ·
    <a href="#contributing"><strong>Contributing</strong></a>
</p>

<p align="center">
  <a href="https://github.com/hirebarend/south-african-id-numbers/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/hirebarend/south-african-id-numbers?label=license&logo=github&color=f80&logoColor=fff" alt="License" />
  </a>
</p>

<br/>

## Introduction

A library for parsing, validating and formatting South African ID numbers

## Installation

```bash
npm install south-african-id-numbers
```

## Usage

```typescript
import { SouthAfricanIDNumber } from 'south-african-id-numbers';

const x = SouthAfricanIDNumber('8609197052053');

console.log(x.parse()); // { "citizen":true,"dateOfBirth":"1986-09-19","gender":"MALE","permanentResident":false }

console.log(x.isValid()); // true
```

## Decoding a South African ID number

A South African ID number is a 13-digit number which is defined by the following format: YYMMDDSSSSCAZ.

- The first 6 digits (YYMMDD) are based on your date of birth. 20 February 1992 is displayed as 920220.
- The next 4 digits (SSSS) are used to define your gender. Females are assigned numbers in the range 0000-4999 and males from 5000-9999.
- The next digit (C) shows if you're an SA citizen status with 0 denoting that you were born a SA citizen and 1 denoting that you're a permanent resident.
- The last digit (Z) is a checksum digit – used to check that the number sequence is accurate using a set formula called the [Luhn algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm).

## Contributing

We love our contributors! Here's how you can contribute:

- [Open an issue](https://github.com/hirebarend/south-african-id-numbers/issues) if you believe you've encountered a bug.
- Make a [pull request](https://github.com/hirebarend/south-african-id-numbers/pull) to add new features/make quality-of-life improvements/fix bugs.

<br />

<a href="https://github.com/hirebarend/lnkbrd/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=hirebarend/lnkbrd&v=1" />
</a>

## Repo Activity

![Alt](https://repobeats.axiom.co/api/embed/616bc192c7db2f2af8549094bc3a801da418e8a8.svg "Repobeats analytics image")

## License

Inspired by [Plausible](https://plausible.io/), South African ID Numbers is open-source under the MIT License. You can [find it here](https://github.com/hirebarend/south-african-id-numbers/blob/main/LICENSE).