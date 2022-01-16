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
