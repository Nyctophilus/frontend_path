let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
console.log(
  ip.match(
    /\d{4}:\w{2}\w:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/g
  )
);

// part2
let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/Os\d*O/g));
// Output
// ['Os10O', 'OsO', 'Os100O']

// part3
let phone = "+(995)-123 (4567)";
console.log(phone.match(/\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g));

// part4
let re =
  /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// https?     search for "http" and s can be exist one time or none
// :\/\/      search for : and skip // to not consider em from the acutual js
// (?         ( one or none
// :[-\w]     for : and [-'one char here']
// +\.)?      for +\ as char . and ) and ?> the whole group (?:[-\w]+\.)? one or 0
// ([-\w]+)   group of [- and one word] and bracket can happen one or more times
// \.\w+      search for . followed by one word or more
// (?:\.\w+)? the whole group can happen one time or not at all :.'one word or more'
// \/?.*      / one or none time followed by word can happen any number of time or dont even exist!
// i          flag: insenstive for cases

// part5
let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";

re = /\d{2}\W*\d{2}\W*\d+/g; // Write Pattern Here
console.log(date1.match(re)); // "25/10/1982"
console.log(date2.match(re)); // "25 - 10 - 1982"
console.log(date3.match(re)); // "25 10 1982"
console.log(date4.match(re)); // "25 10 82"

// part6
console.log(`#`.repeat(30));

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 =
  "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

re = /(https?:\/\/)?(www\.)?elzero\.org.*/g; // Write Your Pattern Here

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
