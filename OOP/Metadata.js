/*
  Object Meta Data
  writable
  enumerable
  configurable
  ============
  Object.defineProperty(obj, prop, descriptor)
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "c", {
  // all false by default
  writable: false, // ability to change the value or not
  enumerable: false, // ability to iterate over this property
  configurable: true, // ability to delete Or change the prop
  value: 3,
});

// all true  this way
myObject.d = 4;

Object.defineProperty(myObject, "c", {
  writable: true,
});

// console.log(delete myObject.c); // Will Not Delete Because configurable is False
myObject.c = 500; // Will Not Change Because writable is False

console.log(myObject);

console.log("#".repeat(10));

for (let prop in myObject) {
  console.log(prop, myObject[prop]);
}

console.log("#".repeat(10));

console.log(Object.getOwnPropertyNames(myObject));

/*
  Object.defineProperties & Trainings
*/

const myObject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myObject, "a", {
  writable: false,
  enumerable: false,
  configurable: false,
  value: 500,
});

Object.defineProperty(myObject, "c", {
  value: 3,
});

myObject.d = 4;

Object.defineProperties(myObject, {
  e: {
    value: 5,
  },
  f: {
    value: 6,
  },
  g: {
    enumerable: true,
    value: 7,
  },
});

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, "a"));
console.log(Object.getOwnPropertyDescriptor(myObject, "c"));
console.log(Object.getOwnPropertyDescriptor(myObject, "d"));

console.log(Object.getOwnPropertyNames(myObject));
console.log(Object.keys(myObject));

/*
  Importants Notes And The End
  [1] Arrow Functions Do Not Have a Prototype Property.
  [2] You Can Use Objects Inside Constructor Freely
  [3] f = function () {} ==== f() {}
*/

class User {
  constructor(fName, lName, age, email) {
    this.name = {
      first: fName,
      last: lName,
    };
    this.age = age;
    this.email = email;
  }
  sayHello = function () {
    return `Say Hello`;
  };
  sayHi() {
    return `Say Hi`;
  }
}

let user1 = new User("muhammed", "yousry", 25, "o@nn.sa");
console.log(user1.name.first);
console.log(user1.name.last);
console.log(user1.age);
console.log(user1.email);
console.log(user1.sayHello());
console.log(user1.sayHi());
