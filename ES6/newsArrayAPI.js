const fruits = [
  "mango",
  "strawberry",
  "apple",
  "banna",
  "orange",
  "blueberry",
];

// array.every as if  &&
// array.some as if  ||

const log = fruits.some((frstParam, index, arr) =>
  frstParam.startsWith("a")
);

console.log(log);

/*
	-HL Array.map

	mapping current array into new array!
*/
const newFruits = fruits.map((processingElement) => {
  return `I like ${processingElement}`;
});

console.log(newFruits);

/*
	-HL ForEach
*/

fruits.forEach((value) => console.log(value));

/*
	-HL Array.find
*/

const finding = fruits.find((val) => val === "mango");

console.log(finding);

/*
	-HL Array.filter
*/
const saFruits = fruits.filter(
  (val) => val.startsWith("a") || val.startsWith("s")
);
console.log(saFruits);

/*
	ES7 features
*/

console.log([1, 23, 52, 2, 6, "as"].includes("as"));

/*
	ES9 features
*/

[1, 23, "a"].flat(1, 2, 3);
[1, 23, "a"].flatMap((x) => [x, x * 2]);
