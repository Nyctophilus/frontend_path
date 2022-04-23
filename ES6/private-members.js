/*
	-HL Private members are those that can only be reached inside the class body

	-HL Static members are those that can be accessed through the className directly only -Not the instances- ClassName.PrivateMember
*/

/*
	using Symbol
*/

const phone = Symbol();

class Person {
  constructor(ph = 1235234) {
    this[phone] = ph;
  }
}

const p1 = new Person();

console.log(p1[phone]);

/*
	using # sign

	Only reachable inside the class
*/

class Persoon {
  #_addr = "35- st.";
  #fun = () => {
    return `this is a private method!`;
  };
  constructor(name = "Fayad") {
    this.name = name;
    console.log(this.#fun());
  }

  toString() {
    return this.#_addr;
  }
}
const p2 = new Persoon();

console.log(p2.toString());

Persoon.prototype.display = function () {
  //   return this.#_addr; // private field is only reachable inside class
  // So you must define setter/getter for private fields inside the class ONLY!
  // Even on prototypes, u can access private members.. u have to be inside the acutal class to do so!
};

/*
	Static members
*/

class Persooon {
  static locInfo = "Alex";

  static classInfo() {
    // in static method this. refere to the acutal class not the object

    return `this is Static method and have a prop: ${this.locInfo}`;
  }
}

const p3 = new Persooon();
// FIXME console.log(p3.locInfo); //can't be accessed

console.log(Persooon.locInfo); // Validate!
console.log((Persooon.locInfo = "Cairo"));
console.log(Persooon.classInfo());
