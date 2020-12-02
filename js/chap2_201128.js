// template literal
const a_ = 1;
const b_ = 2;

console.log(`${a_}+${b_}=${a_ + b_}`);

// destructuring
const arr = [4, 5, 6];
const obj = { a: 1, b: 2, c: { d: 4, e: 5 } };
const {
  a,
  b,
  c: { d },
} = obj;
const [e, f] = arr;
console.log(a, b, e, f, d);

// module
// ES6
// import { br } from "./module.js";

// ES5
const { br } = require("./module.js");
console.log(br);
