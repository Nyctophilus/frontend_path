/*
  Loop
  - For
  for ([1] [2] [3]) {
    // Block Of Code
  }
*/

for (let i = 0; i < 10; i++) {
  console.log(i);
}

/*
  Loop
  - Loop On Sequences
*/

let myFriends = [
  1,
  2,
  "Osama",
  "Ahmed",
  3,
  4,
  "Sayed",
  6,
  "Ali",
];

let onlyNames = [];

for (let i = 0; i < myFriends.length; i++) {
  if (typeof myFriends[i] === "string") {
    onlyNames.push(myFriends[i]);
  }
}

console.log(onlyNames);

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

/*
  Loop
  - Nested Loops
*/

let products = [
  "Keyboard",
  "Mouse",
  "Pen",
  "Pad",
  "Monitor",
];

let colors = ["Red", "Green", "Black"];

let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
  console.log("#".repeat(15));
  console.log(`# ${products[i]}`);
  console.log("#".repeat(15));
  console.log("Colors: ");
  for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
  }
  console.log("Models: ");
  for (let k = 0; k < models.length; k++) {
    console.log(`- ${models[k]}`);
  }
}

/*
  Loop Control
  - Break
  - Continue
  - Label
*/

let products = [
  "Keyboard",
  "Mouse",
  "Pen",
  "Pad",
  "Monitor",
];

let colors = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}

/*
  Loop For Advanced Example
*/

let products = [
  "Keyboard",
  "Mouse",
  "Pen",
  "Pad",
  "Monitor",
  "iPhone",
];
let i = 0;

for (;;) {
  console.log(products[i]);
  i++;
  if (i === products.length) break;
}
