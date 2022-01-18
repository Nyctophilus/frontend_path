let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(
  myFriends.slice(
    myFriends.indexOf("Ahmed"),
    myFriends.indexOf("Gamal")
  )
); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// -----------------------------------------------------
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

// --------------------------------------------------------

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = arrTwo
  .slice(2)
  .concat(
    arrOne.reverse().slice(),
    arrTwo.reverse().slice(1)
  );
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// ====================================================
let website = "Go";
let words = [
  `${website}ogle`,
  "Facebook",
  ["Elzero", "Web", "School"],
];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO

// ===========================================================
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle)) {
  console.log("Found");
}

if (haystack.indexOf(needle) != -1) {
  console.log("Found");
}

if (
  haystack[0] === needle ||
  haystack[1] === needle ||
  haystack[2] === needle
) {
  console.log("Found");
}

if (haystack.slice(1, 2).pop().search(needle) === 0) {
  console.log("Found ;)");
}

// ============================================================

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = arr2[arr2.indexOf("F")]
  .toLocaleLowerCase()
  .concat(
    arr1[arr1.indexOf("X")].toLocaleLowerCase(),
    arr2[arr2.indexOf("Y")].toLocaleLowerCase()
  );
console.log(allArrs); // fxy
