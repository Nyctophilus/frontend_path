/*
  Defining Object
  [1] Object Literal
*/

let user = {
  // Properties
  firstName: "Osama",
  lastName: "Elzero",

  // Methods
  getFullName: function () {
    return `Full Name: ${user.firstName} ${user.lastName}`;
  },
};

// Accessing Object Properties
console.log(user.firstName); // Dot Notation
console.log(user["firstName"]); // Bracket Notation

console.log(typeof user.firstName); // String

// Accessing Object Methods
console.log(typeof user.getFullName); // Function
console.log(user.getFullName());

/*
  Defining Object
  [1] Object Literal
*/

user = {
  // Properties
  firstName: "Osama",
  lastName: "Elzero",
  age: 37,
  addresses: {
    eg: "Giza",
    usa: "California",
    ksa: "Riyadh",

    getMainAddress: function () {
      return `Main Address Is In Egypt In City ${user.addresses.eg}`;
    },
  },

  // Methods
  // getFullName: function () {
  //   return `Full Name: ${user.firstName} ${user.lastName}`;
  // },
  getFullName: () =>
    `Full Name: ${user.firstName} ${user.lastName}`,

  getAgeInDays: () => `Your Age In Days Is ${user.age}`,
};

// Accessing Object Properties
console.log(user.firstName); // Dot Notation
console.log(user["firstName"]); // Bracket Notation

console.log(typeof user.firstName); // String

console.log(user.addresses.eg);
console.log(user["addresses"]["ksa"]);

// Accessing Object Methods
console.log(typeof user.getFullName); // Function
console.log(user.getFullName());
console.log(user.getAgeInDays());

console.log(user.addresses.getMainAddress());

let myObj = {
  One: 1,
  "Two!": 2,
};

console.log(myObj.One);
// console.log(myObj."One"); // Syntax Error
// console.log(myObj.Two!); // Syntax Error

console.log(myObj["One"]); // 1
console.log(myObj["Two!"]); // 2

let myObj2 = {
  1: "One",
  2: "Two",
};

// console.log(myObj2.1); // Syntax Error

console.log(myObj2["1"]);
console.log(myObj2["2"]);

let myVariable = "name";

let myLastObj = {
  name: "Osama",
};

console.log(myLastObj.myVariable); // Undefined
console.log(myLastObj[myVariable]); // Osama
console.log(myLastObj["name"]); // Osama

/*
  Defining Object
  [1] Object Literal
  [2] With New Keyword
*/

user = new Object();

user.firstName = "Osama";
user.lastName = "Elzero";
user["age"] = 37;

user.getFullName = function () {
  return `Full Name Is ${user.firstName} ${user.lastName}`;
};

console.log(user);
console.log(user.firstName);
console.log(user["lastName"]);
console.log(user.age);
console.log(user.getFullName());

/*
  Defining Object
  [1] Object Literal
  [2] With New Keyword
  [3] With Object.create()
*/

let mainObj = {
  hasDiscount: true,
  showMsg: function () {
    return `You${
      this.hasDiscount ? "" : " Don't"
    } Have Discount`;
  },
};

console.log(mainObj.hasDiscount);
console.log(mainObj.showMsg());

let otherObj = Object.create(mainObj);

otherObj.hasDiscount = false;
console.log(otherObj.hasDiscount);
console.log(otherObj.showMsg());

let lastObj = Object.create(mainObj);

console.log(lastObj.hasDiscount);
console.log(lastObj.showMsg());

/*
  Defining Object
  [1] Object Literal
  [2] With New Keyword
  [3] With Object.create()
  [4] With Object.assign()
*/

const src1 = {
  prop1: "Value1",
  prop2: "Value2",
  method1: function () {
    return `Method 1`;
  },
};

const src2 = {
  prop3: "Value3",
  prop4: "Value4",
  method2: function () {
    return `Method 2`;
  },
};

const target = {
  prop5: "Value5",
};

Object.assign(target, src1, src2, { prop6: "Value6" });

console.log(target);

const myObject = Object.assign({}, target, {
  prop7: "Value7",
});

console.log(myObject);
console.log(myObject.prop1);
console.log(myObject.prop2);
console.log(myObject.prop6);
console.log(myObject.method1());
console.log(myObject.method2());

/*
  Delete Operator
*/

const user = { name: "Osama" };

console.log(user);
console.log(user.name);

// delete user; // Delete Property Not Object
// delete user.name;
// delete user["name"];
console.log(delete user["name"]);

console.log(user);
console.log(user.name);

console.log("#".repeat(15));

const username = "Osama";
console.log(username);
console.log(delete username);
console.log(username);

console.log("#".repeat(15));

const freezedObj = Object.freeze({ age: 37 });
console.log(freezedObj);
console.log(freezedObj.age);

console.log(delete freezedObj.age);

console.log(freezedObj);
console.log(freezedObj.age);

console.log("#".repeat(15));

const eObj = {};
Object.defineProperty(eObj, "a", {
  value: 1,
  //   configurable fales ==> u can't delete the prop
  configurable: false,
});
console.log(eObj);
console.log(eObj.a);

console.log(delete eObj.a);

console.log(eObj);
console.log(eObj.a);

/*
  For ... In Loop
  Loop Through The Properties Of The Objects
*/

const user = {
  name: "Osama",
  country: "Egypt",
  age: 37,
};

let finalData = "";

for (let info in user) {
  //   console.log(user);
  //   console.log(user[info]);
  // console.log(`The ${info} Is => ${user[info]}`);
  finalData += `<div>The ${info} Is => ${user[info]}</div>`;
}

// console.log(user.country);
// console.log(user["country"]);

console.log(finalData);

document.getElementById("info").innerHTML = finalData;
