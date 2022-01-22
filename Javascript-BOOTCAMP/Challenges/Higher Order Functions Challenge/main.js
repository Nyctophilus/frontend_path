/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString =
  "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let z = myString[myString.length - true];

let solution = myString
  .split("")
  .map((c) => c.replace("_", " "))
  .filter(
    (char) =>
      isNaN(parseInt(char)) && char !== "," && char !== z
  )
  .reduce((acc, curr) =>
    acc === curr ? `${acc}` : `${acc}${curr}`
  );

console.log(solution); // Elzero Web School
