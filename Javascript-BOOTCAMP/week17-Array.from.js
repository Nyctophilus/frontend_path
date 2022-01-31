/*
  Array Methods
  - Array.from(Iterable, MapFunc, This) //this ref to the array itself!
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Muhammed"));
console.log(
  Array.from("123456", function (n) {
    return Number(n) + Number(n);
  })
);

console.log(Array.from("123456", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

let mySet = new Set(Array.from(myArray));
console.log(mySet);

// console.log([...new Set(myArray)]); //Speard operator

function testArgs() {
  return arguments;
}
console.log(testArgs("muhammed", "mme", "masdm"));
console.log(typeof testArgs("muhammed", "mme", "masdm"));

// returning arguments as an array
function af() {
  return Array.from(arguments);
}
console.log(af("ASdsa", 1, "23", 22, true));
