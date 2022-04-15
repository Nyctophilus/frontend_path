const Employee = function (name) {
  return { name };
};

/*
			polymorphism
*/

// Prototype chaining & Overriding
Employee.prototype.toString = function () {
  return `
		  from overrided toString()..........
	  ${this.name} ${this.id} ${this.title}`;
};

const PolyEmp = (
  name = "Muhammed",
  id = 0,
  salary = 12000,
  title = "DevOps"
) => {
  !name ? "yoo" : name;

  // Enhanced Object Properties
  return {
    name,
    id,
    salary,
    title,
    display() {
      return `name: ${name}, id: ${id}, title: ${title}, Salary: ${salary}`;
    },
  };
};

const poly1 = PolyEmp("Fay", 12);

console.log(poly1.display());

/*
	-HL overloading
*/

const PolyEmp2 = function (name, id) {
  // -HL Constructor overloading
  this.empName = name ? name : "Muhammed";
  this.id = id ? id : 22;
};

// -HL Functions overloading
PolyEmp2.prototype.displayInfo = function () {
  return `Name: ${this.empName}, ID: ${this.id}`;
};

const empppp = new PolyEmp2("yooo", 2521);

console.log(empppp.displayInfo());
