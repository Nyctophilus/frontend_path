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

/*
  Loop
  - While
*/

let products = [
  "Keyboard",
  "Mouse",
  "Pen",
  "Pad",
  "Monitor",
  "iPhone",
];

let index = 0;

while (index < products.length) {
  console.log(products[index]);
  index += 1;
}

/*
  Loop
  - Do / While
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

do {
  console.log(i);
  i++;
} while (false);

console.log(i);

/*
    Loop Performance 🔥

      --Secrets of js loops
*/

/* 

    Decreasing the work per iteration:
      do a **property lookup** for arr.length each loop is so wasteful, 
      as this value won’t change during the execution of the loop and is therefore an unnecessary performance hit. 
      You can improve the loop performance easily by doing the property lookup once, storing the value in a local variable

      Reversing loop order is a common performance optimization
    
    Decreasing the number of iterations
      Duff’s Device. 
        :  technique of unrolling loop bodies so that each iteration does the job of many iterations.
        img of implementation: https://miro.medium.com/max/700/1*Au0uNRb46Z_diW6yibumAQ.png
        performance improvement will start to raise after 1000 iterations, before that u wont see significant amount of performance improvement  



A summary of what we have learned
            *-* There are four loop types provided by JavaScript.
            *-* The first statement(initialize) can be defined outside the for loop.
            *-* The last statement(increment) can also be moved into the curly brackets
            *-* We can merge the second and third statements
            *-* If there is a false value in the test, the for loop, it will end immediately.
            *-* for-in loop is slowest of all due to property lookup.
            *-* Work done per iteration and Number of iterations determines the performance of any loop.
            *-* Duff’s Device history and its practical implementation in JavaScript.
            *-* Using Duff’s Device in larger iterations, the execution time is up to 70% less than a regular loop
*/
