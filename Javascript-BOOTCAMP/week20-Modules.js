/*
								main.js
  Modules
  - Import And Export
*/

let a = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { a, arr, saySomething };

export default function () {
  return `Hello`;
}

/**
 * 
 * app.js

 */

// import elzero, { myNumber, arr, saySomething as s } from "./main.js";

// console.log(myNumber);
// console.log(arr);
// console.log(s());
// console.log(elzero());

import * as all from "./main.js";

console.log(all);

console.log(all.myNumber);
console.log(all.arr);
