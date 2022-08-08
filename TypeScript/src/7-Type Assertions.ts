/*
  Data Types
  - Type Assertions
  --- Sometime Compiler Doesnt Know The Information We Do
  --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
*/

// let myImg = document.getElementById("my-img") as HTMLImageElement;
let myImg = <HTMLImageElement>(
  document.getElementById("my-img")
);
console.log(myImg.src);

let data: any = 1000;
console.log((data as string).repeat(3)); //BUG: TS Is Not Performing Any Checks after assertion

/*
  - Union And Intersection Types
  --- Union Type
  ------ The | Symbol Is Used To Create The Union => "Or"

  --- Intersection Type
  ------ Is A Type That Combines Several Types Into One
  ------ The & Symbol Is Used To Create An Intersection => "And"

  --- If A Union Is An OR, Then An Intersection Is An AND.
*/

type A = {
  one: string;
  two: number;
  three: boolean;
};

type B = A & {
  four: number;
};

type C = {
  five: boolean;
};

type mix = A & C;

function getActions(btns: mix) {
  console.log(`Hello ${btns.one}`);
  console.log(`Hello ${btns.two}`);
  console.log(`Hello ${btns.three}`);
  console.log(`Hello ${btns.five}`);
}

getActions({
  one: "String",
  two: 100,
  three: true,
  five: true,
});
