const process = require('process');
import { sum } from "./utils";

console.log(process.cwd());

console.log('hello typescript');

let num : number = 22;
console.log(`num : ${num}`);


console.log(sum(11,22));
