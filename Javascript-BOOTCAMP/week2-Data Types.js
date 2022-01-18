/*
  Data Types Intro
  - String
  - Number
  - Array => Object
  - Object
  - Boolean
*/

console.log("Osama Mohamed");
console.log(typeof "Osama Mohamed");
console.log(typeof 5000);
console.log(typeof 5000.99);
console.log(typeof [10, 15, 17]);
console.log(typeof { name: "Osama", age: 17, country: "Eg" });
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);




/*
  Variables Intro
  - What Is Variable ?
  - Why We Use Variables ?
  - Declare A Variable And Use
  - Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
  - Variable Without Var
  - Multiple Variables In The Same Line
  - Id And Global Variable
  - Loosely Typed vs Strongly Typed
*/

var user = "Sayed";
console.log(user);



/*
  Identifiers
  - Name Conventions And Rules
  - Reserved Words
*/

var userName = "Sayed";

console.log(userName);


/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/



/*
  String Syntax + Character Escape Sequences
  \ Escape + Line Continue
  \n
*/

console.log('Elzero Web "School"');
console.log("Elzero Web 'School'");
console.log("Elzero Web \"School\"");
console.log('Elzero \\ Web \'School\'');
console.log("Elzero \
Web \
School");
console.log("Elzero\nWeb\nSchool");



/*

				================
				=== Hoisting ===
				================		
				
	Hoisting in JS 
	moving the decraltions to the top when the code interpreted 
	
	- first (function declarations)
	- second (varible declarations)
	- third the assignments left in place!


Class declarations are also hoisted in a similar way as variables declared with let/const statements:
// Using the Person class before declaration
// output: ReferenceError: Cannot access 'Person' before initialization

		usage must be after declaration in these cases




Things to Remember:
	var variables are function scoped.
	let and const variables are block scoped (this includes functions too).
	All declarations — classes, functions and variables — are hoisted to the top of the containing scope, before any part of your code is executed.
	Functions are hoisted first, then variables.
	Function declarations have priority over variable declarations, but not over variable assignments.
*/




/*
  Concatenation
*/

let a = "We Love";
let b = "JavaScript";

document.write(a + " " + b);

console.log(a, b);



/*
  Template Literals (Template Strings)
*/

// First Example

let a = "We Love";
let b = "JavaScript";
let c = "And";
let d = "Programming";

//Legacy way
console.log(a = " \"\" " + b +
"\n" + c + " " + d);

//ES6
console.log(`${a} "" '' \\ ${b}
${c} ${d}`);

// Second Example

let title = "Elzero";
let desc = "Elzero Web School";

let markup = `
  <div class="card">
    <div class="child">
      <h2>${title}</h2>
      <p>${desc}</p>
    </div>
  </div>
`;

document.write(markup);



