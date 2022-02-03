/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/

let str1 = "10 20 100 1000 5000";
let str2 = "Os1 Os12 Os123 Os123Os Os12312Os123";

let invalidEmail = "Osama@@@gmail....com";
let validEmail = "o@nn.sa";

let ip = "192.168.2.1"; // IPv4

let url = "elzero.org";
url = "elzero.org/";
url = "http://elzero.org/";
url = "http://www.elzero.org/";
url = "https://.elzero.org/";
url = "https://www.elzero.org/";
url = "https://www.elzero.org/?facebookid=asdasdasd";

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let myString = "Hello Elzero Web School I Love elzero";

let regEx = /elzero/gim;
console.log(myString.match(regEx));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/gi;
console.log(tld.match(tldRe));

let nums = "12345678910";
let numsRe = /[0-2]/g;
console.log(nums.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g;
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceReg = /(os)[5-9](os)/gi;
console.log(practice.match(practiceReg));

// part2
myString = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g; // /[a-z]/gi;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-z0-9]/gi; ///[^a-zA-Z0-9]/g

console.log(myString.match(atozSmall));
console.log(myString.match(NotAtozSmall));
console.log(myString.match(atozCapital));
console.log(myString.match(NotAtozCapital));
console.log(myString.match(aAndcAnde));
console.log(myString.match(NotaAndcAnde));
console.log(myString.match(lettersCapsAndSmall));
console.log(myString.match(numsAndSpecials));
console.log(myString.match(specials));
