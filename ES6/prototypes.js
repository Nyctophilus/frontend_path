// prototype is a prop on a function ... shared with all instances
// instead of recreate memory loc to each prop if instances ... it would be only one memory loc for the prototype and reusing it
// saving a lot of memory space

const passenger = {
  name: "Muhammed",
};

console.log("name" in passenger);
console.log(passenger.hasOwnProperty("name"));
// ''in'' checks for even the inherited props
// ''hasOwnProperty'' checks for the owned props only
console.log("hasOwnProperty" in passenger);
console.log(passenger.hasOwnProperty("hasOwnProperty"));

/*
	prototype property
*/
const customObj = {};
const customProtoType = Object.getPrototypeOf(customObj);

console.log(customProtoType === Object.prototype);
console.log(Object.prototype.isPrototypeOf(customObj));

console.log(customObj.toString());
// FIXME shadowing method
customObj.toString = () => `yooo SHADOW woho`;
console.log(customObj.toString());
delete customObj.toString; //delete the shadowing
console.log(customObj.toString());

/*
	flight prototype
*/

function Flight(airline, flightNumber) {
  this.airline = airline;
  this.flightNumber = flightNumber;
}

Flight.prototype = {
  // this way -with literal creation- u don't have a constructor prop, u would have to create one if needed
  constructor: Flight, // pointing the constructor to the flight object not Object

  display: function () {
    console.log(this.airline, this.flightNumber);
  },

  toString: function () {
    console.log(`flight to: ${this.airline}`);
  },
};

const f1 = new Flight("Alex", 22);
f1.display();
f1.toString();

/*
	-HL Create Custom method in any prototype!
*/

String.prototype.display = function () {
  console.log(this.toString());
};

"Yoooo mate i'm from adjusted String's prototype :O".display();
