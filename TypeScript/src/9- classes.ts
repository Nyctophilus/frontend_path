/*
  Type Annotations With Class

  - Data Access Modifiers & Parameters Properties
  --- Public
  ------ All Members Of A Class In TypeScript Are Public
  ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
  --- Private
  ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
  --- Protected
  ------ Same Like Private But Can Be Accessed Using The Deriving Class

  - TypeScript Is A Layer On Top Of JavaScript
  - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
*/

class UserClass {
  msg: () => string;

  constructor(
    private _username: string,
    private salary: number,
    public readonly address: string
  ) {
    this.msg = () =>
      `Hello ${this._username}, your salary is ${this.salary}`;
  }

  sayMsg = () =>
    `Hello ${this._username}, your salary is ${this.salary}`;

  get username(): string {
    return this._username;
  }

  set username(val: string) {
    this._username = val;
  }
}

let userOne = new UserClass("Mo", 16000, "Alex");

console.log(userOne.username);
userOne.username = "Muhammed";
console.log(userOne.username);

// console.log(userOne.salary);
console.log(userOne.msg());
console.log(userOne.sayMsg());

/*
  -HL Static Members  --> can be accessed only through the class User.
  --- Don't Use "name, length, call"
*/

class UserCount {
  private static count: number = 0;

  static getCount(): void {
    console.log(`${this.count} Object created!`);
  }

  constructor(username: string) {
    UserCount.count++;
  }
}

let u1 = new UserCount("Elzero");
let u2 = new UserCount("Web");
let u3 = new UserCount("School");
// console.log(UserCount.count);
UserCount.getCount();

/*
  - Implement Interface
*/

interface Settings2 {
  theme: boolean;
  font: string;
  save(): void;
}

class UserInterface implements Settings2 {
  constructor(
    public username: string,
    public theme: boolean,
    public font: string
  ) {}
  save(): void {
    console.log(`Saved`);
  }
  update(): void {
    console.log(`Updated`);
  }
}

let userInt = new UserInterface(
  "Elzero",
  true,
  "Open Sans"
);

console.log(userInt.username);
console.log(userInt.font);

userInt.save();
userInt.update();
