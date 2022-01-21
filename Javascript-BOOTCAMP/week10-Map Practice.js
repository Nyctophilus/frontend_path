/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let sw = swappingCases
  .split("")
  .map((char) =>
    char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase()
  )
  .join("");
console.log(sw);

// inverting numbers
let inv = invertedNumbers.map((n) => -n);
console.log(inv);

// ignoring numbers
let ign = ignoreNumbers
  .split("")
  .map((n) => (parseInt(n) ? (n = "") : (n = n)))
  .join("");
console.log(ign);

// .
// .
// ..
// .
// .
// .

// elzero code
// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// // let sw = swappingCases
// //   .split("")
// //   .map(function (ele) {
// //     // Condition ? True : False
// //     return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
// //   })
// //   .join("");

// // Arrow Function Version

// let sw = swappingCases
//   .split("")
//   .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
//   .join("");

// console.log(sw);

// let inv = invertedNumbers.map(function (ele) {
//   return -ele;
// });

// console.log(inv);

// let ign = ignoreNumbers
//   .split("")
//   .map(function (ele) {
//     return isNaN(parseInt(ele)) ? ele : "";
//   })
//   .join("");

// console.log(ign);

// ------------------------------------------------------
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
// .
// .
// .
// .

// ================================= Filter Practice
// -----------------------------------------------------------------
/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let lng = sentence
  .split(" ")
  .filter((word) => word.length <= 4)
  .join(" ");
console.log(lng);

// .
// .
// .
// .
// Ignore Numbers
ignoreNumbers = "Elz123er4o";

ign = ignoreNumbers
  .split("")
  .filter((c) => isNaN(parseInt(c)))
  .join("");

console.log(ign);

// .
// ..
// .
// .
// .
// .
// .

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mlt = mix
  .split("")
  .filter((n) => !isNaN(parseInt(n)))
  .map((n) => n * n);

console.log(mlt);
