import { generate, parse, validate } from '.';

const str: string = generate();

console.log(str);

console.log(validate(str));

console.log(JSON.stringify(parse(str)));
