const project = {
  name: "borw",
  display: function () {
    console.log(this.name);
  },
};

// create an object explicitly and assign to a prototype
Object.create(Object.prototype, {
  name: {
    configurable: true,
    enumerable: true,
    value: "Silk Road",
    writable: true,
  },
});

/*
	Custom inheritance
*/

// created proj2, reference prototype to project as'parent'
const proj2 = Object.create(project, {
  name: {
    configurable: true,
    enumerable: true,
    value: "Road Work",
    writable: true,
  },
});

proj2.display();

/*
	Assignment
*/
const Car = {
  model: "yaak",
  year: "2022",
  drive: function () {
    return `Let's Go!`;
  },
};

const disp = function () {
  return `This is ${this.model}, Made at ${this.year}`;
};

const Honda = Object.create(Car, {
  model: {
    value: "Honda",
  },
  year: {
    value: 2030,
  },
  toString: { value: disp },
});

const BMW = Object.create(Car, {
  model: {
    value: "BMW",
  },
  year: {
    value: 2010,
  },
  toString: { value: disp },
});

console.log(Honda.drive());
console.log(BMW.drive());

console.log(Honda.toString());
console.log(BMW.toString());
