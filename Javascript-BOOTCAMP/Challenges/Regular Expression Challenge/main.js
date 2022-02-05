let url1 = "elzero.org";
let url2 = "http://elzero.net";
let url3 = "https://elzero.com";
let url4 = "https://www.elzero.xu";
let url6 = "https://www.elzero.academy";
let url5 =
  "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let re = /(https?:\/\/)?(www\.)?elzero\.(\w{2,}).*/gi;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));
console.log(url6.match(re));
