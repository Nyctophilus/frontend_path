/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

let user = {
  userName: "Muhammed",
  age: "25",
  sayHi: (userName) => `Hola, ${userName}`,
};

document.write(user.sayHi(user.userName));

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

let myVar = "country";

user = {
  theName: "Osama",
  country: "Egypt",
};

console.log(user.theName);
console.log(user.country); // user.country
console.log(user.myVar); // user.country
console.log(user[myVar]); // user.country

/*
  Object
  - Nested Object And Trainings
*/

user = {
  name: "Muhammed",
  age: 25,
  skills: ["HTML5", "CSS3", "JS", "BOOTSTRAP"],
  available: false,
  addresses: {
    egypt: {
      one: "Alexandria",
      two: "Cairo",
    },
    UEA: "Duabi",
  },
  avCheck: () =>
    user.available ? `Free for hire!` : `Not free for hire`,
};

console.log(user.avCheck());

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

/*
  Object
  - Create With New Keyword new Object();
*/

let user = new Object({
  age: 20,
});

console.log(user);

user.age = 38;
user["country"] = "Egypt";

user.sayHello = function () {
  return `Hello`;
};

console.log(user);
console.log(user.age);
console.log(user.country);
console.log(user.sayHello());

/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.            ***this refer to the object which called her***
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this);
console.log(this === window);

myVar = 100;

console.log(window.myVar);
console.log(this.myVar);

function sayHello() {
  console.log(this);
  return this;
}
sayHello();

console.log(sayHello() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let user = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(user.age);
console.log(user.ageInDays());

/*
  Object
  - Create Object With assign Method
*/

let user = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(user);
console.log(user.age);
console.log(user.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

let copyObj = Object.create(user);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

/*
  Object
  - Create Object With assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop4 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, {
  prop5: 5,
  prop6: 6,
});

console.log(newObject);
