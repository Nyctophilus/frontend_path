// New -primitive- data types in js es6

// unique
// Universally unique id  'UUID'
// Globally unique id	  'GUID'

// can be used as a key in object

// every symbol is unique
const x = Symbol("adw");
const u = Symbol("adw");
console.log(x === u);
// x !== u

console.log(x.description);

// Symbol.for(Registry)
const xx = Symbol.for("x-yyaxx");
const uu = Symbol.for("x-yyaxx"); // will referer to the same registry
console.log(xx === uu);
// xx === uu

// get value
console.log(Symbol.keyFor(uu));

/*
	Static properties
*/
const str = "this is asd,nmsa.dmn asm,asmf";
const obj = {
  name: "abd",
  [Symbol.replace](str, i) {
    return `${str.substring(0, i)} ...testing!`;
  },
};
console.log(str.replace(obj, 10));

/*
	Symbol as obj prop

	- non-enumerable
	- Anonymous
	- Can't convert to JSON object when use JSON.stringify()
*/

const sym = Symbol(10);

const sObj = {
  // use Symbol.for to make it reachable!
  // they are not the same
  [Symbol(10)]: "yeeel", // inasseccable
  [Symbol.for(10)]: "xyz", // asseccable
  [sym]: { usrinfo: "client", fav: "red" }, // asseccable
};

console.log(sObj[Symbol.for(10)]); // access symbol prop

// Can't iterate on symbols.
console.log(Object.getOwnPropertySymbols(sObj));

// ways to reach
sObj[sym].addData = "new Data!";

sObj;

/*
	FIXME 		Symbolic props Can't convert to JSON object
*/
