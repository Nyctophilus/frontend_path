/*
  Class
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Your Email Is ${this.email}`;
  }
}

let user1 = new User("Muhammed", "o@nn.sa");
let user2 = new User("Ahmed");

console.log(user1);
console.log(user2);

/*
  Class
  Static Properties & Methods
*/

class User {
  // Static Properties
  static counter = 0;

  constructor(name, email, counter) {
    this.name = name;
    this.email = email;
    this.counter = counter;
    User.counter++;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Your Email Is ${this.email}`;
  }

  // Static Methods
  static countObjects = function () {
    return `${this.counter} Objects Created.`;
  };
}

user1 = new User("Muhammed", "o@nn.sa", 2);
user2 = new User("Ahmed", "o@nn.sa", 2);
let user3 = new User("Muhammed", "o@nn.sa", 2);
let user4 = new User("Muhammed", "o@nn.sa", 2);
// let user2 = User("Ahmed", "a@nn.sa"); // TypeError: Class constructor User

console.log(typeof User); // Function
console.log(User === User.prototype.constructor); // True

console.log(User.countObjects());

/*
  Class
  Inheritance
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  showEmail() {
    return `Your Email Is ${this.email}`;
  }
  writeMsg() {
    return `Message From Parent Class`;
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  adminMsg() {
    return `You Are Admin`;
  }
  writeMsg() {
    return `Message From Child Class`;
  }
}

let admin1 = new Admin("Muhammed", "o@nn.sa");

/*
  JavaScript Accessors
  Getters & Setters
*/

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  sayHello() {
    return `Hello ${this.name}`;
  }
  get showInfo() {
    return `Name: ${this.name}, Email" ${this.email}`;
  }
  changeName(newName) {
    this.name = newName;
  }
  set changeEmail(newEmail) {
    this.email = newEmail;
  }
}

user1 = new User("Muhammed", "o@nn.sa");

console.log(user1.name);
console.log(user1.email);
console.log(user1.showInfo);

user1.changeName("Mahmoud");
console.log(user1.name);
console.log(user1.showInfo);

user1.changeEmail = "oooo@gmail.com";
console.log(user1.name);
console.log(user1.email);
console.log(user1.showInfo);
