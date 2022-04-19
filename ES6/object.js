// -HL primitive data types vars store values inside em directly

// -HL reference type var are pointing to a memory location not storing values directly!
const obj = new Object();

// garbage collection, when u de-allocate object-var from memory location
obj = null;

"SomeProp" in obj; // prop even inheirted ones

obj.hasOwnProperty("SomeProp"); // prop only Owned ones

/*
	js objects are powerful like hashtables you can add/remove props at any time
*/

delete obj.prop; // returns true if it's deleted

for (const prop in object) {
  console.log(prop);
  console.log(object[prop]);
}

Object.keys(obj); // list all keys of an object in array

// FIXME Js engine call [[SET]] [[GET]] [[PUT]] while handling props inside object

/*
	accessor properties
*/

const creditCard = {
  _name: "mo",

  get name() {
    return this._name;
  },

  set name(v) {
    this._name = v;
  },
};

/*
	accessor attributes 
*/

Object.defineProperty(obj, "heey", {
  value: "boooooooi",

  // defaults are false!! inside defineProperty method
  // true are default when using litral creation

  enumerable: false, // allow itration or not
  configurable: false, // allow delete or not
  writable: false, // force read-only or allow change the value
});

// accessor prop attr
Object.defineProperty(obj, "name", {
  get: function () {
    return this._name;
  },

  set: function (v) {
    this._name = v;
  },
  enumerable: true,
  configurable: true,
  writable: true,
});

/*
	multiple props
*/
Object.defineProperties(obj, {
  otherProp: {
    value: "broo",
  },
  _name: {
    value: "meeeee",
    // u can do all the rest too
  },
  name: {
    get: function () {
      return this._name;
      // u can do all the rest too
    },
  },
});

/*
	reading prop discriptor
*/
const desc = Object.getOwnPropertyDescriptor(obj, "name");

console.log(desc.enumerable);
console.log(desc.writable);
console.log(desc.configurable);
console.log(desc.value);
