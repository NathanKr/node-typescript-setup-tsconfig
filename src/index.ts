// const process = require('process'); this will work only when there is an import on the file
import * as process from 'process';
import { sum } from "./utils";

console.log(process.cwd());

console.log('hello typescript');

let num : number = 22;
console.log(`num : ${num}`);


console.log(sum(11,33)); 
