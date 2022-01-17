// Test Case 1
// let num = 9; // "009"

// Test Case 2
// let num = 20; // "020"

// Test Case 3
// let num = 110; // "110"

// num < 10
//   ? console.log(`00${num}`)
//   : num > 10 && num < 100
//   ? console.log(`0${num}`)
//   : console.log(`${num}`);

//   part2
// let num1 = 9;
let str = "9";
let str2 = "2";

// Output
// if (num1 == str) {
//   if (typeof num1 !== typeof str) {
//     console.log(
//       `${num1} Is The Same Value As ${str} But Not The Same Type`
//     );
//   } else {
//     console.log(`${num1} Is The Same Value As ${str}`);
//   }
// }
// if (num1 != str2) {
//   if (typeof num1 === typeof str2) {
//     console.log(
//       `${str} Is The Same Type As ${str2} But Not The Same Value`
//     );
//   } else {
//     console.log(
//       `${num1} Is Not The Same Value Or The Same Type As ${str2}`
//     );
//   }
// }

// part3
/*
let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1) {
  if (num3 === num2) {
    console.log(
      "30 Is Larger Than 10 And Type string Not The Same Type As number"
    );
  } else if (num3 !== num2) {
    if (num3 !== num1) {
      console.log(
        `${num3} Value And Type Is Not The Same As ${num1} And Type Is Not The Same As ${num2}`
      );
    } else {
      console.log(
        "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
      );
    }
  }
}
*/

// part4

// Edit What You Want Here

let num1 = 15;
let num2 = 10;
let num3 = 15;
let num4 = 41;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
