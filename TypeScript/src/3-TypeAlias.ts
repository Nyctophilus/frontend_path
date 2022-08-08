/*
  Data Types
  - Type Alias
*/

type st = string;
let theName2: st = "Elzero";
theName2 = "Osama";

type standnum = string | number;
let all2: standnum = 10;
all2 = 100;
all2 = "Osama";
all2 = true;

/*
  Data Types
  - Advanced Type Alias
*/

type Buttons = {
  up: string;
  right: string;
  down: string;
  left: string;
};

type last = Buttons & { x: boolean };

const actions = (btns: last) => {
  if (btns.x)
    console.log(btns.up, btns.down, btns.left, btns.right);
};

actions({
  up: "jumb",
  right: "walk",
  left: "run",
  down: "fly",
  x: false,
});

/*
  Data Types
  - Literal Types
*/

type compVals = 1 | 0 | -1;

const compare = (num1: number, num2: number): compVals => {
  if (num1 > num2) return 1;
  else if (num1 < num2) return 0;
  else return -1;
};
console.log(compare(20, 20)); // 0
console.log(compare(20, 15)); // 1
console.log(compare(20, 30)); // -1

let myNumber: compVals = 1;
