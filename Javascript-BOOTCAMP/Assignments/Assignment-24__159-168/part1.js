/*
	part1
*/

const date = new Date("Nov 11 95");

const seconds = date.getTime() / 1000;
const minutes = seconds / 60;
const hours = minutes / 60;
const days = hours / 24;
const year = days / 365;

console.log(`${Math.trunc(seconds)} seconds`);
console.log(`${Math.trunc(minutes)} minutes`);
console.log(`${Math.trunc(hours)} hours`);
console.log(`${Math.trunc(days)} days`);
console.log(`${Math.trunc(year)} y/o`);

/*
	part2
*/

const beginningOfTime = new Date(0);
beginningOfTime.setFullYear(1980);
beginningOfTime.setSeconds(1);
beginningOfTime.setHours(0);
console.log(beginningOfTime);

// Needed Output

("Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)");

/*
	part3
*/
const part3 = new Date();

part3.setMonth(6);
console.log(part3);

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const ans = `Previos Month is ${
  months[part3.getMonth() - 1]
} and the Last day is ${new Date(
  part3.getFullYear(),
  part3.getMonth() + 1,
  0
).getDate()}`;
console.log(ans);

/*
	part4
*/

console.log(new Date("95 11 22"));
const part4 = new Date();

part4.setFullYear(1995, 10, 22);
console.log(part4);

const part4_1 = new Date(1995, 10, 22, 4, 22, 0);
console.log(part4_1);

/*
	part5
*/

let i = 1;

const t0 = performance.now();
while (i <= 99999) {
  console.log(i);
}
const t1 = performance.now();

console.log(
  `Loop Took ${Math.trunc(t1 - t0)} Milliseconds.`
);
