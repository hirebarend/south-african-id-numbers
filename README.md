# South African ID Numbers

A library for parsing, validating and formatting South African ID numbers

```typescript
import { parse, validate } from 'south-african-id-numbers';

console.log(parse('8609197052053')); // { "citizen":true,"dateOfBirth":"1986-09-19","gender":"MALE","permanentResident":false }

console.log(validate('8609197052053')); // true
```
