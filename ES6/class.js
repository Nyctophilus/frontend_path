// classes acts as a buleprint template for infinite number of objects 'instances'

class Passenger {
  constructor({ fn, ln }, id) {
    this.fn = fn;
    this.ln = ln;
    this.id = id;
  }
}

const traveller1 = new Passenger(
  { fn: "Muhammed", ln: "Fayad" },
  22
);
const traveller2 = new Passenger(
  { fn: "lana", ln: "ahmed" },
  18
);

console.log(traveller1);
console.log(traveller2);

/*
	Inheritacne
	IS-A relation ... reusability
*/

class BMW {
  constructor(mk, md, yr) {
    this.make = mk;
    this.model = md;
    this.year = yr;
  }

  start() {
    return `Start Engine!  ${this.model}`;
  }

  stop() {
    return `Stop Engine!`;
  }
}

class ThreeSeries extends BMW {
  constructor(make, model, year, cruise) {
    super(make, model, year);
    this.cruisecontrolEnabled = cruise;
  }
}

class FiveSeries extends BMW {
  constructor(make, model, year, park) {
    super(make, model, year);
    this.parkingAssistEnabled = park;
  }

  // Overriding the parent method
  start() {
    return `Remote Starting Engine from FiveSeries, ${this.parkingAssistEnabled}`;
  }
}

const s5 = new FiveSeries(
  "yoo",
  "ssss5",
  2030,
  "Parking dude"
);

console.log(s5);
console.log(s5.start());
