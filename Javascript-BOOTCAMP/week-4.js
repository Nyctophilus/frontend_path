/*
  Number
  - Double Precision            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
  - Syntactic Sugar "_"
  - e
  - **
  - With Decimal
  - Number + BigInt
  - Number Min Value
  - Number Max Value
*/

console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 23434343434);

// part2

/*
  Number Methods
  - Two Dots To Call A Methods
  - toString()
  - toFixed()
  - parseInt()
  - parseFloat()
  - isInteger() [ES6]
  - isNaN() [ES6]
*/

console.log((100).toString());
console.log((100.1).toString());

console.log((100.554555).toFixed(2));

console.log(Number("100 Osama"));
console.log(+"100 Osama");
console.log(parseInt("100 Osama"));
console.log(parseInt("Osama 100 Osama"));
console.log(parseInt("100.500 Osama"));
console.log(parseFloat("100.500 Osama"));

console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));

console.log(Number.isNaN("Osama" / 20)); //NAN only returned when munipulating not a number with numbers operaters

// part3
/*
  Math Object
  - round()
  - ceil()
  - floor()
  - min()
  - max()
  - pow()
  - random()
  - trunc() [Es6]       //returns the int part only and discard the floot part what so ever!
*/

console.log(Math.round(99.2));
console.log(Math.round(99.5));

console.log(Math.ceil(99.2));
console.log(Math.floor(99.9));

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));

console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5));

/* 
          2nd mid
 */

/*
  String Methods
  - Access With Index
  - Access With charAt()
  - length
  - trim()
  - toUpperCase()
  - toLowerCase()
  - Chain Methods
*/

let theName = "  Ahmed  ";

console.log(theName);
console.log(theName[1]);
console.log(theName[5]);

console.log(theName.charAt(1));
console.log(theName.charAt(5));

console.log(theName.length);
console.log(theName.trim());

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

console.log(theName.trim().charAt(2).toUpperCase());

/*
  String Methods
  - indexOf(Value [Mand], Start [Opt] 0)
  - lastIndexOf(Value [Mand], Start [Opt] Length)
  - slice(Start [Mand], End [Opt] Not Include End)
  - repeat(Times) [ES6]
  - split(Separator [Opt], Limit [Opt])
*/

let a = "Elzero Web School";

console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 8));
console.log(a.indexOf("o")); // 5
console.log(a.lastIndexOf("o")); // 15

console.log(a.slice(2, 6)); //cut a slice from start to end points
console.log(a.slice(-5, -3));

console.log(a.repeat(5));

console.log(a.split("", 6)); // split the array into peices with the given indector

/*
  String Methods
  - substring(Start [Mand], End [Opt] Not Including End)
  --- Start > End Will Swap
  --- Start < 0 It Start From 0
  --- Use Length To Get Last Character
  - substr(Start [Mand], Characters To Extract)
  --- Start >= Length = ""
  --- Negative Start From End
  - includes(Value [Mand], Start [Opt] Default 0) [ES6]
  - startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
  - endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let a = "Elzero Web School";

console.log(a.length);

console.log(a.substring(2, 6));
console.log(a.substring(6, 2)); //diff between it and slice .. substring will swap start and end to make it right
console.log(a.substring(-10, 6)); // 0 - 6
console.log(a.substring(a.length - 5, a.length - 3));

console.log(a.substr(0, 6));
console.log(a.substr(17));
console.log(a.substr(-3));
console.log(a.substr(-5, 2));

console.log(a.includes("Web"));
console.log(a.includes("Web", 8));

console.log(a.startsWith("E"));
console.log(a.startsWith("E", 2));
console.log(a.startsWith("zero", 2));

console.log(a.endsWith("ro", 6));
console.log(a.endsWith("l"));
