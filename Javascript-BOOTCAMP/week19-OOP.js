/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User {
  // Private Property
  #e;
  constructor(id, username, eSalary) {
    this.i = id;
    this.u = username;
    this.#e = eSalary;
  }
  getSalary() {
    return parseInt(this.#e);
  }
}

let userOne = new User(100, "Elzero", "5000 Gneh");

console.log(userOne.u);
console.log(userOne.getSalary() * 0.3);

class GoldUser extends User {
  constructor(id, username, eSalary, badge) {
    super(id, username, eSalary);
    this.b = badge;
  }
}

const g1 = new GoldUser(22, "Fay", 20000, "gold");

console.log(g1.b);

/*
	Descriptors
*/

const objj = {
  a: 22,
  b: 00,
};
Object.getOwnPropertyDescriptor(objj, "a");

Object.getOwnPropertyDescriptors(objj);
