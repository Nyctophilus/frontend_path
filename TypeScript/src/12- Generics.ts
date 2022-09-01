/*
  Generics
  - Help Write A Reusable Code
  - Allow To Pass Type As A Parameter To Another Type
  - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
  - We Can Create:
  --- Generic Classes
  --- Generic Functions
  --- Generic Methods
  --- Generic Interfaces
*/

// function returnNumber(val: number) : number {
// 	return val;
//   }
//   function returnString(val: string) : string {
// 	return val;
//   }
//   function returnBoolean(val: boolean) : boolean {
// 	return val;
//   }

// -HL GenericType --> <T> ... it's like a param and you will assign a type to it later
function returnType<T>(val: T): T {
  return val;
}

console.log(returnType<number>(100));
console.log(returnType<string>("Elzero"));
console.log(returnType<boolean>(true));
console.log(returnType<number[]>([1, 2, 3, 4]));

const returnTypeArrowSyntax = <T>(val: T): T => val;

console.log(returnTypeArrowSyntax<object>({ arrow: "=>" }));

const testType = <T>(val: T): string =>
  `The Value is ${val} and its type is ${typeof val}`;

console.log(testType<number>(22));

const multipleGenerics = <T, S>(
  valOne: T,
  valTwo: S
): string =>
  `First Value is ${valOne}, and second value is ${valTwo}`;

console.log(
  multipleGenerics<number[], boolean>([1, 22, 0], true)
);

/*
  - Classes
*/

class User<T = string> {
  constructor(public value: T) {}
  show(msg: T): void {
    console.log(`${msg} - ${this.value}`);
  }
}

let userOne1 = new User<string>("Elzero");
console.log(userOne1.value);
userOne1.show("Message");

let userTwo = new User<number | string>(100);
console.log(userTwo.value);
userTwo.show("Message");

/*
  - Classes And Interfaces
*/

interface Book {
  type: string;
  title: string;
  length: number;
  isbn: number;
  read: boolean;
}

interface Game2 {
  name: string;
  price: number;
  finished: boolean;
  category: string;
}

class Collection<T> {
  public data: T[] = [];
  add(item: T): void {
    this.data.push(item);
  }
}

const bookOne = new Collection<Book>();
bookOne.add({
  type: "financial",
  title: "atomic habits",
  length: 233,
  isbn: 541254,
  read: false,
});

const gameOne = new Collection<Game2>();
gameOne.add({
  name: "Assissin Creed",
  price: 60,
  finished: true,
  category: "Sealth",
});

console.log(bookOne);
console.log(gameOne);
