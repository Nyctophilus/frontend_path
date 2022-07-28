// -HL assign1

// rootDir:  './project/files/typescript/'
// outDir:  './dist/complied/javascript/'
//  "sourceMap": true

// -HL assign2
function calculate(numOne: number, numTwo: number): number {
  return numOne + numTwo;
}

console.log(calculate(10, 20)); // 30
console.log(calculate("10", "20")); // We Don't Need This To Work
console.log(calculate(+true, +true)); // 2

// -HL assign3
function printInfo(
  valueOne: number | string,
  valueTwo: number | string
): string {
  return `Value One Is ${valueOne}, Value Two Is ${valueTwo}`;
}

console.log(printInfo(10, 20)); // Value One Is 10, Value Two Is 20
console.log(printInfo("10", "20")); // Value One Is "10", Value Two Is "20"
console.log(printInfo(true, [1, 2, 3])); // We Don't Need This To Work

// -HL assign4
let arr: (
  | number
  | boolean[]
  | (string | (string | number)[])[]
)[] = [2, [true, false], ["as", ["a", 23]]];

// -HL assign5
function reportErrors(username, age: number) {
  let rank = "Professor";
  return `Username: ${username}`;
  console.log("We Will Not Reach Here");
}

// "noImplicitAny": false
// "noUnusedLocals": true
// "noUnusedParameters": true
// "allowUnreachableCode": false

console.log(reportErrors("Elzero", 40));

// -HL assign6
let nothing;
let theName1: string = "Elzero";
function showMyDetails(a = "", b = "", c: string) {
  return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(undefined, nothing, theName1)); // Elzero

// -HL assign7
function showMsg2(
  user?: string,
  age?: string | number,
  country?: string
): string {
  return `${user}${age}${country}`;
}

console.log(showMsg2());
console.log(showMsg2("Elzero"));
console.log(showMsg2("Elzero", 40));
console.log(showMsg2("Elzero", "40", "Egypt"));
