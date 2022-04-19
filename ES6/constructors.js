// constructor returns a object of that type
// FIXME js engine returns an object expelsdly with the new keyword

function Flight(airline, flightNumber) {
  airline;
  flightNumber;

  this.display = function () {
    console.log(airline, flightNumber);
  };
}

const fl2 = new Flight("cairo");
const fl1 = new Flight("alex", 22);
fl2.display();

console.log(
  fl1 instanceof Flight,
  fl1.constructor === Flight
);

/*
	assignment
*/

function Laptop(
  manufacturer = "DELL",
  memory = "1TB",
  capacity = "average"
) {
  manufacturer, memory, capacity;

  this.display = () => {
    console.log(manufacturer, memory, capacity);
  };
}

const l1 = new Laptop("AMD", "10T", "Super");
l1.display();

const l2 = new Laptop("NVIDIA", "100TB", "Ultimate");
l2.display();
