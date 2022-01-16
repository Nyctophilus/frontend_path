// part1

// Replace ? With Arithmetic Operators
// console.log(10 % 20 % 15 % 3 * 190 % 10 * 400); // 0

// part2

// let num = 3;

// Solution One
// console.log(num + num); // 6

// Solution Two
// console.log(num * --num); // 6

// Soultion Three
// console.log(+true * num + num); // 6

// Soultion Four
// console.log((++num * --num) / --num); // 6

// Solution Five
// console.log((num += num)); // 6

// Solution Six
// console.log(--num * num + +true + +true); // 6

// part3

let num = "10";

// Solution One
// console.log(+num + +num); // 20

// Solution Two
// console.log(+(++num) + --num - true); // 20

// Solution Three
// console.log((num * num) / num + +num); // 20

// Solution Four
console.log((num % num) + true + +num + --num); // 20
