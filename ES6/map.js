// key,value pairs remembering the order of insertion

let scores = new Map([
  ["maths", 90],
  ["physics", 95],
  ["chemistry", 80],
]);

// scores.set("maths", 90);
// scores.set("physics", 95);
// scores.set("chemistry", 80);

for (const key of scores) {
  console.log(key);
}

// -HL LOOPing  --over itartable methods
for (const key of scores.keys()) {
  console.log(key);
  console.log(scores.get(key));
}

for (const v of scores.values()) {
  console.log(v);
}

// destructed the entries!
for (const [n, v] of scores.entries()) {
  console.log(n, v);
}

console.log(scores.get("maths"));
console.log(scores.get("physics"));
console.log(scores.get("chemistry"));

console.log(scores.size);

console.log(scores.has("maths"));
scores.delete("maths");
console.log(scores.has("maths"));

scores.clear();
console.log(scores.size);
