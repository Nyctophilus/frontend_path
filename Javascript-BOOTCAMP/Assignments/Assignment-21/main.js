// Needed Output
// Set(3) {10, 20, 2}
// 2
let set = new Set([10]);

set.add(20).add(set.size);

console.log(set);
console.log(Array.from(set).pop());
console.log(`#`.repeat(30));
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

// part2
let myFriends = [
  "Osama",
  "Ahmed",
  "Sayed",
  "Sayed",
  "Mahmoud",
  "Osama",
];
// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log(new Set(myFriends.sort()));
console.log(`#`.repeat(30));
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

// part3

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true

let uMap = new Map(Object.entries(myInfo));
console.log(uMap);
console.log(uMap.size);
console.log(uMap.has("role"));

console.log(`#`.repeat(30));
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

// part4
let theNumber = 100020003000;

// Needed Output
// 123
console.log(
  +[...new Set([...theNumber.toString()].sort())].join("")
);

console.log(`#`.repeat(30));
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

// part5
let theName = "Elzero";

// Needed Output
// ['E', 'l', 'z', 'e', 'r', 'o']
console.log([...theName]);
console.log(Array.from(theName));
console.log(theName.split(""));
console.log(Array(...theName));
console.log(Object([...theName]));
console.log([...Object.assign(theName)]);
console.log(Object.assign([], theName));

console.log(`#`.repeat(30));
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
// part6
let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars = ["A", "B", "C", "D", "A", "B", "C", "D", "E"];
chars = ["Z", "Y", "Z", "Y", "A", "D", "E"];

// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
// ["Z", "Y", "Z", "Y", "A", "D", "E"]

let numsOnly = chars.filter((e) => typeof e === "number");
let charsOnly = chars.filter((e) => typeof e === "string");

// console.log(numsOnly);
// console.log(charsOnly);

let sortedChars = [...numsOnly, ...charsOnly];
sortedChars.copyWithin(
  0,
  numsOnly.length,
  numsOnly.length * 2
);
console.log(sortedChars);

console.log(`#`.repeat(30));
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
// part7

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

console.log([...numsOne, ...numsTwo]);
console.log(numsOne.concat(numsTwo));
console.log(Array(...numsOne, ...numsTwo));
console.log(Array.from([...numsOne, ...numsTwo]));
console.log(Object.assign([...numsOne, ...numsTwo]));
// Needed Output
// [1, 2, 3, 4, 5, 6]
console.log(`#`.repeat(30));
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
// part8
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(+((--n2.length).toString() + Math.min(...n1)));
// Needed Output
// 210
