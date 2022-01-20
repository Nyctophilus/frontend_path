/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(...args) {
  let name, age, status;

  for (let i = 0; i < 3; i++) {
    typeof args[i] === "string"
      ? (name = args[i])
      : typeof args[i] === "number"
      ? (age = args[i])
      : args[i] === true
      ? (status = "You Are Available For Hire")
      : (status = "You Are Not Available For Hire");
  }

  document.write(`<div>`);
  document.write(
    `Hello ${name}, Your Age Is ${age}, ${status}`
  );
  document.write(`</div>`);
}

showDetails("Muhammed", 25, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, 18, "lana"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
