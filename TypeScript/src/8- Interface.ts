/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

interface User {
  id: number;
  username: string;
  country: string;
  sayHello(): string;
  sayWelcome: () => string;
  getDouble: (num: number) => number;
}

let user1: User = {
  id: 22,
  username: "Muhammed",
  country: "Egypt",
  sayHello() {
    return `Hello ${this.username}`;
  },
  sayWelcome: () => `Welcome, ${user1.username}`,

  getDouble: (n) => n * 2,
};

console.log(user1.id);
console.log(user1.sayHello());
console.log(user1.sayWelcome());
console.log(user1.getDouble(100));

/*
  Interface
  - ReOpen The Interface And Use Cases
*/

// Homepage
interface Settings {
  readonly theme: boolean;
  font: string;
}

// Articles Page
interface Settings {
  sidebar: boolean;
}

// Contact Page
interface Settings {
  external: boolean;
}

let userSettings: Settings = {
  theme: true,
  font: "Open Sans",
  sidebar: false,
  external: true,
};

/*
  Interface
  - Extending Interfaces
*/

interface Moderator {
  role: string | number;
}

interface Admin extends User, Moderator {
  protect: boolean;
}

let user2: Admin = {
  id: 22,
  username: "Muhammed",
  country: "Egypt",
  sayHello() {
    return `Hello ${this.username}`;
  },
  sayWelcome: () => `Welcome, ${user1.username}`,
  getDouble: (n) => n * 2,
  role: 2,
  protect: false,
};
