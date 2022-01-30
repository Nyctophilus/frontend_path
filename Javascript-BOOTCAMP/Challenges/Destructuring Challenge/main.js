// Generate random number 1 to 3
let chosen = parseInt(Math.random() * 3) + 1;
// console.log(parseInt(Math.random() * 3) + 1);

let myFriends = [
  {
    title: "Osama",
    age: 39,
    available: true,
    skills: ["HTML", "CSS"],
  },
  {
    title: "Ahmed",
    age: 25,
    available: false,
    skills: ["Python", "Django"],
  },
  {
    title: "Sayed",
    age: 33,
    available: true,
    skills: ["PHP", "Laravel"],
  },
];

function friendChoose(which) {
  which = chosen - 1;
  const friend = myFriends[which];

  ({
    title,
    age,
    available,
    skills: [, second],
  } = friend);

  console.log(title);
  console.log(age);
  console.log(available ? "Available" : "Not Availabe");
  console.log(second);
}
friendChoose(chosen);
