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

/*
  Type Annotations With Multidimensional Arrays
*/

const arr1: (number | string | (boolean | string)[])[] = [
  1,
  2,
  3,
  "a",
  [true, "m"],
];

/*
  Type Annotations With Functions

  - noImplicitAny

  - noImplicitReturns
  --- Will Check All Code Paths In A Function To Ensure They Return A Value

  - noUnusedLocals
  --- Report Errors On Unused Local Variables

  - noUnusedParameters
  --- Report Errors On Unused Parameters In Functions.
*/

let showMsg = true;

function showDetails(
  name: string,
  age: number,
  salary: number
): string {
  let test = 10;
  if (showMsg) {
    return `Hello ${name}, Age Is ${age}, Salary Is ${salary}, Test Variable ${test}`;
  }
  return `No Data To Show`;
}

console.log(showDetails("Muhammed", 22, 5000));

/*
  Function
  - Optional and Default Parameters

  - In JavaScript, Every Parameter Is Optional => "undefined" If You Didnt Use It
  - "?" Optional Parameter
*/

function showData(
  name: string = "mo",
  age?: number,
  country?: string
) {
  return `${name} - ${age} - ${country}`;
}

console.log(showData(undefined, undefined, "Egypt"));

/*
  Function
  - Rest Parameter
  - What About Float => All Is Under Type Number
*/

function addAll(...nums: number[]): number {
  let result: number = 0;

  nums.map((n) => (result += n));
  return result;
}

console.log(addAll(10, 20, 30, 100, 10.5, +true));

/*
  Function
  - Anonymous Function
  - Arrow Function
*/

const addAnonymous = function (
  num1: number,
  num2: number
): number {
  return num1 + num2;
};

console.log(addAnonymous(10, 20));

const addWithArrow = (
  num1: number,
  num2: number
): number => {
  return num1 + num2;
};
console.log(addWithArrow(10, 20));

/*
  Type Annotations With Object
*/

let myObject: {
  readonly username: string;
  id: number;
  hire?: boolean;
  skills: {
    one: string;
    two: string;
  };
} = {
  username: "Fayad",
  id: 100,
  skills: {
    one: "HTML",
    two: "CSS",
  },
};

// myObject.username = "Osama";
myObject.id = 101;
myObject.hire = false;

console.log(myObject.username);
console.log(myObject.id);
console.log(myObject.hire);
console.log(myObject.skills.one);
