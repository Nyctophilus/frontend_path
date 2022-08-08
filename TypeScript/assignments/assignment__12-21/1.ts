// Write Your Code Here

type n = number;

// Do Not Edit Here
let myData: n;
myData = 1000; // No Problem Here
myData = +true; // No Problem Here

// _______________________________________________________________________________
// Write Your Code Here
type mix2 = number | boolean;
// Do Not Edit Here
let myInfo: mix2;
myInfo = 1000; // No Problem Here
myInfo = true; // No Problem Here

// _______________________________________________________________________________
// Write Your Code Here
type Info = {
  theName: string;
  theAge: number;
};
type Full = Info & {
  country: string;
};

// Do Not Edit Here
function showInfo(data: Info) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
}
console.log(showInfo({ theName: "Mo", theAge: 40 }));

function showFullInfo(data: Full) {
  console.log(`The Name Is ${data.theName}`);
  console.log(`The Age Is ${data.theAge}`);
  console.log(`The Country Is ${data.country}`);
}
console.log(
  showFullInfo({
    theName: "Mo",
    theAge: 4,
    country: "Egypt",
  })
);

// _______________________________________________________________________________
function yesOrNo(val: number): boolean {
  return val > 10;
}

// Do Not Edit Here
console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False

// _______________________________________________________________________________
type custom = "yes" | "No";
function isHeOld(age: number): custom {
  if (age > 40) return "yes";
  else return "No";
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"

// _______________________________________________________________________________
let post: readonly [number, string, boolean];

post = [100, 200, "Title"]; // Error
post = ["Title", 100, true]; // Error
post = [100, "Title", true]; // Good

post.push("Elzero"); // Error => Cant Add

// Create Destructuring Here
const [id, title, state] = post;
// Do Not Edit Here
console.log(id); // 100
console.log(title); // "Title"
console.log(state); // true

// _______________________________________________________________________________
// Create Enums + Function Here
const getInsane = (n: number): number => Game.Hard - n;

enum Game {
  Easy = 100,
  Medium = Easy - 20,
  Hard = Medium - Easy / 2,
  Insane = getInsane(10),
}

// Output
console.log(Game.Easy); // 100
console.log(Game.Medium); // 80
console.log(Game.Hard); // 30
console.log(Game.Insane); // 20

// _______________________________________________________________________________

const user: {
  username: string;
  age: number | string;
  website?: string;
  skills: {
    frontEnd: string[];
    backEnd: (string | number)[];
  };
} = {
  username: "Fayad",
  age: 40,
  website: "Fayad.org",
  skills: {
    frontEnd: ["HTML", "CSS", "JS"],
    backEnd: ["PHP", "Python"],
  },
};

// We Need To Remove Error From This Edits
user.username = "Muhammed";
user.age = "22";
user.skills.backEnd.push(100);
