// part1

console.log(1e5); // 100000
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(1e2 * 1e3); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(Math.ceil(99999.6)); // 100000
console.log(Math.floor(100000.6)); // 100000
console.log(Math.round(99999.6)); // 100000
console.log(parseInt(100000.654312551)); // 100000
console.log(Math.trunc(100000.632154314214)); // 100000

// part2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// part3
console.log(
  parseInt(Number.MAX_VALUE / Number.MAX_SAFE_INTEGER) *
    Math.pow(true + true, true + true + true + true)
); // 16

// part4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+parseFloat(myVar).toFixed(2)); // 100.57

// Part5
let num = 10;

console.log(+Number.isInteger(num) + true); // 2

// part6
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.ceil(flt) - true); // 10

// part7 random number between 0~4
console.log(Math.random() * 4);
