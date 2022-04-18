const fun = function (n) {
  return `Name: ${this.name} Id:${this.id} ... testing: ${n}`;
};

const s1 = {
  name: "Muhammed",
  id: 22,
};

const s2 = {
  name: "lana",
  id: 61,
};

fun.call(s1, "yooooo");
fun.call(); // this ref=> window here

// // apply is the excat same as call except u have to pass array not singals

fun.apply(s1, ["yooooo"]);

/*
	-HL Bind()
	binds object to a method
*/

const bindObj1 = fun.bind(s1);
const bindObj = fun.bind(s2, 10);

console.log(bindObj1(22));
console.log(bindObj());

// assignment

function mul(n1, n2) {
  return n1 * n2;
}

const mul = function (n1, n2) {
  return n1 * n2;
};
