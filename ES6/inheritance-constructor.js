function Doctor() {}
// -HL when create constructor obj, this what js engine do explicitly
Doctor.prototype = Object.create(Object.prototype, {
  constructor: {
    configurable: true,
    enumerable: true,
    value: Doctor,
    writable: true,
  },
});

function Doctor(name) {
  this.name = name;
}
Doctor.prototype.treat = function () {
  return "treated";
};
Doctor.prototype.toString = function () {
  return `[Doctor: ${this.name}]`;
};
function Surgeon(name, type) {
  this.name = name;
  this.type = type;
}
Surgeon.prototype = new Doctor();
Surgeon.prototype.constructor = Surgeon;

Surgeon.prototype.treat = function () {
  return `${Doctor.prototype.treat.call(this)} > Operated!`;
};

const s1 = new Surgeon("meyoo", "mao");

console.log(s1.treat());
/*
	assignment
*/

function Car(model, year) {
  (this.model = model), (this.year = year);
}
Car.prototype.drive = function () {
  return `Let's Go!`;
};
Car.prototype.toString = function () {
  return `Car: ${this.model}`;
};

function Honda(model, year) {
  Car.call(this, model, year);
  //   ((this.model = model)),
  //     (this.year = year);
}
function BMW(model, year) {
  (this.model = model), (this.year = year);
}

Honda.prototype = new Car("honda", 22);
Honda.prototype.constructor = Honda;

// overrideing
Honda.prototype.drive = function () {
  return `${Car.prototype.drive.call(
    this
  )} at speed of 80m/h`;
};

BMW.prototype = new Car();
BMW.prototype.constructor = BMW;

// overrideing
BMW.prototype.drive = function () {
  return `${Car.prototype.drive.call(
    this
  )} at speed of 120m/h`;
};

// -HL all prototype props can be accessed by child class instances!!
const honda = new Honda("honda", 22);
const bmw = new BMW("BMW", 33);

console.log(honda.drive());
console.log(bmw.drive());

console.log(honda.toString());
console.log(bmw.toString());
