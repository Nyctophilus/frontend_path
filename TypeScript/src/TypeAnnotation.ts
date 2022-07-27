/*
  Type Annotations || Signature
  -- Indicate The Data Type Of Variables
  -- Indicate The Data Type Of Functions Input/Output
  -- Objects, etc.

  - Why We Use It ?
  - Is It Mandatory ?
  - What Happen If We Didnt Use It ?
*/

let theName = "Elzero"; // so u can skip annotation if u assigning value, complier will do it
let theAge: number = 40;
let hire: boolean = true;
let all: any = "Elzero Web School";
let allVars; // Any

theName = "Osama";
all = 100;

function add(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(add(10, 20));
console.log(typeof add(10, 20));

// console.log(add(10, "20"));
// console.log(typeof add(10, "20"));

/*
  Type Annotations With Arrays
*/

let allArr: string | number | boolean = "Osama";

allArr = "A";
allArr = 100;
allArr = true;

let myFriends: string[] = ["Osama", "Ahmed", "Sayed"];

for (let i = 0; i < myFriends.length; i++) {
  console.log(myFriends[i].repeat(3));
}
