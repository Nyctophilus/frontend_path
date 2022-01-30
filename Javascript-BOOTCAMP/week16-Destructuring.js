// /*
//   Destructuring
//   " is a JavaScript expression that allows us to extract data from arrays,
//     objects, and maps and set them into new, distinct variables. "
//   - Destructuring Array
// */

// let a = 1;
// let b = 2;
// let c = 3;
// let d = 4;

// let myFriends = ["Ahmed", "Sayed", "Ali", "Maysa"];

// [a = "A", b, c, d, e = "Osama"] = myFriends;

// // console.log(a);
// // console.log(b);
// // console.log(c);
// // console.log(d);
// // console.log(e);

// // console.log(myFriends[4]);

// let [, y, , z] = myFriends;

// // console.log(y);
// // console.log(z);

// // .
// // .
// // .
// // .
// // .
// // .
// // .
// // .

// /*
//   Destructuring
//   - Destructuring Array Advanced Examples
// */

// myFriends = [
//   "Ahmed",
//   "Sayed",
//   "Ali",
//   ["Shady", "Amr", ["Mohammed", "Gamal"]],
// ];

// // console.log(myFriends[3][2][1]);
// [, , , [a, , [, b]]] = myFriends;

// // console.log(a); //Shady
// // console.log(b); //Gamal

// // .
// // .
// // .
// // .
// // .
// // .
// // .
// // .

// /*
//   Destructuring
//   - Destructuring Array => Swapping Variables
// */

// let book = "Video";
// let video = "Book";

// // Old Way

// // // Save Book Value In Stash
// // let stach = book;
// // // Change Book Value
// // book = video;
// // // Change Video Value
// // video = stach;

// // Destructuring way

// [book, video] = [video, book];

// console.log(book);
// console.log(video);

// // .
// // .
// // .
// // .
// // .
// // .
// // .
// // .

// /*
//   Destructuring
//   - Destructuring Object
// */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
// };

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// // ({ theName, theAge, theTitle, theCountry } = user);
// const { theName, theAge, theCountry } = user;

// console.log(theName);
// console.log(theAge);
// console.log(theCountry);

// /*
//   Destructuring
//   - Destructuring Object
//   --- Naming The Variables
//   --- Add New Property
//   --- Nested Object
//   --- Destructuring The Nested Object Only
// */

// const user = {
//   theName: "Osama",
//   theAge: 39,
//   theTitle: "Developer",
//   theCountry: "Egypt",
//   theColor: "Black",
//   skills: {
//     html: 70,
//     css: 80,
//   },
// };

// const {
//   theName: n,
//   theAge: a,
//   theCountry,
//   theColor: co = "Red",
//   skills: { html: h, css },
// } = user;

// console.log(n);
// console.log(a);
// console.log(theCountry);
// console.log(co);
// console.log(`My HTML Skill Progress Is ${h}`);
// console.log(`My CSS Skill Progress Is ${css}`);

// const { html: skillOne, css: skillTwo } = user.skills;

// console.log(`My HTML Skill Progress Is ${skillOne}`);
// console.log(`My CSS Skill Progress Is ${skillTwo}`);

// // .
// // .
// // ..

// // .
// // .
// // .
// // .
// // .
// // .
// // .

// /*
//   Destructuring
//   - Destructuring Function Parameters
// */

// let user = {
//   theName: "Muhammed",
//   theAge: 25,
//   skills: {
//     html: 95,
//     css: 85,
//   },
// };

// showDetails(user);

// // function showDetails(obj) {
// //   console.log(`Your Name Is ${obj.theName}`);
// //   console.log(`Your Age Is ${obj.theAge}`);
// //   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// // }

// function showDetails({
//   theName: n,
//   theAge: a,
//   skills: { css: cs },
// } = user) {
//   console.log(`Your Name is ${n}`);
//   console.log(`Your Age is ${a}`);
//   console.log(`Your CSS Progress is ${cs}`);
// }

// .
// .
// .
// .
// .
// .
// .
// .

/*
  Destructuring
  - Destructuring Mixed Content
*/

const user = {
  theName: "Muhammed",
  theAge: 25,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Alexandria",
    UEA: "Dubai",
  },
};

const {
  theName: n,
  theAge: a,
  skills: [, , js],
  addresses: { UEA: i },
} = user;
console.log(
  `Ur Name is ${n}, Ur Age is ${a}, Ur Recent Skills is ${js}, You Live in ${i}, isa`
);

// *************** Desctructuring MAP *********************************************************************

const heroes = [{ name: "Batman" }, { name: "Joker" }];
const names = heroes.map(function ({ name }) {
  return name;
});
names; // => ['Batman', 'Joker']
