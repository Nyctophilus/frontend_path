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

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email =
  "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g;
let word = /\w/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let names =
  "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/gi;
console.log(names.match(re));

console.log(re.test(names));
console.log(/(\bspam|spam\b)/gi.test("Osama"));
console.log(/(\bspam|spam\b)/gi.test("1Spam"));
console.log(/(\bspam|spam\b)/gi.test("Spam1"));

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails =
  "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

let nums = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numsRe = /0\d*0/gi;
console.log(nums.match(numsRe));

let urls =
  "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S

/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myString = "We Love Programming";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myString));
console.log(/^we/gi.test(myString));
console.log(/lz$/gi.test(names));
console.log(/^\d/gi.test(names));

console.log(names.match(/\d\w{5}(?=Z)/gi));
console.log(names.match(/\d\w{8}(?!Z)/gi));

/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let re = /@/gi;
console.log(txt.replaceAll(re, "JavaScript"));
console.log(txt.replaceAll(/@/gi, "JavaScript"));

/*
  Regular Expression
  - Input Form Validation Practice
*/

document.getElementById("register").onsubmit = () => {
  let phoneValue = document.getElementById("phone").value;
  let phonePattern = /\(\d{4}\)\s\d{3}-\d{4}/g;

  if (!phonePattern.test(phoneValue)) return false;

  return true;
};
