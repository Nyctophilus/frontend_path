let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let mm = mix
  .map((char) => (typeof char !== "number" ? char : ""))
  .reduce((acc, curr) => acc + curr);

console.log(mm);

// -------------------------------------------------------
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// -------------------------------------------------------

let myString = "EElllzzzzzzzeroo";

let noRep = myString
  .split("")
  .filter((char, i, arr) => arr.indexOf(char) === i)
  .reduce((acc, curr) => acc + curr);

console.log(noRep);
// Elzero

// -------------------------------------------------------
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// -------------------------------------------------------

let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero

const flat = myArray
  .reduce((acc, curr) => acc.concat(curr), [])
  .join("");
console.log(flat);

// -------------------------------------------------------
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// -------------------------------------------------------

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let invt = numsAndStrings
  .filter((n) => typeof n === "number")
  .map((n) => -n);

console.log(invt);

// -------------------------------------------------------
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// -------------------------------------------------------

let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let n5 = nums.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc * curr : acc + curr),
  1
);

console.log(n5);
