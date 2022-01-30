let myNumbers = [1, 2, 3, 4, 5];

// Write Your Destructuring Assignment Here
let [a, , , , e] = myNumbers;
console.log(a * e); // 5

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// part2

let mySkills = [
  "HTML",
  "CSS",
  "JavaScript",
  ["PHP", "Python", ["Django", "Laravel"]],
];

// Write Your Destructuring Assignment Here

[a, b, c, [d, e, [f, g]]] = mySkills;
console.log(
  `My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`
);

// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// part3

let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

// Play With Arrays To Prepare For Destructuring
// Write Your Destructuring Assignment Here

let arr = arr1.concat(arr3.slice(1));

[c, , , a, b] = arr;
console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// part4

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
({
  age: a,
  working: w,
  country: c,
  hobbies: [h1, , h3],
} = member);
console.log(
  `My Age Is ${a} And Iam ${w ? "" : "Not"} Working`
);
// My Age Is 30 And Iam Not Working
console.log(`I Live in ${c}`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// part5

const game = {
  title: "YS",
  developer: "Falcom",
  releases: {
    "Oath In Felghana": ["USA", "Japan"],
    "Ark Of Napishtim": {
      US: "20 USD",
      JAP: "10 USD",
    },
    Origin: "30 USD",
  },
};

// Write Your Destructuring Assignment/s Here

// Old way
// let o = Object.getOwnPropertyNames(game.releases)[0];
// a = Object.getOwnPropertyNames(game.releases)[1];

// Destruct way
[o, a] = Object.keys(game.releases);

// console.log(Object.keys(game.releases));
// console.log(a, o);
({
  title: t,
  developer: d,
  releases: {
    [o]: [u, j],
    [a]: { US: u_price, JAP: j_price },
    Origin: or,
  },
} = game);

console.log(`My Favourite Games Style Is ${t} Style`);
// My Favourite Games Style Is YS Style

console.log(`And I Love ${d} Games`);
// And I Love Falcom Games

console.log(
  `My Best Release Is ${o} It Released in ${u} & ${j}`
);
// My Best Release Is Oath In Felghana It Released in USA & Japan

console.log(`Although I Love ${a}`);
// Although I Love Ark Of Napishtim

console.log(`${a} Price in USA Is ${u_price}`);
// Ark Of Napishtim Price in USA Is 20 USD

console.log(`${a} Price in USA Is ${j_price}`);
// Ark Of Napishtim Price in USA Is 10 USD

console.log(`Origin Price Is ${or}`);
// Origin Price Is 30 USD

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .

// part6

let chosen = 3;

let myFriends = [
  {
    title: "Osama",
    age: 39,
    available: true,
    skills: ["HTML", "CSS"],
  },
  {
    title: "Ahmed",
    age: 25,
    available: false,
    skills: ["Python", "Django"],
  },
  {
    title: "Sayed",
    age: 33,
    available: true,
    skills: ["PHP", "Laravel"],
  },
];

// Write Your Code Here

var [friend1, friend2, friend3] = myFriends;

function chooseFriend(fObj) {
  ({
    title: n,
    age: a,
    available: avl,
    skills: [, s],
  } = fObj);
}

if (chosen === 1) chooseFriend(friend1);
if (chosen === 2) chooseFriend(friend2);
if (chosen === 3) chooseFriend(friend3);

console.log(`"${n}"`);
console.log(`${a}`);
console.log(`${avl ? "Availabe" : "Not Availabe"}`);
console.log(`${s}`);

// If chosen === 1

// "Osama"
// 39
// "Available"
// "CSS"

// If chosen === 2

// "Ahmed"
// 25
// "Not Available"
// "Django"

// If chosen === 3

// "Sayed"
// 33
// "Available"
// "Laravel"

// if (chosen === 1) {
//   [
//     {
//       title: n,
//       age: a,
//       available: avl,
//       skills: [, s],
//     },
//   ] = myFriends;
// } else if (chosen === 2) {
//   [
//     ,
//     {
//       title: n,
//       age: a,
//       available: avl,
//       skills: [, s],
//     },
//   ] = myFriends;
// } else if (chosen === 3) {
//   [
//     ,
//     ,
//     {
//       title: n,
//       age: a,
//       available: avl,
//       skills: [, s],
//     },
//   ] = myFriends;
// }
