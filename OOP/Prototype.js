/*
  Prototype
*/

function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

let user1 = new User("Muhammed");
let user2 = new User("Ahmed");

console.log(User.prototype);

// function sayHello() {
//   return 1;
// }
// console.log(sayHello.prototype);

const arr = [1, 2, 3, 4, 5];
console.log(Array.prototype);
console.log(arr.reverse());

/*
  Prototype
  Add To Prototype Chain
*/

function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

user1 = new User("Muhammed");
user2 = new User("Ahmed");

console.log(User.prototype);
console.log(user1);

User.prototype.addTitle = function () {
  return `Mr. ${this.name}`;
};

console.log(Object.prototype);

Object.prototype.elzero = "Elzero Web School";

const myObject = { a: 1, b: 2 };
console.log(myObject.a);
console.log(myObject.b);
console.log(myObject.elzero);

/*
  Prototype
  Extend Constructors Features
*/

let myString = "Muhammed";

console.log(String.prototype);

String.prototype.zFill = function (width) {
  let theResult = this;

  while (theResult.length < width) {
    theResult = `0${theResult}`;
  }

  return theResult.toString();
};

console.log("12".zFill(6));
console.log("516".zFill(6));
console.log("3625".zFill(6));
console.log("25145".zFill(6));
console.log("987654".zFill(6));

String.prototype.sayYouLoveMe = function () {
  return `I Love You ${this}`;
};

console.log("Muhammed".sayYouLoveMe());

/*
  Prototype
  [1] Every Object Has A Prototype
  [2] Prototype Chain Ends With Object.prototype
  [2] In Javascript Function Is Object
*/

function User(name) {
  /*
	  [1] Create Empty Object
	  [2] Assign The New Object To this Context
	  [3] New Object Created Prototype = Function Prototype
	  this = {};
	  this.__proto__ = User.__proto__
	*/
  this.name = name;
  /*
	  [4] Return The New Object
	  return this
	*/

  // if (!(this instanceof User)) {
  //   // throw new Error("Must Be Called With New Keyword");
  //   console.log("Error");
  // }

  // ES6
  if (!new.target) {
    // throw new Error("Must Be Called With New Keyword");
    console.log("Error");
  }
}

user1 = new User("Muhammed");
user2 = new User("Ahmed");
console.log(User.prototype);
console.log(user1);

let myArray = [1, 2, 3, 4];
