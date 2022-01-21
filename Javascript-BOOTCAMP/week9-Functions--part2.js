/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

let print = function () {
  return 10;
};

let print = () => 10;

let print = function (num) {
  return num;
};

let print = (num) => num;

let print = function (num1, num2) {
  return num1 + num2;
};

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));

/*
  Scope
  - Global And Local Scope
*/

var a = 1;
let b = 2;

function showText() {
  var a = 10;
  let b = 20;
  console.log(`Function - From Local ${a}`);
  console.log(`Function - From Local ${b}`);
}

console.log(`From Global ${a}`);
console.log(`From Global ${b}`);

showText();

/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);

/*
  Scope
  - Lexical Scope

  Search
  - Execution Context
  - Lexical Environment
*/

function parent() {
  let a = 10;

  function child() {
    console.log(a);
    console.log(`From Child ${b}`);

    function grand() {
      let b = 100;
      console.log(`From Grand ${a}`);
      console.log(`From Grand ${b}`);
    }
    grand();
  }
  child();
}
parent();
