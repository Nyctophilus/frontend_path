// Add Variables Here
var numberOne = 10;
var numberTwo = 20;

// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof `${numberOne}${numberTwo}`); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);
/*
  Template Literals Way
  20
  10
*/

console.log(
  "_____________________________________________"
);
// Part 2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

console.log(
  "_____________________________________________"
);
// Part3
console.log(
  '`I\'m In\
\n\\\\\
\nLove \\\\ """ \'\'\'\n\
++ With ++\n\
\\"""\\"""\n\
""JavaScript""``'
);

console.log(
  "_____________________________________________"
);
// Part4
let a = 21;
let b = 20;
let c = b + "" + a;
let d = c + "_" + c;

console.log(`_${a}_${c}_${d}_${b}_`); // _21_2021_2021_2021_20_
