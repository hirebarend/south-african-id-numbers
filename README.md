# South African ID Numbers

A library for parsing, validating and formatting South African ID numbers

```typescript
import { parseSouthAfricanIdNumber, isValidSouthAfricanIdNumber } from 'south-african-id-numbers';

console.log(parseSouthAfricanIdNumber('8609197052053')); // { "citizen":true,"dateOfBirth":"1986-09-19","gender":"MALE","permanentResident":false }

console.log(isValidSouthAfricanIdNumber('8609197052053')); // true
```
