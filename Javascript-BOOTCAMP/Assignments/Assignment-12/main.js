function sayHello(theName, theGender) {
  // Your Code Here
  theGender === "Male"
    ? console.log(`Hello Mr ${theName}`)
    : theGender === "Female"
    ? console.log(`Hello Miss ${theName}`)
    : console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// -------------------------------------------------------
// part2
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else {
    if (operation === "subtract") {
      console.log(firstNum - secondNum);
    } else if (operation === "multiply") {
      console.log(firstNum * secondNum);
    } else if (
      operation === "add" ||
      operation == undefined
    ) {
      console.log(firstNum + secondNum);
    } else {
      console.log(`Wrong Operation!`);
    }
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
calculate(20, 30, "xaddx");

// -------------------------------------------------------
// part3
function ageInTime(theAge) {
  // Your Code Here
  let month, week, day, hour, mint, sec;
  if (theAge > 10 && theAge < 100) {
    month = theAge * 12;
    console.log(`You Lived ${month} Months.`);

    week = month * 4;
    console.log(`You Lived ${week} Weeks.`);

    day = week * 30;
    console.log(`You Lived ${day} Days.`);

    hour = day * 24;
    console.log(`You Lived ${hour} Hours.`);

    mint = hour * 60;
    console.log(`You Lived ${mint} Minutes.`);

    sec = mint * 60;
    console.log(`You Lived ${sec} Seconds.`);
  } else {
    console.log(`Age Out Of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

// -------------------------------------------------------
// part4
function checkStatus(a, b, c) {
  // Your Code Here
  let name = "Unknown!",
    age = "Unknown!",
    status = "Unknown!";

  if (typeof a === "string") name = a;
  if (typeof b === "string") name = b;
  if (typeof c === "string") name = c;

  if (typeof a === "number") age = a;
  if (typeof b === "number") age = b;
  if (typeof c === "number") age = c;

  if (
    typeof a === "boolean" ||
    typeof b === "boolean" ||
    typeof c === "boolean"
  ) {
    if (a === true || b === true || c === true) {
      status = "You Are Available For Hire";
    } else {
      status = "You Are Not Available For Hire";
    }
  }

  console.log(
    `Hello ${name}, Your Age Is ${age}, ${status}`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus("Muhammed", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "lana", 18); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// -------------------------------------------------------
// part5
function createSelectBox(startYear, endYear) {
  // Your Code Here
  document.write(`<select>`);

  for (i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }

  document.write(`</select>`);
}
createSelectBox(1995, 2022);

// -------------------------------------------------------
// part6

function multiply(...nums) {
  let result = 1;

  for (i = 0; i < nums.length; i++) {
    if (typeof nums[i] === "string") continue;
    else if (!Number.isInteger(nums[i])) {
      num = Number.parseInt(nums[i]);
    } else {
      num = nums[i];
    }
    result *= num;
  }
  console.log(result);
}

multiply(10, 20.99999); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
multiply(100.5, 10.222222222222, "B"); // 1000
