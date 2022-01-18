/*
  Array Challenge
*/

let zero = 0;

let counter = 3;

let my = [
  "Ahmed",
  "Mazero",
  "Elham",
  "Osama",
  "Gamal",
  "Ameer",
];

// Write Code Here
my.pop();
my.pop();
my.reverse();
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.indexOf("Elham"), counter)); // ["Elham", "Mazero"]
console.log(my.slice(my.indexOf("Elham"), counter)); // ["Elham", "Mazero"]

let z = my[my.indexOf("Mazero")].slice(
  my.indexOf("Mazero")
);
let x = my[my.indexOf("Elham")].slice(
  zero,
  my.indexOf("Mazero")
);
let XZ = x.concat(z);
console.log(XZ); // "Elzero"

console.log(XZ.slice(XZ.indexOf("r")).replace("o", "O")); // "rO"
