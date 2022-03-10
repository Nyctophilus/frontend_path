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

/*
  Constructor Function
*/

function Phone(serial, color, price) {
  this.serial = serial;
  this.color = color;
  this.price = price - 100;
}

let phone1 = new Phone(123, "Red", 500);
let phone2 = new Phone(159, "Black", 500);
let phone3 = new Phone(167, "Silver", 500);

console.log(phone1.serial);
console.log(phone1.color);
console.log(phone1.price);

console.log(phone2.serial);
console.log(phone2.color);
console.log(phone2.price);

console.log(phone3.serial);
console.log(phone3.color);
console.log(phone3.price);

// const phone1 = {
//   serial: 123,
//   color: "Red",
//   price: 500,
// };

// const phone2 = {
//   serial: 159,
//   color: "Black",
//   price: 500,
// };

// const phone3 = {
//   serial: 167,
//   color: "Silver",
//   price: 500,
// };

/*
  Constructor Function
*/

function Phone(serial) {
  // this is The Created Object From The Constrcutor Function
  console.log(this);
  this.serial = `#${serial}`;
}

phone1 = new Phone(123456);
phone2 = new Phone(528951);
phone3 = Phone(125698);

console.log(phone1.serial);
console.log(phone2.serial);
console.log(window.serial);

console.log(phone1 instanceof Phone);
console.log(phone2 instanceof Phone);
console.log(phone3 instanceof Phone);

console.log(phone1.constructor === Phone);
console.log(phone2.constructor === Phone);
// console.log(phone3.constructor === Phone); // Error

function sayHelloTo(someone) {
  // someone => Parameter
  return `Hello ${someone}`;
}

console.log(sayHelloTo("Osama")); // Osama => Argument

/*
  Constructor Function
  Dealing With Properties
*/

function User(fname, lname, age) {
  this.fName = fname;
  this.lName = lname;
  this.age = age;

  this.fullName = function () {
    return `Full Name: ${this.fName} ${this.lName}`;
  };

  this.ageInDays = function () {
    return `Age In Days: ${this.age * 365}`;
  };
}

let user1 = new User("mohammed", "Yousry", 25);
console.log(user1.fullName());
console.log(user1.ageInDays());

/*
  Constructor Function
  60% To 70%
  Trainings
*/

function User(name, email, age, showEmail) {
  this.name = name;
  this.email = email;
  this.age = age;
  this.updateName = function (newName) {
    if (this.age > 18) {
      this.name = newName;
    } else {
      console.log(
        `You Cant Update Name Because Of Age Restriction`
      );
    }
  };
  this.showEmail = function () {
    if (showEmail === true) {
      return `Email Is: ${this.email}`;
    } else {
      return `Data Is Private`;
    }
  };
}

user1 = new User("Osama", "o@nn.sa", 19, false);
console.log(user1.name);
user1.updateName("Ahmed");
console.log(user1.name);
console.log(user1.showEmail());

/*
  Constructor Function 80%
  Built In Constructors
*/

function User(name) {
  this.name = name;
  this.welcome = function () {
    return `Welcome ${this.name}`;
  };
}

user1 = new User("Osama");
let user2 = new User("Ahmed");

// let obj1 = new Object({ a: 1 });
// let obj2 = new Object({ b: 2 });
let obj3 = { c: 3 };

let num1 = new Number(1);
let num2 = new Number(2);
let num3 = 3;

let str1 = new String("Osama");
let str2 = new String("Ahmed");
let str3 = "Mahmoud";
