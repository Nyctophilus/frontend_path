const Employee = function (name, id = 0, title) {
  // -HL prefered way to create properties only in constructor
  this.name = name;
  this.id = id;
  this.title = title;
  this.display = fun;
};

// FIXME Functional shared pattern
const fun = () => {
  return `Name: ${this.name} Id:${this.id} Title:${this.title}`;
};

// prototyping the functions to avoid recreation of the functions everytime instance is created

// -HL prefered way to create methods
Employee.prototype.displayInfo = function () {};
Employee.prototype.otherFunc = function () {};

const emp1 = new Employee(
  "muhammed",
  22,
  "Frontend developer"
);
console.log(emp1.display());

/*
			polymorphism
			
	Prototype chaining & Overriding
*/

Employee.prototype.toString = function () {
  return `
		from overrided toString()..........
	${this.name} ${this.id} ${this.title}`;
};

console.log(emp1.toString());
