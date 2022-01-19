/*
  Loop Challenge
*/

let myAdmins = [
  "Xooria",
  "ahmed",
  "Osama",
  "sayed",
  "Stop",
  "Samera",
];
let myEmployees = [
  "xmayn",
  "Amgad",
  "samah",
  "Ameer",
  "omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];

let aCounter = 0;
while (myAdmins[aCounter] !== "Stop") {
  aCounter++;
}
let cEmp = 0;
document.write(`<div>We Have ${aCounter} Admins</div>`);

for (let i = 0; i < aCounter; i++) {
  document.write(`<hr>`);
  document.write(
    `The Admin for Team ${i + 1} is ${
      myAdmins[i].charAt(0).toUpperCase() +
      myAdmins[i].slice(1)
    }`
  );

  for (let k = 0; k < myEmployees.length; k++) {
    if (
      myAdmins[i].charAt(0).toUpperCase() ===
      myEmployees[k].charAt(0).toUpperCase()
    ) {
      cEmp += 1;
      document.write(
        `<p>- ${cEmp} ${
          myEmployees[k].charAt(0).toUpperCase() +
          myEmployees[k].slice(1)
        }</p>`
      );
    }
  }
  cEmp = 0;
}
