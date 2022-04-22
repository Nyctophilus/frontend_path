// hold any number of values.. dont allow dublicates

const courses = new Set(["React", "Node", "Js", "Nextjs"]);

// courses.add("React").add("Node").add("Js").add("Nextjs");

for (const v of courses) {
  console.log(v);
}

console.log(courses.entries());
console.log(courses.keys());
console.log(courses.values());

console.log(courses.size);
console.log(courses.has("Js"));
courses.delete("Node");

courses.clear();
console.log(courses.size);
